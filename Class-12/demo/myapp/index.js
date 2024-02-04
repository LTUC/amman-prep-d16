'use strict';
const express = require('express');
const app = express();
require('dotenv').config()
const axios = require('axios');

const cors = require('cors');
const port = process.env.PORT
const apiKey =  process.env.API_KEY

//routes
app.get('/', homePageHandler);
app.get('/recipes', recipesHandler);
app.get('/searchRicepe', searchRicepeHandler);


//function 
function homePageHandler(req,res){
    res.send("welcome home")
}
function recipesHandler(req,res){
//axios.get(url).then().catch()
let url = `https://api.spoonacular.com/recipes/random?apiKey=${apiKey}`
axios.get(url)
.then(result=>{
    console.log(result.data.recipes);
    let recipeData = result.data.recipes.map(recipe=>{
        return new Recipe(recipe.title, recipe.readyInMinutes, recipe.image)
    })
    res.json(recipeData)
})
.catch(error=>{
    console.log(error)
    res.status(500).send('Internal Server Error');
})
}
//http://localhost:3000/searchRicepe?name=pizza
function searchRicepeHandler(req,res){
    let recipeName = req.query.name// its up to me what i call it 
    let url =`https://api.spoonacular.com/recipes/complexSearch?query=${recipeName}&apiKey=${apiKey}`
    axios.get(url)
    .then(result=>{
        // console.log(result.data.results)
        let response = result.data.results
        res.json(response)
    })
    .catch(error=>{
        console.log(error)
        res.status(500).send('Internal Server Error');
    })
}



//costructor
function Recipe(title, time, image){
    this.title = title;
    this.time = time;
    this.image = image;
}
//404 error handler
app.use((req, res, next) => {
    res.status(404).send('404 Not Found');
});

//500 error handler
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Internal Server Error');
});
app.listen(port,()=>{
    console.log(`listening on port ${port}`);
});