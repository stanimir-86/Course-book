const express = require('express');
const handlebars = require('express-handlebars');

const routes = require('./routes');

const app = express();

app.use(express.static('public'));//искам за всичките пътища да преминат през public
app.use(express.urlencoded({ extended: false }));//с това от req.body си вземам form data

app.engine('hbs', handlebars.engine({ extname: 'hbs', }));
app.set('view engine', 'hbs');

app.use(routes);

app.listen(5000, () => console.log('App is listening on http://localhost:5000'));