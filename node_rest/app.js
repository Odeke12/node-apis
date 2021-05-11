const express = require('express');
require('dotenv/config');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const app = express();

const cors = require('cors');

console.log("here");

app.use(cors());
app.use(bodyParser.json());

//Import Routes
const postRoute = require('./routes/posts');

mongoose.connect(process.env.DB_CONNECTION,
	{ useNewUrlParser: true, useUnifiedTopology: true },
	() => console.log('Connected to db')
	);


app.use('/posts', postRoute);

app.get('/', (req,res)=>{
	res.send('We are home.');
	console.log("Try me");
})

app.listen(3000); 