
# Render deployment (working )

You can use Render dashboard in order to deploy your Node Application and your Postgres database by following the below steps:

## Deploying  Node application:

- Go to https://dashboard.render.com/
	
- Create an account using your Email or GitHub (you will need to authorize it).
	
- Go to dashboard.
	
- Click on `Add +`.
	
- Choose `web service` from the drop down list
	
- select your gitHub repo.

**only fill :**

    Name :  `server name`       
    Start Command  : `node index.js`  (your entry file name)

- Click on `Advanced` to add an environment variable if needed (adding the DATABASE_URL for ex.)
	
- Click `Deploy`

## Deploying Postgres Database: 
`with Render:`
------------------
 1- Go to your dashboard

 2- Click on `Add +`

 3- Choose `PostgreSQL` from the drop down list

 4- Click on `Create Database`

 5- you will end-up with:

`internal database URL`  (use it if you are deploying your server on render)

`External database URL` (use it if you are deploying your server on other hosting services).

`with ElephantSQL`:
------------------
visit the link : https://customer.elephantsql.com/instance

## Vercel :   CLI


if you still want to deploy on Vercel  ( you need to deploy it by CLI )

1. Install vercel CLI : npm i -g vercel

2. login to vercel in CLI using the github : vercel login

3. Make sure the entry file (Main file) named index.js  instead of server.js

4. create vercel.json file in the root directory with the following :

```JSON
{​​​
  "version": 2,
  "builds": [{​​​ "src": "./index.js", "use": "@vercel/node" }​​​],
  "routes": [{​​​ "src": "/(.*)", "dest": "/"
   }​​​]
}​​​
```

5. Type "vercel" to start deployment

6. Set up and deploy? Y

7. Which scope do you want to deploy to? <your_email> Y

8. ? Link to different existing project? [Y/n] n

9. What’s your project’s name? <type_name>

10. In which directory is your code located? ./   <press_enter>
