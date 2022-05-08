import React from 'react';
import { Provider } from 'react-redux';
import configure from './configure';
const store = configure();
export default ({ children }) => {
  return <Provider store={store}>{children}</Provider>
};
