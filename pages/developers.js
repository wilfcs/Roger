import React from "react";
import ThisSlider from "../components/slider";
import lottie from "lottie-web";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Logo from "../components/MyLogo";
import HomeArrow from "../components/HomeArrow";

const Developers = () => {
  const [firstLoad, setFirstLoad] = useState(1);

  const container = useRef(null);

  useEffect(() => {
    setFirstLoad(0);
    lottie.loadAnimation({
      container: container.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: require("../Json/dev.json"),
    });
  },[firstLoad]);

  return (
    <div className="aa w-screen h-screen overflow-hidden">
      <div className="developerBox w-screen h-screen  -z-20 ">
        <Link href="/" passHref>
          <div className="brand cursor-pointer">
            <Logo/>
          </div>
        </Link>
        <h1 className=" text-center  from-neutral-600 font-bold text-5xl pb-8 title">
          Developers
        </h1>
        <div className=" z-30 ">
          <ThisSlider />
         
        </div>
      <div className="fixed bottom-0 -z-10 "  ref={container}></div>
        
      </div>


      <HomeArrow page="/"/>



      <style jsx>
        {`
          .developerBox {

            padding: auto;
          }
          .aa{

          }
          .brand {
            position: fixed;
            top: 28px;
            left: 54px;
          }
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

          .title {
                  font-family: "Work Sans", sans-serif;
                    position: absolute;
                    top: 7px;
                    left: 71px;
                    color: #c4c4cd ;
                  font-size: 6rem;
                  font-weight: bold;
                  font-family: sans-serif;
                  text-transform: uppercase;
                  text-shadow: -6px 6px 15px rgba(0,0,0,0.5),6px -6px 15px rgba(255,255,255,0.8);
                              
                  position: relative;
                
                 
                  }
        `}
      </style>
    </div>
  );
};

export default Developers;
