const express = require('express');


const app = express();

app.use(express.static('public'));//искам за всичките пътища да преминат през public

app.get('/', (req, res) => {
    res.send('Hello');
});

app.listen(5000, () => console.log('App is listening on http://localhost:5000'));