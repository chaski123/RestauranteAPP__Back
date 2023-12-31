//Dependencia que trabaja con node.js y me ayuda a crear mi app
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

require("dotenv").config();
const version = process.env.API_VERSION;

// creamos nuestra app
const app = express();

//Configurar Header HTTP - configurar Cors y hacer peticiones
app.use(cors());

//importar Rutas
const authRoutes = require("./router/auth");
const userRoutes = require("./router/user");
const foodRoutes = require("./router/food");
const requestRoutes = require("./router/request");

//Configurar Body parser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//Configurar static folder -> Carpeta con imgs
app.use(express.static("uploads"));

//Configurar Rutas
app.use(`/api/${version}`, authRoutes);
app.use(`/api/${version}`, userRoutes);
app.use(`/api/${version}`, foodRoutes);
app.use(`/api/${version}`, requestRoutes);

module.exports = app;
