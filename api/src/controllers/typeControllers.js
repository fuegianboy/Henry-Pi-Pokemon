const axios = require("axios")
const { Type } = require("../db");

const getTypesController = async () =>{
    const typeAPI = await axios("https://pokeapi.co/api/v2/type")
    const types = []
    typeAPI.data.results.forEach(element => {
        types.push({name: element.name})
    });
    const result = await Type.bulkCreate(types);
    return result
    
}

module.exports = {getTypesController}
