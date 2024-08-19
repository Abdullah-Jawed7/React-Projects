// import React from "react";

// eslint-disable-next-line react/prop-types
function Btns({ colorName = "orange", setter }) {

  return (
    <>
      <button
        onClick={() => {
          setter(colorName);
        }}
        style={{ color: colorName,background:"transparent" }}
        className="bg-transparent font-bold outline-none px-4 rounded-full py-1 shadow-lg"
      >
        {colorName}
      </button>
    </>
  );
}
export default Btns;
