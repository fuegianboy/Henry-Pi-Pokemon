import {
  GET_POKEMONS,
  FILTER_BY_SOURCE,
  ORDER_BY_NAME,
  ORDER_BY_ATTACK,
  FILTER_BY_TYPE,
  GET_POKEMONBYNAME,
  GET_TYPES,
  GET_DETAIL,
  CLEAR_DETAIL,
  ORDER_BY_HP
} from "./actions";

let initialState = {
  pokemons: [],
  allPokemons: [],
  types: [],
  detail: {},
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {

    case GET_POKEMONS:
      return {
        ...state,
        allPokemons:[...action.payload],
        pokemons:[...action.payload]
      }
      
    case GET_DETAIL:
      return {
        ...state,
        detail:action.payload
      }

    case CLEAR_DETAIL:
      return {
        ...state,
        detail:{}
      }
          
    case GET_TYPES:
      return {
        ...state,
        types:[...action.payload]
      }
    
    case GET_POKEMONBYNAME:
      return {
        ...state,
        pokemons:action.payload
      }

    case ORDER_BY_NAME:
      let byname =
        action.payload === "asc"
          ? state.pokemons.sort((a, b) => {
              if (a.name > b.name) return 1
              if (b.name > a.name) return -1
              return 0
            })
          : state.pokemons.sort((a, b) => {
              if (a.name > b.name) return -1
              if (b.name > a.name) return 1
              return 0
            })
      return {
        ...state,
        pokemons: [...byname],
      };

    case ORDER_BY_ATTACK:
      let byattack =
        action.payload === "min"
          ? state.pokemons.sort((a, b) => {
              if (a.attack > b.attack) return 1
              if (b.attack > a.attack) return -1
              return 0
            })
          : state.pokemons.sort((a, b) => {
              if (a.attack > b.attack) return -1
              if (b.attack > a.attack) return 1
              return 0
            })
      return {
        ...state,
        pokemons: [...byattack],
      };

    case ORDER_BY_HP:
      let byHP = action.payload === "min"
        ? state.pokemons.sort((a, b) => {
            if (a.life > b.life) return 1
            if (b.life > a.life) return -1
            return 0
          })
        : state.pokemons.sort((a, b) => {
            if (a.life > b.life) return -1
            if (b.life > a.life) return 1
            return 0;
          });
      return {
        ...state,
        pokemons: [...byHP],
      };


    case FILTER_BY_SOURCE:
      let filterSource =
        action.payload === "DB"
          ? state.allPokemons.filter(e =>  e.id.includes("X"))
          : state.allPokemons.filter(e => !e.id.includes("X"))
      return {
        ...state,
        pokemons: [...filterSource],
      };
      
      case FILTER_BY_TYPE:
        let filterType = 
        action.payload !== "Types"
          ? state.allPokemons.filter(e =>  e.types.includes(action.payload))
          : state.allPokemons
      return {
        ...state,
        pokemons: [...filterType],
      };

    default:
      return { ...state };
  }
}
      
export default rootReducer;
      
 