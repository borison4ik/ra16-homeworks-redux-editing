import {
  IServisesState,
  ServisesActionTypes,
  TServisesAction,
} from '../../@types/TServises';

const initialState: IServisesState = {
  servises: [
    {
      id: '1',
      title: 'Замена стекла',
      price: 1000,
    },
    {
      id: '2',
      title: 'Замена Двери',
      price: 8000,
    },
    {
      id: '3',
      title: 'Замена Пола',
      price: 50000,
    },
  ],
  editing: { status: false, id: '' },
  filter: '',
};

export const servisesReduser = (
  state = initialState,
  action: TServisesAction,
): IServisesState => {
  switch (action.type) {
    case ServisesActionTypes.ADD_SERVISE:
      return { ...state, servises: [...state.servises, action.payload] };
    case ServisesActionTypes.CHANGE_SERVISE:
      return {
        ...state,
        servises: state.servises.map((s) => {
          if (s.id === action.payload.id) {
            return { ...s, ...action.payload };
          }
          return s;
        }),
      };
    case ServisesActionTypes.DELETE_SERVISE:
      return {
        ...state,
        servises: state.servises.filter(
          (servise) => servise.id !== action.payload,
        ),
      };
    case ServisesActionTypes.SET_EDITING:
      return {
        ...state,
        editing: action.payload,
      };
    case ServisesActionTypes.SET_FILTER:
      return {
        ...state,
        filter: action.payload,
      };

    default:
      return state;
  }
};
