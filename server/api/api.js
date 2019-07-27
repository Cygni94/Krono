"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const pathToSwaggerUi = require('swagger-ui-dist').absolutePath();
const app = express();
var express = require('express');
app.use(express.static(pathToSwaggerUi));
app.get('/', function (req, res) {
    res.send('Hello World!');
});
app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});
//# sourceMappingURL=api.js.map