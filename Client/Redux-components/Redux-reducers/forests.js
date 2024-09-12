const INITIAL_STATE = {
    forests: []  
  };
  
  export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
      case 'SET_FORESTS':
        return { ...action.payload };
      default:
        return state;
    }
  };