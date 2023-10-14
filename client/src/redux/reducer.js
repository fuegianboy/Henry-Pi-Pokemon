import {
  GET_POKEMONS,
  FILTER_BY_SOURCE,

  //     FILTER_CREATED,
      ORDER_BY_NAME,
      ORDER_BY_ATTACK,
  //     FILTER_BY_TYPE,
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
  // notFound: false
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
            if (a.name > b.name) {
              return 1;
            }
            if (b.name > a.name) {
              return -1;
            }
            return 0;
          })
        : state.pokemons.sort((a, b) => {
            if (a.name > b.name) {
              return -1;
            }
            if (b.name > a.name) {
              return 1;
            }
            return 0;
          });
      return {
        ...state,
        pokemons: [...byname],
      };

    case ORDER_BY_ATTACK:
      let byattack =
      action.payload === "min"
        ? state.pokemons.sort((a, b) => {
            if (a.attack > b.attack) {
              return 1;
            }
            if (b.attack > a.attack) {
              return -1;
            }
            return 0;
          })
        : state.pokemons.sort((a, b) => {
            if (a.attack > b.attack) {
              return -1;
            }
            if (b.attack > a.attack) {
              return 1;
            }
            return 0;
          });
      return {
        ...state,
        pokemons: [...byattack],
      };

      case ORDER_BY_HP:
        let byHP =
        action.payload === "min"
          ? state.pokemons.sort((a, b) => {
              if (a.life > b.life) {
                return 1;
              }
              if (b.life > a.life) {
                return -1;
              }
              return 0;
            })
          : state.pokemons.sort((a, b) => {
              if (a.life > b.life) {
                return -1;
              }
              if (b.life > a.life) {
                return 1;
              }
              return 0;
            });
        return {
          ...state,
          pokemons: [...byHP],
        };


        case FILTER_BY_SOURCE:
          let filtered =
          action.payload === "DB"
            ? state.allPokemons.filter(e =>  e.id.includes("X"))
            : state.allPokemons.filter(e => !e.id.includes("X"))
          return {
            ...state,
            pokemons: [...filtered],
          };





























    //   case GET_NAME_POKEMONS:
    //     if (action.payload.error) {
    //       return {
    //         ...state,
    //         pokemons: [],
    //         notFound: true,
    //       };
    //     } else {
    //       return {
    //         ...state,
    //         pokemons: action.payload,
    //         notFound: false,
    //       };
    //     }
  

    //   case FILTER_CREATED:
    //     const createdFilter =
    //       action.payload === "created"
    //         ? state.allPokemons.filter((e) => e.createdInDb)
    //         : state.allPokemons.filter((e) => !e.createdInDb);
    //     return {
    //       ...state,
    //       pokemons: action.payload === "All" ? state.allPokemons : createdFilter,
    //     };
    //   case ORDER_BY_NAME:
    //     let sortedAll =
    //       action.payload === "asc"
    //         ? state.pokemons.sort((a, b) => {
    //             if (a.name > b.name) {
    //               return 1;
    //             }
    //             if (b.name > a.name) {
    //               return -1;
    //             }
    //             return 0;
    //           })
    //         : state.pokemons.sort((a, b) => {
    //             if (a.name > b.name) {
    //               return -1;
    //             }
    //             if (b.name > a.name) {
    //               return 1;
    //             }
    //             return 0;
    //           });
    //     return {
    //       ...state,
    //       pokemons: sortedAll,
    //     };
  
    //   case ORDER_BY_ATTACK:
    //     let sortedAttack = [...state.allPokemons];
  
    //     if (action.payload === "min") {
    //       sortedAttack.sort((a, b) => a.attack - b.attack);
    //     }
    //     if (action.payload === "max") {
    //       sortedAttack.sort((a, b) => b.attack - a.attack);
    //     }
    //     return {
    //       ...state,
    //       pokemons: sortedAttack,
    //     };
  
    //   case FILTER_BY_TYPE:
    //     let filterType;
    //     if (action.payload === "All") {
    //       filterType = state.allPokemons;
    //     } else {
    //       filterType = state.allPokemons.filter((e) =>
    //         e.types.includes(action.payload)
    //       );
    //     }
    //     return {
    //       ...state,
    //       pokemons: filterType,
    //     };
  
    //   case ORDER_BY_HP:
    //     let sortedHp = [...state.allPokemons];
  
    //     if (action.payload === "min") {
    //       sortedHp.sort((a, b) => a.hp - b.hp);
    //     }
    //     if (action.payload === "max") {
    //       sortedHp.sort((a, b) => b.hp - a.hp);
    //     }
    //     return {
    //       ...state,
    //       pokemons: sortedHp,
    //     };
  
      default:
        return { ...state };
    }
  };
  
  export default rootReducer;