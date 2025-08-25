import React from "react";

const Product = ({ products }) => {
  console.log(products);
  return (
    <div>
      <h2>Product List</h2>
      <ul style={{ listStyle: "none" }}>
        {products.map((product) => {
          return (
            <li
              key={product?.id}
              style={{
                border: "1px solid #ccc",
                margin: "3px",
                padding: "10px",
                borderRadius: "8px",
              }}
            >
              <img
                src={product?.image}
                alt={product?.name}
                style={{ width: "150px", height: "150px", borderRadius: "30%" }}
              />
              <h2>
                {product?.name} {product?.price}
              </h2>
              <button>Add to Cart</button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Product;
