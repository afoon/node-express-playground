const express = require('express');
const bodyParser = require('body-parser');

const port = 3000;
const app = express();

app.use(bodyParser.json());

const dm8Ctrl = require('./controllers/dm8Ctrl');
const staffCtrl = require('./controllers/staffCtrl')


app.listen(port,()=> console.log(`Issa Port named ${port}`));

app.get('/api/staff/:id', staffCtrl.getStaff);