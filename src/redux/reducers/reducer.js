const initialState = {
    list: [],
  };
  
  export default (state = initialState, action) => {
    switch (action.type) {
      case 'ADD_TO_LIST':
        return {
          ...state,
        };
      case 'REMOVE_FROM_LIST':
        return {
          ...state,
        };
      default:
        return state;
    }
  };