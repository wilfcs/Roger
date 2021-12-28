import React from "react";
import { useEffect, useRef, useState } from "react";

import lottie from "lottie-web";
import Link from "next/link";

const Logo = () => {
  // Adding Effect
  const [firstLoad, setFirstLoad] = useState(1);
  const container = useRef(null);

  useEffect(() => {
    setFirstLoad(0);

    lottie.loadAnimation({
      container: container.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: require("../Json/page.json"),
    });
  }, [firstLoad]);
  return (
    <>
      <Link href="/">
        <div
          className="logo overflow-hidden cursor-pointer"
          ref={container}
        ></div>
      </Link>
      <div className="brandName font-extrabold">Roger</div>
      <style jsx>
        {`
          .logo {
            height: 55px;
            width: 55px;
            background-color: #a9a9b3;
            border-radius: 50%;
          }

          .brandName {
            font-family: "Work Sans", sans-serif;
            position: absolute;
            top: 7px;
            left: 71px;
            font-size: 30px;
            color: #81818b;

            // font-size: 150px;
            color: #a9a9b3;
            text-shadow: -8px -8px 12px rgba(255, 255, 255, 0.4),
              8px 8px 12px rgba(0, 0, 0, 0.08);
            caret-color: #262626;
            outline: none;
          }
        `}
      </style>
    </>
  );
};

export default Logo;
