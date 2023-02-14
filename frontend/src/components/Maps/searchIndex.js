import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getKey } from '../../store/map';
import SearchMap from './searchMap';
//
const SearchContainer = () => {
  const key = useSelector((state) => state.Maps.key);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!key) {
      dispatch(getKey());
    }
  }, [dispatch, key]);

  if (!key) {
    return null;
  }

  return (
    < SearchMap apiKey={key} />
  );
};

export default  SearchContainer;
