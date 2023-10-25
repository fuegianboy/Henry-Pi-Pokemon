const {getPokemonsController, postPokemonController, getPokemonByIdController} = require ("../controllers/pokemonControllers")

const getAllPokemon = async (req, res) => {
    const {name} = req.query
    try {
        const response = await getPokemonsController(name)
        return res.status(200).send(response)
    } catch (error) {
        res.status(400).send({ error: error.message });
    }    
}

const postPokemon = async (req, res) => {
    const {name, image, life, attack, defense, speed, height, weight, types} = req.body
    try {
        const response = await postPokemonController(name, image, life, attack, defense, speed, height, weight, types)
        return res.status(200).send(response)
    } catch (error) {
        res.status(400).send({ error: error.message });
    }    
}

const getPokemonById = async (req, res) => {
    const {id} = req.params
    try {
        const response = await getPokemonByIdController(id)
        return res.status(200).send(response)
    } catch (error) {
        res.status(400).send({ error: error.message });
    }    
}

module.exports = {getAllPokemon, postPokemon, getPokemonById};