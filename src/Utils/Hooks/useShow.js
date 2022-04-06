import { useContext } from 'react';
import ShowContext from '../Context/ShowProvider';

const useShow = () => {
  return useContext(ShowContext);
};

export default useShow;
