const express = require("express");
const app = express(); 

const path = require('path');

const port = process.env.PORT || 3000;

if(process.env.NODE_ENV === "production"){
    app.use(express.static('build')); //include all assets and CSS from the 'build' folder  
    app.get('*', (request, response) => {
        request.sendFile(path.resolve(__dirname, 'build', 'index.html')); //load index.html from 'build' folder
    });
}

//creater server and listening at port 3000, but we want to deploy this web application on Heroku so we need to port
//at "process.env.PORT" per Heroku requirments, which is a dynamic port that Heroku uses
//To run this web application/server local then change the port to 3000, but if we use OR operator || then server will listen to either one
app.listen(port, (err) => {
    if(err){
        return console.log(err);
    }
    console.log('Server running on port: ', port);
});