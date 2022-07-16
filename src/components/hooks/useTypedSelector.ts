import { useSelector, TypedUseSelectorHook } from 'react-redux';
import { RootState } from '../../store/redusers';

export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;
