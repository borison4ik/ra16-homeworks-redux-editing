import React from 'react';
import { useDispatch } from 'react-redux';
import { Input } from 'antd';

import { setFilterServiceAction } from '../../store/actionCreators/servises';

export const SearchForm: React.FC = () => {
  const dispatch = useDispatch();

  const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(event.target.value);
    dispatch(setFilterServiceAction(event.target.value));
  };
  return (
    <Input placeholder='Search service by title' onChange={changeHandler} />
  );
};
