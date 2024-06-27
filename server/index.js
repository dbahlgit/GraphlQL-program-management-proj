const express = require('express');
const port = process.env.PORT || 5001;
require('dotenv').config();
const { graphqlHTTP } = require ('express-graphql'); 
const schema = require('./schema/schema');
const app = express();

app.use('/grapql', 
    graphqlHTTP({ 
    schema, 
    graphiql: process.env.NODE_ENV === 'development',
    

}))

app.listen(port,console.log(`Server running on port ${port}`));
