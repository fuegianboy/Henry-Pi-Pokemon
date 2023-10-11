const { Router } = require('express');

const {getTypesHandler} = require("../handlers/typeHandler")

const typeRoutes = Router();

typeRoutes.get("/", getTypesHandler)

module.exports = typeRoutes;