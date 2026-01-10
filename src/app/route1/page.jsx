'use client';

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

const Page = () => {
  const router = useRouter();
  const [countdown, setCountdown] = useState(null);

  useEffect(() => {
    let timer;

    if (countdown !== null) {
      if (countdown === 0) {
        router.push("/route2");
      } else {
        timer = setTimeout(() => setCountdown(countdown - 1), 1000);
      }
    }

    return () => clearTimeout(timer);
  }, [countdown, router]);

  const handleClick = (type) => {
    if (type === "Tfi") {
      setCountdown(2); // start countdown from 2
    } else if (type === "Cricket") {
      alert("You clicked Cricket!");
    }
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

      {/* Countdown message */}
      {countdown !== null && (
        <p style={{ marginTop: 20, color: "green", fontWeight: "bold" }}>
          You clicked Tfi! Redirecting in {countdown}...
        </p>
      )}
    </div>
  );
};

export default Page;
