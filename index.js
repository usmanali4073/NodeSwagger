// https://github.com/Surnet/swagger-jsdoc/tree/master/example/v2

const express = require('express');
const endpoint = require('./endpoints');
const swaggerDoc = require('./swaggerDoc.js');

// npm install swagger-ui-express swagger-jsdoc

const app = express(express)

endpoint(app);
swaggerDoc(app);

app.use((err, req, res, next) => { console.error('There was an error', err) });


app.listen(3000, () => console.log("App started"))