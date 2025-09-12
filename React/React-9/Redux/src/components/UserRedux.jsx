import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setVal } from "../redux/UserSlice";
import { fetchUserMiddleWare } from "../redux/Middlewares/userMiddleware";

function UserRedux() {
  const { user, error, loading, val } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  useEffect(() => {
    if (val) {
      dispatch(fetchUserMiddleWare(val));
    }
  }, [val]);

  const heading = (
    <div>
      <h2>User Example</h2>
      <input
        type="text"
        value={val}
        onChange={(e) => dispatch(setVal(e.target.value))}
      />
    </div>
  );

  if (loading) {
    return (
      <>
        {heading}
        <h3>...Loading</h3>
      </>
    );
  }
  if (error) {
    return (
      <>
        {heading}
        <h3>Error occurred</h3>
      </>
    );
  }
  return (
    <>
      {heading}
      <h4>Name: {user.name}</h4>
      <h4>Phone: {user.phone}</h4>
    </>
  );
}

export default UserRedux;
