import React from "react";

const Stars = () => {
  return (
    <div className="stars">
      {Array.from({ length: 60 }).map((_, i) => (
        <span
          key={i}
          className="star"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 2}s`,
          }}
        />
      ))}
    </div>
  );
};

export default Stars;
