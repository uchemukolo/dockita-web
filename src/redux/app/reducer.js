import { getDefaultPath } from '../../helpers/urlSync';
import actions from './actions';
import { getView } from '../../helpers/view';


const preKeys = getDefaultPath();

const initState = {
  current: preKeys,
  view: getView(window.innerWidth),

};

export default function appReducer(state = initState, action) {
  switch (action.type) {  
    case actions.CHANGE_CURRENT:
      return { ...state, current: action.current };
      case actions.RESIZE_WINDOW:
        return { ...state, view: action.view };
    default:
      return state;
  }
}
