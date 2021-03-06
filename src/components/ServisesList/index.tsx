import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { List, Typography, notification } from 'antd';

import { useTypedSelector } from '../hooks/useTypedSelector';
import {
  deleteServiceAction,
  setEditingServiceAction,
} from '../../store/actionCreators/servises';

import './index.scss';

const { Text } = Typography;

export const ServisesList: React.FC = () => {
  const { filter, editing, servises } = useTypedSelector(
    (state) => state.servises,
  );
  const dispatch = useDispatch();
  const [filteredServises, setFilteredServises] = useState(servises);

  const editHandler = (id: string) => {
    dispatch(setEditingServiceAction({ status: true, id: id }));
  };

  const deleteHandler = (id: string) => {
    if (editing.status && editing.id === id) {
      notification.open({
        message: 'you should save changes before delete this service',
      });
      return;
    }
    dispatch(deleteServiceAction(id));
  };

  useEffect(() => {
    setFilteredServises(
      servises.filter(
        (s) => s.title.toLowerCase().indexOf(filter.toLowerCase().trim()) >= 0,
      ),
    );
  }, [filter, servises]);

  return (
    <List
      className='servises-list'
      itemLayout='horizontal'
      dataSource={filteredServises}
      renderItem={(item) => (
        <List.Item
          className='servises-item'
          actions={[
            <a
              href='#!'
              key='list-edit'
              onClick={() => {
                editHandler(item.id);
              }}>
              Edit
            </a>,
            <a
              href='#!'
              type='primary'
              key='list-more'
              onClick={() => deleteHandler(item.id)}>
              Delete
            </a>,
          ]}>
          <Text className='servises-text'>
            {item.title} / {item.price}
          </Text>
        </List.Item>
      )}
    />
  );
};
