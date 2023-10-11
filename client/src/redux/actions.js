import axios from "axios"

export const GET_POKEMONS= "GET_POKEMONS"

export function getPokemons() {
    return async function(dispatch) {
        try {
            const response = await axios(`http://localhost:3001/pokemon`)
            return dispatch({
                type: GET_POKEMONS,
                payload: response.data
            })
        } catch (error) {
            console.log(error)
        }
    }
}