import { message, Modal } from "antd";
import React from "react";
import { useDispatch } from "react-redux";
import { hideLoading, showLoading } from "../../redux/loaderSlice";
import { deleteTheatre } from "../../api/theatre";

const DeleteTheatreModal = ({
  isDeleteModalOpen,
  setIsDeleteModalOpen,
  selectedTheatre,
  setSelectedTheatre,
  fetchTheatreData,
}) => {
  const dispatch = useDispatch();
  const handleOk = async () => {
    try {
      dispatch(showLoading());
      const theatreId = selectedTheatre._id;
      const response = await deleteTheatre(theatreId);
      if (response.success) {
        message.success(response.message);
      } else {
        message.warning(response.message);
      }
    } catch (error) {
      message.error(error);
    } finally {
      setIsDeleteModalOpen(false);
      setSelectedTheatre(null);
      fetchTheatreData();
      dispatch(hideLoading());
    }
  };

  const handleCancel = () => {
    setIsDeleteModalOpen(false);
    setSelectedTheatre(null);
  };
  return (
    <Modal
      title="Delete Theatre"
      open={isDeleteModalOpen}
      onOk={handleOk}
      onCancel={handleCancel}
    >
      <p className="pt-3 fs-18">
        Are you sure you want to delete this theatre {selectedTheatre.name}?
      </p>
      <p className="pb-3 fs-18">
        This action can't be undone and you'll lose this movie data
      </p>
    </Modal>
  );
};
export default DeleteTheatreModal;
