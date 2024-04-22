'use strict';

//import the express framework
const express = require('express');
//import cors
const cors = require('cors');

const server = express();

const recipesData = require('./data.json');
const pg = require('pg')
const axios = require('axios');
require('dotenv').config();

//server open for all clients requests
server.use(cors());
server.use(express.json())
const client = new pg.Client('postgresql://localhost:5432/recipes2')
const PORT = 8080;

//constructor
function Recipe(id, title, time, summary) {
    this.id = id;
    this.title = title;
    this.time = time;
    this.summary = summary;
}

//Routes
server.get('/', homeHandler)
server.get('/test', testHandler)
server.get('/recipes', recipesHandler)
server.get('/newRecipes', newRecipesHandler)
server.get('/favRecipes', getFavRecipesHandler)
server.post('/favRecipes', addFavRecipesHandler)
server.delete('/favRecipes/:id', deleteFavRecipesHandler)
server.put('/favRecipes/:id', updateFavRecipesHandler)
server.get('*', defaltHandler)

server.use(errorHandler); // use middleware function


function getFavRecipesHandler(req, res){
    const sql = 'SELECT * FROM recipe_detail';
    client.query(sql)
    .then((data) => {
        res.send(data.rows)
    })
    .catch((err) => {
        errorHandler(err, req, res);
    })
}

function addFavRecipesHandler(req,res){

    const recipe= req.body;
    const sql = 'INSERT INTO recipe_detail (title, time, summary) VALUES ($1, $2, $3) RETURNING *'
    
    const values= [recipe.title, recipe.time, recipe.summary]

    client.query(sql, values)
    .then((data) => {
        res.send("your data was added")
    })
    .catch(error =>{
        errorHandler(error, req, res);
    });
}
// Functions Handlers
function homeHandler(req, res) {
    res.send("Hello from the HOME route");
}


// delete request

function deleteFavRecipesHandler(req, res){
    const id= req.params.id;

    const sql = `DELETE FROM recipe_detail where id= ${id}`
    client.query(sql)
    .then((data) => {
        res.status(204).json({})
    })
    .catch((err) => {
        errorHandler(err, req, res);
    })
}

//update request
function updateFavRecipesHandler(req, res){
    const id= req.params.id;

    const sql = `UPDATE  recipe_detail SET title=$1, time=$2, summary=$3 where id= ${id} RETURNING *`
    const values= [req.body.title, req.body.time, req.body.summary]
    client.query(sql, values)
    .then((data) => {
        res.status(200).send(data.rows)
    })
    .catch(error =>{
        errorHandler(error, req, res);
    });
}

function testHandler(req, res) {
    let str = "Hello from the backend";
    console.log("Hiiiii");
    res.status(200).send(str);
}

function defaltHandler(req, res) {
    res.status(404).send("defualt route");
}

function recipesHandler(req, res) {
    // console.log(recipesData.data);
    let mapResult = recipesData.data.map((item) => {
        let singleRecipe = new Recipe(item.id, item.title, item.readyInMinutes, item.summary);
        return singleRecipe;
    })
    res.send(mapResult);
}

function newRecipesHandler(req, res) {
    // //get recipes data from 3rd party API
    // // 1. send a request to the recipes API
    // const APIKey = process.env.APIKey;
    // console.log(APIKey)
    // const url = `https://api.spoonacular.com/recipes/random?apiKey=${APIKey}&number=3`;
    // let axiosRes = await axios.get(url); //set timer
    // console.log(axiosRes.data);
    // console.log("Roaa");
    // let mapResult = axiosRes.data.recipes.map((item)=>{
    //     let singleRecipe = new Recipe(item.id,item.title,item.readyInMinutes,item.summary);
    //     return singleRecipe;
    // })
    // res.send(mapResult);


    //get recipes data from 3rd party API
    // 1. send a request to the recipes API
    try {

        const APIKey = process.env.APIKey;
        console.log(APIKey)
        const url = `https://api.spoonacular.com/recipes/random?apiKey=${APIKey}&number=3`;
        console.log("before axios");
        axios.get(url)
            .then((result) => {
                //code depends on axios result
                console.log("axios result");

                let mapResult = result.data.recipes.map((item) => {
                    let singleRecipe = new Recipe(item.id, item.title, item.readyInMinutes, item.summary);
                    return singleRecipe;
                })
                res.send(mapResult);
            })
            .catch((err) => {
                console.log("sorry", err);
                res.status(500).send(err);
            })

        //code that does not depend on axios result
        console.log("after axios");
    }
    catch (error) {
        errorHandler(error,req,res);
    }
}

//middleware function
function errorHandler(erorr, req, res) {
    const err = {
        status: 500,
        massage: erorr
    }
    res.status(500).send(err);
}

client.connect()
    .then(() => {
        // http://localhost:8080 => (Ip = localhost) (port = 8080)
        server.listen(PORT, () => {
            console.log(`listening on ${PORT} : I am ready`);
    });

})



