/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react/jsx-no-constructed-context-values */
/* eslint-disable no-unused-vars */
/* eslint-disable react/function-component-definition */
import { createContext, useState } from 'react';

const ShowContext = createContext({});

export const ShowProvider = ({ children }) => {
  const [show, setShow] = useState(false);
  return (
    <ShowContext.Provider value={{ show, setShow }}>
      {children}
    </ShowContext.Provider>
  );
};

export default ShowContext;
