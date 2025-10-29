import { axiosInstance } from ".";

export const getAlltheatres = async () => {
  try {
    const response = await axiosInstance.get("/theatres/getAlltheatres");
    return response?.data;
  } catch (error) {
    return error;
  }
};

export const getAlltheatresByOwner = async () => {
  try {
    const response = await axiosInstance.get("/theatres/getAllTheatresByOwner");
    return response?.data;
  } catch (error) {
    return error;
  }
};

export const addTheatre = async (values) => {
  try {
    const response = await axiosInstance.post("/theatres/addTheatre", values);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const updateTheatre = async (values) => {
  try {
    const response = await axiosInstance.patch(
      "/theatres/updateTheatre",
      values
    );
    return response?.data;
  } catch (error) {
    return error;
  }
};

export const deleteTheatre = async (TheatreId) => {
  try {
    const response = await axiosInstance.delete(
      `/theatres/deleteTheatre/${TheatreId}`
    );
    return response?.data;
  } catch (error) {
    return error;
  }
};
