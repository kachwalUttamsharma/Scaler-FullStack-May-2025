import { axiosInstance } from ".";

export const RegisterUser = async (values) => {
  try {
    const response = await axiosInstance.post("/users/register", values);
    console.log(response);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
export const LoginUser = async (values) => {
  try {
    const response = await axiosInstance.post("/users/login", values);
    console.log(response);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const GetCurrentUser = async () => {
  try {
    const response = await axiosInstance.get("/users/getCurrentUser");
    return response.data;
  } catch (error) {
    return error;
  }
};
