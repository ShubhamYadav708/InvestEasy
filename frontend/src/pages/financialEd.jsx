import React from "react";
import "./Page.css";

function Learn() {
  const topics = [
    { title: "Stocks", description: "Learn how to invest in stocks." },
    { title: "Mutual Funds", description: "Understand mutual funds." },
    { title: "Crypto", description: "Basics of cryptocurrency investing." },
  ];

  return (
    <div className="container">
      <h1>Learn Investing</h1>
      <div className="grid">
        {topics.map((topic, index) => (
          <div key={index} className="card">
            <h3>{topic.title}</h3>
            <p>{topic.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default financialEd;
