const express = require('express');
const colors = require('colors');
const port = process.env.PORT || 5001;
const cors = require('cors');
require('dotenv').config();
const { graphqlHTTP } = require ('express-graphql'); 
const schema = require('./schema/schema');
const connectDB = require('./config/db');
const app = express();

// connect to database here
connectDB();
app.use(cors());


// To test out queries -> http://localhost:5001/graphql -> kinda like postman when working with an API
app.use('/graphql', 
    graphqlHTTP({ 
    schema, 
    graphiql: process.env.NODE_ENV === 'development', // This graphiql tool sets the process in development kinda like true 
 
  })
);

app.listen(port,console.log(`Server running on port ${port}`));
