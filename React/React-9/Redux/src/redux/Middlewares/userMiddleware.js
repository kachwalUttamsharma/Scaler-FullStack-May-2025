import { userLoading, userData, userError, stopLoading } from "../UserSlice";

export const fetchUserMiddleWare = (val) => {
  if (val.length === 0 || val === null) {
    return;
  }
  return async (dispatch) => {
    try {
      dispatch(userLoading());
      const resp = await fetch(
        `https://jsonplaceholder.typicode.com/users/${val}`
      );
      const user = await resp.json();
      console.log("user", user);
      dispatch(userData(user));
    } catch (err) {
      dispatch(userError());
    } finally {
      dispatch(stopLoading());
    }
  };
};
