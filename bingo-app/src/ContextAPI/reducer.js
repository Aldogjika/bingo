export const initialState = {
  wins: [],
};

const reducer = (state, action) => {
  console.log("action: ", action);

  // Action -> type, payload
  switch (action.type) {
    case "UPDATE_WINS":
      return {
        ...state,
        wins: action.wins,
      };
    default:
      return state;
  }
};

export default reducer;
