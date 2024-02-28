'use strict';

const express = require('express');
const cors = require('cors');
const axios = require('axios');
const pg = require('pg');
const jsonData = require('./flowers.json')
require('dotenv').config();

const server = express();
server.use(cors());
server.use(express.json());
const PORT = process.env.PORT;
const client = new pg.Client(process.env.DATABASE_URL);


server.get('/', helloWorldHandler);
server.get('/allFlowers', allFlowersHandler);
server.get('/allFavFlowers', getAllFavFlowersHandler);

server.post('/favFlower', addFavFlowerHandler);
server.put('/favFlower/:id', updateFavFlowerHandler);
server.delete('/favFlower/:id', deleteFavFlowerHandler);
server.get('/favFlower/:id', getOneFavFlowerHandler);

server.use('*', notFoundHandler);
server.use(errorHandler)



function helloWorldHandler(req, res) {
    return res.status(200).send("Hello World");
}

function allFlowersHandler(req, res) {
    res.send(jsonData.flowerslist);
}

function getAllFavFlowersHandler(req, res) {

    const sql = `SELECT * FROM flower`;

    client.query(sql)
        .then(data => {
            return res.status(200).send(data.rows);
        })
        .catch(error => {
            errorHandler(error, req, res);
        });
};

function addFavFlowerHandler(req, res) {
    const flower = req.body;
    const sql = `INSERT INTO flower(name, photo, info) VALUES($1, $2, $3) RETURNING *;`

    const values = [flower.name, flower.photo, flower.info];
    client.query(sql, values).then((data) => {
        res.status(201).json(data.rows);
    })
        .catch(error => {
            console.log(error);
            errorHandler(error, req, res);
        });
};

function updateFavFlowerHandler(req, res) {
    const id = req.params.id;
    const flower = req.body;
    const sql = `UPDATE flower SET name=$1, photo=$2, info=$3 WHERE id=${id} RETURNING *;`;
    const values = [flower.name, flower.photo, flower.info];

    client.query(sql, values).then(data => {
        // return res.status(200).json(data.rows);
        //get the flower table conten
        const sql = `SELECT * FROM flower`;

        client.query(sql)
            .then(data => {
                return res.status(200).send(data.rows);
            })
            .catch(error => {
                errorHandler(error, req, res);
            });
        // or you can send 204 status with no content
        // return res.status(200).json(data.rows);
    }).catch(err => {
        console.log(err);
        errorHandler(err, req, res);
    });

};

function deleteFavFlowerHandler(req, res) {

    const id = req.params.id;

    const sql = `DELETE FROM flower WHERE id=${id};`;

    client.query(sql)
        .then(() => {
            // return res.status(204).json({});

            //get the flower table conten
            const sql = `SELECT * FROM flower`;

            client.query(sql)
                .then(data => {
                    return res.status(200).send(data.rows);
                })
                .catch(error => {
                    errorHandler(error, req, res);
                });

        })
        .catch(err => {
            errorHandler(err, req, res);
        })
};

function getOneFavFlowerHandler(req, res) {
    const id = req.params.id;

    const sql = `SELECT * FROM flower WHERE id = ${id}`;

    client.query(sql).then(data => {
        return res.status(200).json(data.rows);
    })
        .catch(error => {
            errorHandler(error, req, res);
        });
};


function notFoundHandler(req, res) {
    res.status(404).send('Page Not Found!');
}

function errorHandler(error, req, res) {
    const err = {
        status: 500,
        message: error
    }
    res.status(500).send(err);
};

client.connect()
    .then(() => {
        server.listen(PORT, () =>
            console.log(`listening on ${PORT}`)
        );
    })