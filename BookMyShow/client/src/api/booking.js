import { axiosInstance } from ".";

export const makePayment = async ({ token, amount, description }) => {
  try {
    const response = await axiosInstance.post("/bookings/makePayment", {
      amount,
      description,
    });
    return response.data;
  } catch (err) {
    return err.response;
  }
};

export const bookShow = async (payload) => {
  try {
    const response = await axiosInstance.post("/bookings/bookShow", payload);
    console.log(response.data);
    return response.data;
  } catch (err) {
    return err.response;
  }
};

export const getAllBookings = async () => {
  try {
    const response = await axiosInstance.get("/bookings/getAllBookings");
    return response.data;
  } catch (err) {
    return err.response;
  }
};
