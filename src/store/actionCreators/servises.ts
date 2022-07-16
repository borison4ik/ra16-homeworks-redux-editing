import {
  ServisesActionTypes,
  TEditingService,
  TServiseItem,
} from '../../@types/TServises';

export const addServiceAction = (payload: TServiseItem) => {
  return { type: ServisesActionTypes.ADD_SERVISE, payload };
};

export const changeServiceAction = (payload: TServiseItem) => {
  return { type: ServisesActionTypes.CHANGE_SERVISE, payload };
};

export const deleteServiceAction = (payload: string) => {
  return { type: ServisesActionTypes.DELETE_SERVISE, payload };
};

export const setEditingServiceAction = (payload: TEditingService) => {
  return { type: ServisesActionTypes.SET_EDITING, payload };
};

export const setFilterServiceAction = (payload: string) => {
  return { type: ServisesActionTypes.SET_FILTER, payload };
};
