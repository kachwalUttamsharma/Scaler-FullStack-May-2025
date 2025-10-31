import React, { useEffect, useState } from "react";
import { message, Row, Col, Input } from "antd";
import { useDispatch } from "react-redux";
import { getAllMovies } from "../api/movie";
import { hideLoading, showLoading } from "../redux/loaderSlice";
import { SearchOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import moment from "moment";

const Home = () => {
  const dispatch = useDispatch();
  const [movies, setMovies] = useState([]);
  const [searchText, setSearchText] = useState("");
  const navigate = useNavigate();
  const getData = async () => {
    try {
      dispatch(showLoading());
      const response = await getAllMovies();
      if (response.success) {
        setMovies(response.data);
      } else {
        message.warning(response.message);
      }
    } catch (error) {
      message.error(error);
    } finally {
      dispatch(hideLoading());
    }
  };

  const handleSearch = (event) => {
    setSearchText(event.target.value);
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <>
      <div>
        <Row
          className="justify-content-center w-100"
          style={{ padding: "20px 15px 20px 0px", margin: "auto 20px" }}
        >
          <Col xs={{ span: 24 }} lg={{ span: 12 }}>
            <Input
              placeholder="Type here to search for movie"
              onChange={handleSearch}
              prefix={<SearchOutlined />}
            />
          </Col>
        </Row>
        <Row
          className="justify-content-center"
          gutter={{
            xs: 8,
            sm: 16,
            md: 24,
            lg: 32,
          }}
          style={{ padding: "20px 15px 20px 0px", margin: "auto 20px" }}
        >
          {movies &&
            movies
              .filter((movie) =>
                movie.movieName.toLowerCase().includes(searchText.toLowerCase())
              )
              .map((movie, idx) => {
                return (
                  <Col
                    key={idx || movie?._id}
                    className="gutter-row mb-5"
                    gutter={{
                      xs: 8,
                      sm: 16,
                      md: 24,
                      lg: 32,
                    }}
                  >
                    <div className="text-center">
                      <img
                        src={movie?.poster}
                        alt="movie poster"
                        width={200}
                        height={200}
                        style={{
                          borderRadius: "8px",
                          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                          transition: "transform 0.3s",
                          objectFit: "cover",
                        }}
                        onMouseOver={(e) => {
                          e.currentTarget.style.transform = "scale(1.05)";
                        }}
                        onMouseOut={(e) => {
                          e.currentTarget.style.transform = "scale(1)";
                        }}
                        onClick={() => {
                          navigate(
                            `/movie/${movie._id}?date=${moment().format(
                              "YYYY-MM-DD"
                            )}`
                          );
                        }}
                      />
                      <h3>{movie.movieName}</h3>
                    </div>
                  </Col>
                );
              })}
        </Row>
      </div>
    </>
  );
};

export default Home;
