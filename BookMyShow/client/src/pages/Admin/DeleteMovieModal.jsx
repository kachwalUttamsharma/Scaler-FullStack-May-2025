import { message, Modal } from "antd";
import React from "react";
import { useDispatch } from "react-redux";
import { hideLoading, showLoading } from "../../redux/loaderSlice";
import { deleteMovie } from "../../api/movie";

const DeleteMovieModal = ({
  isDeleteModalOpen,
  setIsDeleteModalOpen,
  selectedMovie,
  setSelectedMovie,
  fetchMovieData,
}) => {
  const dispatch = useDispatch();
  const handleOk = async () => {
    try {
      dispatch(showLoading());
      const movieId = selectedMovie._id;
      const response = await deleteMovie(movieId);
      if (response.success) {
        message.success(response.message);
      } else {
        message.warning(response.message);
      }
    } catch (error) {
      message.error(error);
    } finally {
      setIsDeleteModalOpen(false);
      setSelectedMovie(null);
      fetchMovieData();
      dispatch(hideLoading());
    }
  };

  const handleCancel = () => {
    setIsDeleteModalOpen(false);
    setSelectedMovie(null);
  };
  return (
    <Modal
      title="Delete Movie"
      open={isDeleteModalOpen}
      onOk={handleOk}
      onCancel={handleCancel}
    >
      <p className="pt-3 fs-18">
        Are you sure you want to delete this movie {selectedMovie.movieName}
      </p>
      <p className="pb-3 fs-18">
        This action can't be undone and you'll lose this movie data
      </p>
    </Modal>
  );
};

export default DeleteMovieModal;
