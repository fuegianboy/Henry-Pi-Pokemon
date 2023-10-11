const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const pokemonRoutes = require("./pokemonRoutes")
const typeRoutes = require("./typeRoutes")

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use("/pokemon", pokemonRoutes)
router.use("/type", typeRoutes)

module.exports = router;
