import axios from "axios"

export const GET_POKEMONS= "GET_POKEMONS"
export const GET_TYPES= "GET_TYPES"
export const GET_DETAIL= "GET_DETAIL"
export const CLEAR_DETAIL= "CLEAR_DETAIL"
export const CREATE_POKEMON= "CREATE_POKEMON"
export const GET_POKEMONBYNAME= "GET_POKEMONBYNAME"
export const ORDER_BY_NAME= "ORDER_BY_NAME"



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

export function getTypes() {
    return async function(dispatch) {
        try {
            const response = await axios(`http://localhost:3001/type`)
            return dispatch({
                type: GET_TYPES,
                payload: response.data
            })
        } catch (error) {
            console.log(error)
        }
    }
}

export function createPokemon(data) {
    return async function(dispatch) {
        try {
            const response = await axios.post(`http://localhost:3001/pokemon`, data)
            alert("creado")
            return response
        } catch (error) {
            console.log(error)
            console.error(error)
            // alert(error.response.data.error);
        }
    }
}

export function getPokemonByName(name) {
    return async function(dispatch) {
        try {
            const response = await axios(`http://localhost:3001/pokemon/?name=${name}`)
            console.log(response)
            return dispatch({
                type: GET_POKEMONBYNAME,
                payload: response.data
            })
        } catch (error) {
            console.log(error)
        }
    }
}

export const orderByName = (order) => {
    return {
        type: ORDER_BY_NAME,
        payload: order
    };
  };
