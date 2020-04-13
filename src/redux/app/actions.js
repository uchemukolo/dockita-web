import { getView } from '../../helpers/view';

const actions = {
  CHANGE_CURRENT: 'CHANGE_CURRENT',
  RESIZE_WINDOW: 'RESIZE_WINDOW',

  

  changeCurrent: current => ({
    type: actions.CHANGE_CURRENT,
    current
  }),

  resizeWindow: ({ width }) => {
    const view = getView(width);
    return {
      type: actions.RESIZE_WINDOW,
      view
    };
  },
 
};

export default actions;