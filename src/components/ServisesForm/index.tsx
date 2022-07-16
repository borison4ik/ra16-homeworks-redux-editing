import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { nanoid } from 'nanoid';
import { PoundOutlined, UnorderedListOutlined } from '@ant-design/icons';
import { Button, Form, Input } from 'antd';

import { TServiseItem } from '../../@types/TServises';
import {
  addServiceAction,
  changeServiceAction,
  setEditingServiceAction,
} from '../../store/actionCreators/servises';
import { useTypedSelector } from '../hooks/useTypedSelector';

export const ServisesForm: React.FC = () => {
  const { editing, servises } = useTypedSelector((state) => state.servises);

  const [form] = Form.useForm();
  const dispatch = useDispatch();

  const onFinish = (values: any) => {
    const serviseObject: TServiseItem = {
      id: editing.status ? editing.id : nanoid(),
      title: values.title,
      price: values.price,
    };

    if (editing.status) {
      dispatch(changeServiceAction(serviseObject));
      dispatch(setEditingServiceAction({ status: false, id: '' }));
      form.resetFields();
      return;
    }

    dispatch(addServiceAction(serviseObject));
    form.resetFields();
  };

  const cancelHandler = () => {
    dispatch(setEditingServiceAction({ status: false, id: '' }));
    form.resetFields();
  };

  useEffect(() => {
    if (editing.status) {
      const editingServise = servises.find((s) => s.id === editing.id);
      editingServise &&
        form.setFieldsValue({
          title: editingServise.title,
          price: editingServise.price,
        });
    }
  }, [editing]);

  return (
    <Form
      form={form}
      name='horizontal_login'
      layout='inline'
      onFinish={onFinish}>
      <Form.Item
        name='title'
        rules={[
          {
            required: true,
            message: 'Please input your Title of servise task!',
          },
        ]}>
        <Input
          prefix={<UnorderedListOutlined className='site-form-item-icon' />}
          placeholder='Title of servise task'
        />
      </Form.Item>
      <Form.Item
        name='price'
        rules={[{ required: true, message: 'Please input price' }]}>
        <Input
          prefix={<PoundOutlined className='site-form-item-icon' />}
          type='number'
          placeholder='1000'
        />
      </Form.Item>
      <Form.Item shouldUpdate>
        {() => (
          <Button
            type='primary'
            htmlType='submit'
            disabled={
              !form.isFieldsTouched(true) ||
              !!form.getFieldsError().filter(({ errors }) => errors.length)
                .length
            }>
            Save
          </Button>
        )}
      </Form.Item>
      {editing.status && (
        <Form.Item shouldUpdate>
          <Button onClick={cancelHandler}>Cancel</Button>
        </Form.Item>
      )}
    </Form>
  );
};
