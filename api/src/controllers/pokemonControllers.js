const axios = require("axios")
const {Pokemon, Type } = require("../db")

const getAllPokemonAPI = async () =>{
    const pokemonAPI = (await axios.get("https://pokeapi.co/api/v2/pokemon/?limit=40")).data.results;
    const pokemonDataAPI = [];
    for (const x of pokemonAPI) {
        const i = (await axios.get(x.url)).data;
        pokemonDataAPI.push({
        id: i.id.toString(),
        name: i.name,
        image: i.sprites.other.home.front_default,
        life: i.stats[0].base_stat,
        attack: i.stats[1].base_stat,
        defense: i.stats[2].base_stat,
        speed: i.stats[5].base_stat,
        height: i.height,
        weight: i.weight,
        types: i.types.map((e) => e.type.name).join(", "),
        });
    }
    return pokemonDataAPI

}


const getAllPokemonDB = async () => {
    const pokemonDB = await Pokemon.findAll({ include: { model: Type, as:"types"}})
    const pokemonDataDB = pokemonDB.map(i => {
        return {
            id: i.id,
            name: i.name,
            image: i.image,
            life: i.life,
            attack: i.attack,
            defense: i.defense,
            speed: i.speed,
            height: i.height,
            weight: i.weight,
            types: i.types.map((e) => e.name).join(", "),
        }
    })
    return pokemonDataDB
}

const getPokemonByName = async (name) => {
    const dataAPI = await getAllPokemonAPI()
    const dataDB = await getAllPokemonDB()
    const dataAll = [...dataAPI, ...dataDB]
    const pokemon = dataAll.filter(element => element.name === name )
    return pokemon
}

const getPokemonByIdController = async (id) => {
    const dataAPI = await getAllPokemonAPI()
    const dataDB = await getAllPokemonDB()
    const dataAll = [...dataAPI, ...dataDB]
    const pokemon = (dataAll.filter(element => element.id === id ))[0]
    return pokemon

}

const getPokemonsController = async (name) =>{
    if (!name) {
        const dataAPI = await getAllPokemonAPI()
        const dataDB = await getAllPokemonDB()
        const dataAll = [...dataAPI, ...dataDB]
        return dataAll
    } else {
        const pokemon = getPokemonByName(name)
        return pokemon
    }
}

const postPokemonController = async (name, image, life, attack, defense, speed, height, weight, types) => {
    const pokemon = await Pokemon.create({ 
        name, 
        image, 
        life, 
        attack, 
        defense, 
        speed, 
        height, 
        weight, 
    })
    await pokemon.addType(types)
    const pokemon2 = {...pokemon.toJSON()}
    pokemon2.types = types.join(",")
    return pokemon2
}

module.exports = {getPokemonsController, postPokemonController, getPokemonByIdController}