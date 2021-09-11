import axios from "axios";
import { isNullOrUndefined } from "util";

//handle and throw error
export const validateResponse = resp => {
  if (
    isNullOrUndefined(resp) ||
    isNullOrUndefined(resp.data) ||
    isNullOrUndefined(resp.data.status) ||
    resp.data.status === "OK" ||
    resp.data.status === "200"
  ) {
    return null;
  }
  let error = "";
  if (
    !isNullOrUndefined(resp.data.validationResponse) &&
    !isNullOrUndefined(resp.data.validationResponse.validationErrorInfo)
  ) {
    error = resp.data.validationResponse.validationErrorInfo.reduce(
      (acc, errorInfo) => (acc === "" ? acc : acc + " ") + errorInfo.message,
      ""
    );
    throw new Error(error);
  } else if (!isNullOrUndefined(resp.data.errorMessage)) {
    error = resp.data.errorMessage;
    throw new Error(error);
  }
};

const createAPI = () => {
  const serviceUrl = "https://ece-memories.firebaseio.com/";
  let baseUrl;
  //Default timeout is 5 minutes
  axios.defaults.timeout = 300000;
    baseUrl =  serviceUrl;
  

  // const setToken = token => {
  //   if (process.env.NODE_ENV !== "production") {
  //     axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  //   }
  // };

  const  get = async (resourceURL, toGet) => {
 
      try {

        const url=serviceUrl+resourceURL+".json"
          const response = await axios.get(url);
            validateResponse(response);
         
            
          return response;
      } catch (error) {
          console.log(error);
      }
     
    
  };

  const create = (resourceURL, toCreate, config = {}) => {
    return axios.post(baseUrl + resourceURL, toCreate).then(
      resp => {
        validateResponse(resp);
        return resp;
      },
      error => {
        console.log(error);
      }
    );
  };

  const update = (resourceURL, toUpdate, config = {}) => {
    return axios.put(baseUrl + resourceURL, toUpdate).then(
      resp => {
        validateResponse(resp);
        return resp;
      },
      error => {
        console.log(error);
      }
    );
  };

  const toDelete = (resourceURL, config = {}) => {
    return axios.delete(baseUrl + resourceURL).then(
      resp => {
        validateResponse(resp);
        return resp;
      },
      error => {
        console.log(error);
      }
    );
  };

  // const getToken = resourceURL => {
  //   return axios.post(resourceURL).then(
  //     resp => {
  //       validateResponse(resp);
  //       if (resp.data) {
  //         setToken(resp.data.access_token);
  //       }
  //       return resp;
  //     },
  //     error => {
  //       console.log(error);
  //     }
  //   );
  // };

  return Object.freeze({
    get,
    create,
    // getToken,
    update,
    toDelete
  });
};

export { createAPI };
export default createAPI();
