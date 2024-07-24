const express = require('express')
const app = express()
const dotenv = require('dotenv')
const { MongoClient } = require('mongodb');
dotenv.config()
const bodyparser=require('body-parser')
const cors=require('cors')


// Connection URL
const url = 'mongodb://localhost:27017';
const client = new MongoClient(url);

const dbName = 'passOp';
client.connect()

app.use(bodyparser.json())
app.use(cors())

//Get all the passwords
app.get('/', async (req, res) => {
    const db = client.db(dbName);
    const collection = db.collection('documents');
    const findResult = await collection.find({}).toArray();

    res.json(findResult)
})

//Save all the passwords

app.post('/', async (req, res) => {
    const password=req.body;
    const db = client.db(dbName);
    const collection = db.collection('passwords');
    const findResult = await collection.insertOne(password);

    res.send({success:true,result:findResult})
})

//Delete

app.delete('/', async (req, res) => {
    const password=req.body;
    const db = client.db(dbName);
    const collection = db.collection('passwords');
    const findResult = await collection.deletetOne(password);

    res.send({success:true,result:findResult})
})

app.listen(3000)