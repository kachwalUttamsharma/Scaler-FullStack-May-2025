import React, { useState } from "react";

// user registration
// name
// email
// password
const SimpleForm = () => {
  //   const [name, setName] = useState("");
  //   const [email, setEmail] = useState("");
  //   const [password, setPassword] = useState("");
  //   [name, email, password];
  // {
  //   name: "",
  //   email: "",
  //   password: ""
  // }
  const [errors, setErrors] = useState({});
  const [formValues, setFormValues] = useState({
    name: "",
    email: "",
    password: "",
  });
  const changeHandler = (event) => {
    const { name, value } = event?.target;
    setFormValues((prevState) => {
      return {
        ...prevState,
        [name]: value,
      };
    });
  };

  const validate = () => {
    const newError = {};
    if (formValues.name.trim().length === 0) {
      newError.name = "Name shouldn't be empty";
    }
    if (formValues.email.trim().length === 0) {
      newError.email = "Email shouldn't be empty";
    }
    if (formValues.password.trim().length === 0) {
      newError.password = "password shouldn't be empty";
    }
    setErrors(newError);
    return Object.keys(newError).length === 0;
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (validate()) {
      console.log("Form submitted: ", formValues);
      setFormValues({
        name: "",
        email: "",
        password: "",
      });
      setErrors({});
    }
  };
  return (
    <form onSubmit={submitHandler}>
      <div style={{ margin: "5px" }}>
        <label htmlFor="name">Name :</label>
        <input
          type="text"
          id="name"
          name="name"
          onChange={changeHandler}
          value={formValues?.name}
        />
        {errors?.name && (
          <div style={{ color: "red", padding: "5px" }}>{errors?.name}</div>
        )}
      </div>
      <div style={{ margin: "5px" }}>
        <label htmlFor="email">Email :</label>
        <input
          type="email"
          id="email"
          name="email"
          onChange={changeHandler}
          value={formValues?.email}
        />
        {errors?.email && (
          <div style={{ color: "red", padding: "5px" }}>{errors?.email}</div>
        )}
      </div>
      <div style={{ margin: "5px" }}>
        <label htmlFor="password">Password :</label>
        <input
          type="password"
          id="password"
          name="password"
          onChange={changeHandler}
          value={formValues?.password}
        />
        {errors?.password && (
          <div style={{ color: "red", padding: "5px" }}>{errors?.password}</div>
        )}
      </div>
      <button style={{ margin: "5px" }} type="submit">
        Submit
      </button>
    </form>
  );
};

export default SimpleForm;
