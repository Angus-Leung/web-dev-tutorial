const express = require('express');
const path = require('path');
const app = express();

// Uses CSS and JS from public folder
app.use(express.static(path.join(__dirname, '/public')));

// Serves the index.html file when localhost:3000/
app.get('/', (request, response) => {
    response.sendFile(__dirname + '/views/index.html');
});

// Starts server to listen on port 3000
app.listen(3000, err => {
    if (err)
        console.log('There was an error');
    else
        console.log('Server is listening on PORT 3000');
});