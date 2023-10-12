import axios from "axios"

export const GET_POKEMONS= "GET_POKEMONS"
export const GET_DETAIL= "GET_DETAIL"
export const CLEAR_DETAIL= "CLEAR_DETAIL"


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

export function getDetail(id) {
    return async function(dispatch) {
        try {
            const response = await axios(`http://localhost:3001/pokemon/${id}`)
            return dispatch({
                type: GET_DETAIL,
                payload: response.data
            })
        } catch (error) {
            console.log(error)
        }
    }
}

export function clearDetail() {
    return async function(dispatch) {
        try {
            return dispatch({
                type: CLEAR_DETAIL,
                payload: {}
            })
        } catch (error) {
            console.log(error)
        }
    }
}