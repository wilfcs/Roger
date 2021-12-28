import React from 'react'
import { useEffect, useRef, useState } from "react";

import lottie from "lottie-web";
import Link from 'next/link';

const Logo = () => {
    // Adding Effect
  const [firstLoad, setFirstLoad] = useState(1);
  const container = useRef(null);


  useEffect(() => {
    setFirstLoad(0);

    lottie.loadAnimation(
      {
        container: container.current,
        renderer: "svg",
        loop: true,
        autoplay: true,
        animationData: require("../Json/page.json"),
      },
    );

    
  }, [firstLoad]);
    return (
        <>
        <Link href="/">
            <div className="logo overflow-hidden cursor-pointer" ref={container} ></div>
            </Link>
          <div className="brandName">Roger</div>
          <style jsx>
              {
                  `
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
                  }
                  `
              }
          </style>
        </>
    )
}

export default Logo
