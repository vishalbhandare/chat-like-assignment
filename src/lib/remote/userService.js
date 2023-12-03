import User from "../models/user";
const regExpEmailValidate = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/; // eslint-disable-line

const userService = {
  isUserAlreadyLoggedin: () => {
    return !!localStorage.getItem("user");
  },

  getUserDetailFromLocalStorage: () => {
    return localStorage.getItem("user");
  },

  validateUserDetails: (email) => {
    return regExpEmailValidate.test(email);
  },

  autheticateUser: (email) => {
    if (userService.validateUserDetails(email)) {
      localStorage.setItem("user", email);
      return true;
    }
    return false;
  },

  getUserDetails: async () => {
    let user = userService.getUserDetailFromLocalStorage();

    return user ? new User(user) : "";
  },

  logoutUser: () => {
    localStorage.removeItem("user");
  },
};

export default userService;
