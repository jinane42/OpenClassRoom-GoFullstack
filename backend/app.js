// mongodb+srv://Jin:<password>@cluster0.vaqpr.mongodb.net/myFirstDatabase?retryWrites=true&w=majority

const express = require('express');
const bodyParser =  require('body-parser');
const mongoose = require ('mongoose');

const stuffRoute = require('./routes/stuff')
const userRoute = require('./routes/user')

const app = express();

mongoose.connect('mongodb+srv://Jin:Jin!123@cluster0.vaqpr.mongodb.net/myFirstDatabase?retryWrites=true&w=majority')
    .then(() => {
        console.log("Sucessfully connecterd to MongoDB Atlas");
    })
    .catch((error) => {
        console.log('Unable to connect to MongoDB Atlas!');
        console.error(error);
      });

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
  });

app.use(bodyParser.json());

app.use('/api/stuff', stuffRoute)
app.use('/api/auth', userRoute)

module.exports = app;