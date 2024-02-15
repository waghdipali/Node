const {MongoClient} = require('mongodb');
//const MongoClient = require('mongodb').MongoClient
const url = 'mongodb://localhost:2701';
const client = new MongoClient(url);

async function getData()
{
    let result = client.connect();
    let db =result.db('e-com')
}

getData();