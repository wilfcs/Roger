import React from "react";
import ThisSlider from "../components/slider";

const developers = () => {
  return (
    <>
      <div className="developerBox">
          <div className="check" >
        <ThisSlider />
        </div>
      </div>

      <style jsx>
        {`
          .developerBox {
            background-color: #c4c4cd;
            padding: auto;
            width: 100vw;
            height: 100vh;
          }
        `}
      </style>
    </>
  );
};

export default developers;
