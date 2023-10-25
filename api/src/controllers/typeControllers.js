const axios = require("axios")
const { Type } = require("../db");

const getTypesController = async () =>{
    const typeAPI = await axios("https://pokeapi.co/api/v2/type")
    const types = typeAPI.data.results.map(element => {
        return {name: element.name}
    });
    const count = await Type.count();
    if (count === 0) {
        const result = await Type.bulkCreate(types)
        return result
    }
    return types
}

module.exports = {getTypesController}
