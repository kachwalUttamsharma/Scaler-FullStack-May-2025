import { Button, message, Table } from "antd";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { hideLoading, showLoading } from "../../redux/loaderSlice";
import { getAllMovies } from "../../api/movie";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
import MovieForm from "./MovieForm";
import moment from "moment";
import DeleteMovieModal from "./DeleteMovieModal";

const MovieTable = () => {
  const [movies, setMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const dispatch = useDispatch();
  const getData = async () => {
    try {
      dispatch(showLoading());
      const response = await getAllMovies();
      if (response?.success === true) {
        setMovies(response?.data);
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
    // extract as a custom hook
    getData();
  }, []);

  const columns = [
    {
      key: "poster",
      title: "Poster",
      dataIndex: "poster",
      render: (text, data) => {
        return (
          <img
            src={text}
            alt="Movie Poster"
            style={{ objectFit: "cover" }}
            width="75"
            height="115"
          />
        );
      },
    },
    {
      key: "movieName",
      title: "Movie Name",
      dataIndex: "movieName",
    },
    {
      key: "description",
      title: "Description",
      dataIndex: "description",
    },
    {
      key: "duration",
      title: "Duration",
      dataIndex: "duration",
      render: (text) => {
        return `${text} Mins`;
      },
    },
    {
      key: "genre",
      title: "Genre",
      dataIndex: "genre",
    },
    {
      key: "language",
      title: "Language",
      dataIndex: "language",
    },
    {
      key: "releaseDate",
      title: "Release Date (MM-DD-YYYY)",
      dataIndex: "releaseDate",
      render: (text, data) => {
        return moment(text).format("MM-DD-YYYY");
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
                data.releaseDate = moment(data.releaseDate).format(
                  "YYYY-MM-DD"
                );
                setSelectedMovie(data);
              }}
            >
              <EditOutlined />
            </Button>
            <Button
              danger
              style={{ margin: "5px" }}
              onClick={() => {
                setSelectedMovie(data);
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
    <>
      <div className="d-flex justify-content-end" style={{ margin: "8px" }}>
        <Button
          onClick={() => {
            setIsModalOpen(!isModalOpen);
          }}
          type="primary"
        >
          Add Movie
        </Button>
      </div>
      <Table columns={columns} dataSource={movies} />
      {isModalOpen && (
        <MovieForm
          isModalOpen={isModalOpen}
          setIsModalOpen={setIsModalOpen}
          fetchMovieData={getData}
          selectedMovie={selectedMovie}
          setSelectedMovie={setSelectedMovie}
        />
      )}
      {isDeleteModalOpen && (
        <DeleteMovieModal
          isDeleteModalOpen={isDeleteModalOpen}
          setIsDeleteModalOpen={setIsDeleteModalOpen}
          selectedMovie={selectedMovie}
          setSelectedMovie={setSelectedMovie}
          fetchMovieData={getData}
        />
      )}
    </>
  );
};

export default MovieTable;
