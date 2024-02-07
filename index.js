const express = require('express');
const handlebars = require('express-handlebars');
const mongoose = require('mongoose');

const routes = require('./routes');
const { authMidleware } = require('./middlewares/authMidleware');

const app = express();

app.use(express.static('public'));//искам за всичките пътища да преминат през public
app.use(express.urlencoded({ extended: false }));//с това от req.body си вземам form data
app.use(authMidleware)

app.engine('hbs', handlebars.engine({ extname: 'hbs', }));
app.set('view engine', 'hbs');

app.use(routes);

mongoose.connect('mongodb://127.0.0.1:27017/courseBook');

mongoose.connection.on('connected', () => console.log('DB is connected'));
mongoose.connection.on('error', (err) => console.log('err'));

app.listen(5000, () => console.log('App is listening on http://localhost:5000'));