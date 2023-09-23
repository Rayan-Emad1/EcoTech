export const setUser = (user) => {
    return {
      type: 'SET_USER',
      payload: user
    }
  };
  
  export const updateUser = (updates) => {
    return {
      type: 'UPDATE_USER',
      payload: updates
    }
  };