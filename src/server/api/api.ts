import { Request, Response } from "express";
const pathToSwaggerUi = require('swagger-ui-dist').absolutePath()

const app = express()
var express = require('express');
app.use(express.static(pathToSwaggerUi))

app.get('/', function (req: Request, res: Response) {
    res.send('Hello World!');
});

app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});