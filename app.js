import express, { static } from 'express';
var app = express();
app.use(static(__dirname + '/'));
app.listen(process.env.PORT || 8080);
