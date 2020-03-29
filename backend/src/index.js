const express = require('express'); //importando pacote express
const routes = require('./routes'); //importando variáveis routes do arquivo routes.js
const cors = require('cors');

const app = express();

app.use(cors({}));
app.use(express.json());
app.use(routes);



app.listen(3333);