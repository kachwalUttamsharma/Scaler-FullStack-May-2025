import { useState } from "react";
import "./App.css";
import FormikForm from "./Components/FormikForm";
import SimpleForm from "./Components/SimpleForm";
import TemperatureDisplay from "./Components/TemperatureDisplay";
import TemperatureInput from "./Components/TemperatureInput";
import Counter from "./Components/Counter";
import UserData from "./Components/UserData";

function App() {
  const [temperature, setTemperature] = useState("");
  const [showCounter, setShowCounter] = useState(true);
  return (
    <>
      {/* <SimpleForm /> */}
      {/* <FormikForm /> */}
      {/* <TemperatureInput
        temperature={temperature}
        setTemperature={setTemperature}
      />
      <TemperatureDisplay temperature={temperature} /> */}
      {showCounter && <Counter />}
      <button
        onClick={() => {
          setShowCounter((prev) => !prev);
        }}
      >
        Toggle Counter
      </button>

      <UserData />
    </>
  );
}

export default App;
