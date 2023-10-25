import axios from "axios"

export const GET_POKEMONS= "GET_POKEMONS"
export const GET_TYPES= "GET_TYPES"
export const GET_DETAIL= "GET_DETAIL"
export const CLEAR_DETAIL= "CLEAR_DETAIL"
export const CREATE_POKEMON= "CREATE_POKEMON"
export const GET_POKEMONBYNAME= "GET_POKEMONBYNAME"
export const ORDER_BY_NAME= "ORDER_BY_NAME"
export const ORDER_BY_ATTACK= "ORDER_BY_ATTACK"
export const ORDER_BY_HP= "ORDER_BY_HP"
export const FILTER_BY_SOURCE= "FILTER_BY_SOURCE"
export const FILTER_BY_TYPE= "FILTER_BY_TYPE"

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
    return async function() {
        try {
            const response = await axios.post(`http://localhost:3001/pokemon`, data)
            alert("Pokemon Created")
            return response
        } catch (error) {
            console.log(error)
            console.error(error)
        }
    }
}

export function getPokemonByName(name) {
    return async function(dispatch) {
        try {
            const response = await axios(`http://localhost:3001/pokemon/?name=${name}`)
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

export const orderByAttack = (order) => {
    return {
        type: ORDER_BY_ATTACK,
        payload: order
    };
};

export const orderByHP = (order) => {
    return {
        type: ORDER_BY_HP,
        payload: order
    };
};

export const filterBySource = (filter) => {
    return {
        type: FILTER_BY_SOURCE,
        payload: filter
    };
};

export const filterByType = (filter) => {
    return {
        type: FILTER_BY_TYPE,
        payload: filter
    };
};

