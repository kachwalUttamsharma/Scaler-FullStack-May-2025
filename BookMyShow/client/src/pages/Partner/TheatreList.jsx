import { Button, message, Table } from "antd";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { getAlltheatres } from "../../api/theatre";
import { hideLoading, showLoading } from "../../redux/loaderSlice";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import TheatreForm from "./TheatreForm";
import DeleteTheatreModal from "./DeleteTheatreModal";

const TheatreList = () => {
  const [theatres, setTheatres] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedTheatre, setSelectedTheatre] = useState(null);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const dispatch = useDispatch();
  const getData = async () => {
    try {
      dispatch(showLoading());
      const response = await getAlltheatres();
      if (response?.success === true) {
        setTheatres(response?.data);
      } else {
        message.warning(response?.message);
      }
    } catch (error) {
      message.error(error);
    } finally {
      dispatch(hideLoading());
    }
  };
  useEffect(() => {
    getData();
  }, []);
  const columns = [
    {
      key: "name",
      title: "Name",
      dataIndex: "name",
    },
    {
      key: "address",
      title: "Address",
      dataIndex: "address",
    },
    {
      key: "phone",
      title: "Phone Number",
      dataIndex: "phone",
    },
    {
      key: "email",
      title: "Email",
      dataIndex: "email",
    },
    {
      key: "status",
      title: "Status",
      dataIndex: "isActive",
      render: (text, data) => {
        if (data.isActive) {
          return "Approved/Running";
        } else {
          return "Pending/Blocked/UnderMaintenance";
        }
      },
    },
    {
      key: "Actions",
      title: "Actions",
      render: (text, data) => {
        return (
          <div style={{ display: "flex" }}>
            <Button
              style={{ margin: "5px" }}
              onClick={() => {
                setIsModalOpen(true);
                setSelectedTheatre(data);
              }}
            >
              <EditOutlined />
            </Button>
            <Button
              danger
              style={{ margin: "5px" }}
              onClick={() => {
                setSelectedTheatre(data);
                setIsDeleteModalOpen(true);
              }}
            >
              <DeleteOutlined />
            </Button>
          </div>
        );
      },
    },
  ];
  return (
    <div>
      <div className="d-flex justify-content-end" style={{ margin: "8px" }}>
        <Button
          onClick={() => {
            setIsModalOpen(!isModalOpen);
            setSelectedTheatre(null);
          }}
          type="primary"
        >
          Add Theatre
        </Button>
      </div>
      <Table columns={columns} dataSource={theatres} />
      {isModalOpen && (
        <TheatreForm
          isModalOpen={isModalOpen}
          setIsModalOpen={setIsModalOpen}
          fetchTheatreData={getData}
          selectedTheatre={selectedTheatre}
          setSelectedTheatre={setSelectedTheatre}
        />
      )}
      {isDeleteModalOpen && (
        <DeleteTheatreModal
          isDeleteModalOpen={isDeleteModalOpen}
          setIsDeleteModalOpen={setIsDeleteModalOpen}
          fetchTheatreData={getData}
          selectedTheatre={selectedTheatre}
          setSelectedTheatre={setSelectedTheatre}
        />
      )}
    </div>
  );
};

export default TheatreList;
