import { useReducer, useMemo, useCallback } from "react";
import createReducer from "./reducers";
import ACTION_TYPES from "./types";

export const createServiceDispatch = dispatch => (service, serviceType) => {
  dispatch({
    type: ACTION_TYPES.REQUEST,
    serviceType: serviceType
  });
  return service().then(
    response => {
      dispatch({
        type: ACTION_TYPES.SUCCESS,
        serviceType: serviceType,
        data: response
      });
      return true;
    },
    error => {
      dispatch({
        type: ACTION_TYPES.FAILURE,
        serviceType: serviceType,
        errorMessage: error.message || "Something went wrong."
      });
      return false;
    }
  );
};

const useService = (
  dataReducer,
  initialState,
  successMessageReducer = null
) => {
  const combinedReducer = useCallback(
    createReducer(dataReducer, successMessageReducer),
    [dataReducer, successMessageReducer]
  );
  const [
    { data, isLoading, errorMessage, successMessage },
    dispatch
  ] = useReducer(combinedReducer, initialState);

  const serviceDispatch = useMemo(() => createServiceDispatch(dispatch), [
    dispatch
  ]);

  return {
    data,
    isLoading,
    errorMessage,
    successMessage,
    serviceDispatch,
    dispatch
  };
};

export default useService;
