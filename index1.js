// index.js
const express = require('express');
const app = express();
const PORT = 8080;
const { dbConnection } = require('./config/config');
// llamamos la función para que cuando levantemos el servidor haga la conexión

const routes = require('./routes');

app.use(express.json());

app.use('/', routes);

dbConnection();



app.listen(PORT, () => console.log(`Server started on port ${PORT}`));