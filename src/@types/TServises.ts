export type TServiseItem = {
  id: string;
  title: string;
  price: number;
};

export type TEditingService = {
  id: string;
  status: boolean;
};

export type IServisesState = {
  servises: TServiseItem[];
  editing: TEditingService;
};

export enum ServisesActionTypes {
  ADD_SERVISE = 'ADD_SERVISE',
  DELETE_SERVISE = 'DELETE_SERVISE',
  CHANGE_SERVISE = 'CHANGE_SERVISE',
  SET_EDITING = 'SET_EDITING',
}

type IAddServisesAction = {
  type: ServisesActionTypes.ADD_SERVISE;
  payload: TServiseItem;
};

type IChangeServisesAction = {
  type: ServisesActionTypes.CHANGE_SERVISE;
  payload: TServiseItem;
};

type IDeleteServisesAction = {
  type: ServisesActionTypes.DELETE_SERVISE;
  payload: string;
};

type IsetEditingServisesAction = {
  type: ServisesActionTypes.SET_EDITING;
  payload: TEditingService;
};

export type TServisesAction =
  | IAddServisesAction
  | IDeleteServisesAction
  | IsetEditingServisesAction
  | IChangeServisesAction;
