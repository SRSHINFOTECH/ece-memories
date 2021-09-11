import ACTION_TYPES from "./types";

const isLoading = (state = false, action) => {
  switch (action.type) {
    case ACTION_TYPES.REQUEST:
      return {
        ...state,
        [action.serviceType]: true
      };
    case ACTION_TYPES.SUCCESS:
    case ACTION_TYPES.FAILURE:
      return {
        ...state,
        [action.serviceType]: false
      };
    default:
      return state;
  }
};

const errorMessage = (state = null, action) => {
  switch (action.type) {
    case ACTION_TYPES.FAILURE:
      return {
        [action.serviceType]: action.errorMessage
      };
    case ACTION_TYPES.REQUEST:
    case ACTION_TYPES.SUCCESS:
    case ACTION_TYPES.CLEAR_ERROR:
      return null;
    default:
      return state;
  }
};

const createReducer = (dataReducer, successMessageReducer) => (
  state,
  action
) => ({
  errorMessage: errorMessage(state.errorMessage, action),
  isLoading: isLoading(state.isLoading, action),
  data: dataReducer(state.data, action),
  successMessage: successMessageReducer
    ? successMessageReducer(state.successMessage, action)
    : state.successMessage
});

export default createReducer;
