import { useState } from "react";
import "./App.css";
import Counter from "./Components/Counter/Counter";
import Product from "./Components/Products/Product";
import ToDoList from "./Components/ToDoList/ToDoList";
import UserCard from "./Components/UserCard/UserCard";
import Products from "./Data/Products";
import user from "./Data/User";

function App() {
  const ComponentStatus = {
    TO_DO_LIST: "ToDoList",
    PRODUCT_LIST: "Product",
    USER_CARD: "UserCard",
    COUNTER: "Counter",
  };
  const [showComponent, setShowComponent] = useState("ToDoList");
  return (
    <>
      <div style={{ display: "flex", gap: "5px" }}>
        <button onClick={() => setShowComponent(ComponentStatus.COUNTER)}>
          Counter
        </button>
        <button onClick={() => setShowComponent(ComponentStatus.USER_CARD)}>
          UserCard
        </button>
        <button onClick={() => setShowComponent(ComponentStatus.PRODUCT_LIST)}>
          ProductList
        </button>
        <button onClick={() => setShowComponent(ComponentStatus.TO_DO_LIST)}>
          ToDoList
        </button>
      </div>
      <div style={{ margin: "20px" }}>
        {showComponent === ComponentStatus.COUNTER && <Counter />}
        {showComponent === ComponentStatus.USER_CARD && (
          <UserCard user={user} />
        )}
        {showComponent === ComponentStatus.PRODUCT_LIST && (
          <Product products={Products} />
        )}
        {showComponent === ComponentStatus.TO_DO_LIST && <ToDoList />}
      </div>
    </>
  );
}

export default App;
