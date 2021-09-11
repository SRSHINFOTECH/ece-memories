import api from "../../api/API.js";

const UsersServiceFactory = () => {
  function getUsers() {
    let resourceURL ="/datas";
    return api.get(resourceURL).then(resp => {
      return resp.data;
    });
  }

  return Object.freeze({
    getUsers
  });
};

const UsersService = UsersServiceFactory();
export default UsersService;
