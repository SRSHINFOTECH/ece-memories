import { useMemo } from "react";
import useService from "../../hooks/useService/useService.js";
import UsersService from "./UsersService";
import ACTION_TYPES from "../../hooks/useService/types";
import { isNullOrUndefined } from "util";

export const SERVICE_TYPES = {
  GET_USERS: "GET_USERS",
  SEARCH_USERS:"SEARCH_USERS"
};

// Reducers
const dataReducer = (state, action) => {
  if (action.type !== ACTION_TYPES.SUCCESS) {
    return state;
  }
  switch (action.serviceType) {
    case SERVICE_TYPES.GET_USERS:
    let userData=[]
      if(action.data){
        for (const key in action.data) {
         
          userData=[...userData,action.data[key]]
          
        }
      }
      return userData;
    case SERVICE_TYPES.SEARCH_USERS:
    console.log(state);
      return state;
      
    default:
      return state;
  }
};

export const useUsersService = initialState => {
  const {
    data,
    isLoading,
    errorMessage,
    serviceDispatch,
    successMessage,
    dispatch
  } = useService(dataReducer, initialState);
  const dispatchers = useMemo(
    () => ({
   
      
      [SERVICE_TYPES.GET_USERS]: () =>
        serviceDispatch(
          () => UsersService.getUsers(),
          SERVICE_TYPES.GET_USERS
        ),
      [SERVICE_TYPES.SET_MESSAGE]: message =>
        dispatch({
          type: ACTION_TYPES.SUCCESS,
          serviceType: SERVICE_TYPES.SET_MESSAGE,
          successMessage: message
        }),
      [SERVICE_TYPES.CLEAR_ERROR_MESSAGE]: () =>
        dispatch({
          type: ACTION_TYPES.CLEAR_ERROR,
          serviceType: SERVICE_TYPES.CLEAR_ERROR_MESSAGE
        })
    }),
    [dispatch, serviceDispatch]
  );

  return { data, dispatchers };
};

export default useUsersService;
