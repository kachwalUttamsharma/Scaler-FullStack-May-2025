import { Button, message, Table } from "antd";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { hideLoading, showLoading } from "../../redux/loaderSlice";
import { getAlltheatres, updateTheatre } from "../../api/theatre";

const TheatreTable = () => {
  const disptach = useDispatch();
  const [theatres, setTheatres] = useState([]);

  const handleStatusChange = async (theatre) => {
    try {
      disptach(showLoading());
      const payload = {
        ...theatre,
        isActive: !theatre.isActive,
      };
      const response = await updateTheatre(payload);
      if (response.success) {
        message.success(response.message);
        getData();
      } else {
        message.warning(response.message);
      }
    } catch (error) {
      message.error(error);
    } finally {
      disptach(hideLoading());
    }
  };
  const getData = async () => {
    try {
      disptach(showLoading());
      const response = await getAlltheatres();
      if (response.success) {
        setTheatres(response?.data);
      }
    } catch (error) {
      message.error(error);
    } finally {
      disptach(hideLoading());
    }
  };
  useEffect(() => {
    getData();
  }, []);
  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Address",
      dataIndex: "address",
      key: "address",
    },
    {
      title: "Owner",
      dataIndex: "owner",
      render: (text, data) => {
        return data.owner && data.owner.name;
      },
    },
    {
      title: "Phone Number",
      dataIndex: "phone",
      key: "phone",
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Status",
      dataIndex: "isActive",
      render: (status, data) => {
        if (data.isActive) {
          return "Approved";
        } else {
          return "Pending/Blocked";
        }
      },
    },
    {
      title: "Action",
      dataIndex: "action",
      render: (text, data) => {
        return (
          <div className="d-flex align-items-center gap-10">
            {data.isActive ? (
              <Button onClick={() => handleStatusChange(data)}>Block</Button>
            ) : (
              <Button onClick={() => handleStatusChange(data)}>Approve</Button>
            )}
          </div>
        );
      },
    },
  ];
  return (
    <div>
      <Table dataSource={theatres} columns={columns} />
    </div>
  );
};

export default TheatreTable;
