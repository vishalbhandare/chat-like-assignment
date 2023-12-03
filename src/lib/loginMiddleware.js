import userService from "./remote/userService";
const loginMiddleware = {
  beforeEnter: (to, from, next) => {
    if (to.meta.needAuth && !userService.isUserAlreadyLoggedin()) {
      next({ path: "/login" });
    } else if (
      ["/login", "/"].includes(to.path) &&
      userService.isUserAlreadyLoggedin()
    ) {
      next({ path: "/chats" });
    } else {
      next();
    }
  },
};

export default loginMiddleware;
