

import { FETCHING_USERPLANTS_START, FETCHING_USERPLANTS_SUCCESS, FETCHING_USERPLANTS_FAIL, POST_PLANT_FAILURE, FETCHING_PLANT, PUT_PLANT_FAILURE, DELETE_PLANT_FAILURE  } from "./../Actions/index";

const initialState = {
  plant: {},
  userPlants: [],
  isFetching: false,
  error: ''
}

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    // loads plant data
    case FETCHING_USERPLANTS_START:
        return ({
          ...state,
          isFetching: true,
          error: ''
        });
    // when  plant data finshes laoding data is stored in userPlants
    case FETCHING_USERPLANTS_SUCCESS :
        return ({
          ...state,
          userPlants: action.payload,
          isFetching: false
        });
    //  if data fetching fails the error message will be stored in error variable
    case FETCHING_USERPLANTS_FAIL :
        return ({
          ...state,
          error: action.payload,
          isFetching: false
        });
    case POST_PLANT_FAILURE:
       return {
           ...state,
           error: action.payload,

       }    
     case PUT_PLANT_FAILURE:
       return {
           ...state,
            userPlants: action.payload,
           error: action.payload,
       }    
     case DELETE_PLANT_FAILURE:
       return {
           ...state,
            userPlants: action.payload,
           error: action.payload,
       }    
    case FETCHING_PLANT:
        return ({
          ...state,
          plant: action.payload
        });   

    default:
      return state;
  }
};