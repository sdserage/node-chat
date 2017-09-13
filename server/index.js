const express = require('express');
const bodyParser = require('body-parser');

const app = express();

// TOP LEVEL MIDDLEWARE
app.use(bodyParser.json());

// DATA
const port = 3000;
app.listen(port, ()=>{console.log(`Server listing on port ${port}`)};
