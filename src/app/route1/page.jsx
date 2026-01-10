"use client";

import React from "react";

const Page = () => {
  const handleClick = (type) => {
    alert(`You clicked: ${type}`);
    // You can replace this with navigation or any other logic
  };

  return (
    <div style={{ padding: 40, textAlign: "center" }}>
      <h1>Route 1 Page</h1>

      <div
        style={{
          marginTop: 20,
          display: "flex",
          gap: 20,
          justifyContent: "center",
        }}
      >
        <button
          onClick={() => handleClick("Tfi")}
          style={{ padding: "10px 20px", fontSize: 16, cursor: "pointer" }}
        >
          Tfi
        </button>

        <button
          onClick={() => handleClick("Cricket")}
          style={{ padding: "10px 20px", fontSize: 16, cursor: "pointer" }}
        >
          Cricket
        </button>
      </div>
    </div>
  );
};

export default Page;
