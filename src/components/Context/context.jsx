import React, { createContext, useReducer } from 'react';
import { reducer, initialState } from '../Context/reducer';

//create a context
export const dataContext = createContext(0);


//create context component
function Context({children}) {

  //create state and dispatch
  const [state, dispatch] = useReducer(reducer, initialState)
    
  return (
    <dataContext.Provider value={{state, dispatch}}>
      {children}
      </dataContext.Provider>
  )
}

export default Context