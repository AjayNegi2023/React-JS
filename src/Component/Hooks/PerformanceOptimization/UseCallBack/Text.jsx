import React from "react";

const Text = ({ text, count }) => {
  console.log("Increment", text);
  return (
    <div>
      <h4 style={{ color: "red" }}>
        {text} - {count}
      </h4>
    </div>
  );
};

export default React.memo(Text);
