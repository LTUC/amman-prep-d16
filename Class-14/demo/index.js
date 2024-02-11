'use strict';
const express = require('express');
const app = express();
require('dotenv').config()
// const axios = require('axios');
const { Client } =require('pg') ;
//postgres://username:password@localhost:5432/darabasename
const url =`postgres://raniaalbliwi:9962@localhost:5432/demo`
const client = new Client(url)

const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
const cors = require('cors');
const port = process.env.PORT || 3000


//routes
app.get('/', homePageHandler);
app.post('/addRecipe', addRecipeHandler)
app.get('/allRecipes', allRecipesHandler)
app.put('/editRecipe/:recipeId', editRecipeHandler)
app.delete('/deleteRecipe/:id', deleteRecipeHandler)
//function 
function homePageHandler(req,res){
    res.send("welcome home")
}

function addRecipeHandler(req,res){
    
    console.log(req.body)
    // let title = req.body.title;
    // let time = req.body.time;
    // let image = req.body.image;
    const { title,time,image } =req.body // destructuring
    // client.query('SELECT $1::text as message', ['Hello world!'])
    const sql = `INSERT INTO recipe (title, time, image)
    VALUES ($1,$2,$3) RETURNING *;`
    const values = [title,time,image]
    client.query(sql, values).then(result=>{

        // console.log(result.rows)
        // res.status(201).send("data saved  to db")
        res.status(201).json(result.rows)

    }

    ).catch()

}
function allRecipesHandler(req, res){
    const sql = `SELECT * FROM recipe;`;
    client.query(sql).then(result=>{
        // console.log(result.rows)
        res.json(result.rows)
    }).catch()
}
function editRecipeHandler(req, res){
    // console.log(req.params)
    let recipe = req.params.recipeId;
    // console.log(req.body)
    let {title, time, image} = req.body;
    let sql = `UPDATE recipe
    SET title = $1, time = $2, image = $3
    WHERE id = $4;`;
    let values = [title, time, image,recipe];
    client.query(sql, values).then(result=>{
        res.send("successfuly updated")

    }).catch()

}

function deleteRecipeHandler(req,res){
    console.log(req.params)
    let {id} = req.params;
    let sql=`DELETE FROM recipe WHERE id = $1 ;`;
    let values = [id];
    client.query(sql, values).then(result=>{
        res.status(204).send("successfuly deleted")
    }).catch()
}
//500 error handler
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Internal Server Error');
});


client.connect().then(()=>{

    app.listen(port,()=>{
        console.log(`listening on port ${port}`);
    });
}).catch()