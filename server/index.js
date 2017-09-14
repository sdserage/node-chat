const express = require('express');
const bodyParser = require('body-parser');
const mc = require('./controllers/messages_controller');

const app = express();

// TOP LEVEL MIDDLEWARE
app.use(bodyParser.json());

// DATA
const messagesUrl = '/api/messages';
app.post(messagesUrl, mc.create);
app.get(messagesUrl, mc.read);
app.get(`${messagesUrl}/:id`, mc.readById);
app.put(`${messagesUrl}/:id`, mc.update);
app.delete(`${messagesUrl}/:id`, mc.delete);

const port = 3001;
app.listen(port, ()=>{console.log(`Server listening on port ${port}...`)});
