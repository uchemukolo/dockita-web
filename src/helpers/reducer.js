export function echo(val) {
  return val;
}

// Join action handlers into a single reducer.
export function createReducer(initialState, handlers) {
  return function(state = initialState, action) {
    return (handlers[action.type] || echo)(state, action);
  };
}