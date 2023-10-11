const { Router } = require('express');

const {getAllPokemon, postPokemon, getPokemonById} = require("../handlers/pokemonHandler")

const pokemonRoutes = Router();

pokemonRoutes.get("/", getAllPokemon)
pokemonRoutes.get("/:id", getPokemonById)
pokemonRoutes.post("/", postPokemon)


module.exports = pokemonRoutes;