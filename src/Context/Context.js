import React, { createContext, useReducer } from 'react';

import Reducer from './Reducer';

const initialState = {
  contactSlide: 0
};

const DataLayer = ({ children }) => {
  const [state, dispatch] = useReducer(Reducer, initialState);

  return <DataLayerContext.Provider value={[state, dispatch]}>{children}</DataLayerContext.Provider>;
};

export const DataLayerContext = createContext(initialState);

export default DataLayer;
