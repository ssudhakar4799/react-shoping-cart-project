// useReducer - initialState
export const initialState = {
  card: [],
  favorite: [],
  isAuthentification: JSON.parse(localStorage.getItem("login")) || false,
};

// Reducer functions
export const stateReducer = (state, action) => {
  // action in state update
  switch (action?.type) {
    // add-to-card
    case "card":
      return {
        ...state,
        ...action.payload,
      };
    // add-to-card qty increase
    case "increase":
      return {
        ...state,
        ...action.payload,
      };
    // add-to-card qty decrease
    case "decrease":
      return {
        ...state,
        ...action.payload,
      };
    // card-items remove
    case "removecard":
      return {
        ...state,
        card: action.payload,
      };
    // add-favorite
    case "favorite":
      return {
        ...state,
        ...action.payload,
      };
    // remove-favotie items
    case "removefav":
      return {
        ...state,
        favorite: action.payload,
      };
    // isAuthentification
    case "login":
      return {
        ...state,
        ...action.payload,
      };
    default:
      return {
        state,
      };
  }
};
