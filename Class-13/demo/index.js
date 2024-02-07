'use strict';
const express = require('express');
const app = express();
require('dotenv').config();
const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
const cors = require('cors');
const port = process.env.PORT || 3000;

const { Client } =  require('pg')
//postgres://username:password@localhost:5432/darabasename
const url =`postgres://raniaalbliwi:9962@localhost:5432/demo13`
const client = new Client(url)


//route 
app.get('/', homeHandler);
app.post('/addRecipe', addRecipeHandler);
app.get('/allRecipes', allRecipesHandler);
//handlers 

function homeHandler(req, res){
    res.send("welcome home")
}
function addRecipeHandler(req, res){
    console.log(req.body)

    // const title = req.body.title;
    // const time  = req.body.time;
    // const image = req.body.image;

    const { title, time, image }= req.body // destructuring  ES6
     // client.query(sql, values).then().catch
    const  sql = `INSERT INTO recipe(title, time, image)
    VALUES (title, time,image) RETURNING *;`
    const values = [title, time, image] 
    client.query(sql, values).then((reuslt)=>{
        console.log(reuslt.rows)
        res.status(201).json(reuslt.rows)
    }).catch()

    
}
//listener 
function allRecipesHandler(req,res){
    const sql = `SELECT * FROM recipe;`
    client.query(sql).then((reuslt)=>{
        const data = reuslt.rows
        res.json(data)

    })
    .catch()

}
client.connect().then(()=>{

    app.listen(port, ()=>{
    console.log(`listening to port ${port}`);
    })
}

 ).catch()