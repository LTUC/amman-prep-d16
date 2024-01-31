
//1. require express framework 
const express = require('express')

// 2. invoke express
const app = express()
const port = 3001
const recipesData = require('./data.json')

//path/ rout/ endpoint/ URI 

//app.METHOD(PATH, HANDLER)
//http://localhost:3001/firstrout
app.get('/firstrout', firstRouteHandler) 

function firstRouteHandler(req,res){
    res.send("welcome to first rout.")
    console.log("hi from first rout")
}

//http://localhost:3001
app.get('/', homePageHandler)
function homePageHandler(req,res){
    res.send("welcome to home page")
}

//http://localhost:3001/recipes
app.get('/recipes', recipesHandler)
function recipesHandler(req,res){
    const result = []
    //looping
    recipesData.data.forEach(e=>{
        let singleRecipe = new Recipe(e.title, e.summary, e.image)
        result.push(singleRecipe)
    })
    // console.log(result)
    res.json(result)
}


//constructor
function Recipe(title, description, image){
    this.title = title,
    this.description = description
    this.image = image
}


//3. run server make it lis
app.listen(port, () => {
  console.log(`my app is running and  listening on port ${port}`)
})