import { getDefaultPath } from '../../helpers/urlSync';
import actions from './actions';

const preKeys = getDefaultPath();

const initState = {
  current: preKeys
};

export default function appReducer(state = initState, action) {
  switch (action.type) {  
    case actions.CHANGE_CURRENT:
      return { ...state, current: action.current };
    default:
      return state;
  }
}
