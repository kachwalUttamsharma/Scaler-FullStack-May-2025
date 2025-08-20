import "./App.css";
import { MyComponent, MyComponent1 } from "./Components/MyComponent.jsx";
import DisplayData from "./Components/DisplayData.jsx";
import ConditionalRendering from "./Components/ConditionalRendering.jsx";
import Button from "./Components/Button.jsx";
import Counter from "./Components/Counter/Counter.jsx";
function App() {
  const fruits = ["Apple", "Banana", "Mango"];
  const person = {
    name: "xxx",
    age: 25,
  };
  const isLoggedIn = false;
  const name = "xxxx";
  return (
    <>
      <h1>React</h1>
      {/* <MyComponent message="Hello, I am Component 1" />
      <MyComponent message="Hello, I am Component 2" />
      <MyComponent message="Hello, I am Component 3" />
      <MyComponent message="Hello, I am Component 4" />
      <MyComponent1 message="Hello, I am Component 5" /> */}
      {/* <DisplayData fruits={fruits} person={person} />
      <ConditionalRendering isLoggedIn={isLoggedIn} name={name} />
      <Button /> */}
      <Counter />
    </>
  );
}

export default App;
