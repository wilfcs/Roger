import React from "react";
import ThisSlider from "../components/slider";
import lottie from "lottie-web";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Logo from "../components/MyLogo";
import HomeArrow from "../components/HomeArrow";

const developers = () => {
  const container = useRef(null);

  useEffect(() => {
    lottie.loadAnimation({
      container: container.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: require("../Json/dev.json"),
    });
  });

  return (
    <>
      <div className="developerBox w-screen h-screen pt-12 ">
        <Link href="/">
          <div className="brand cursor-pointer">
            <Logo/>
          </div>
        </Link>
        <h1 className=" text-center  from-neutral-600 font-bold text-5xl pb-8">
          Developers
        </h1>
        <div className="check ">
          <ThisSlider />
          <div className="fixed bottom-0 -z-10  " ref={container}></div>
        </div>
      </div>


      <HomeArrow page="/"/>


      <style jsx>
        {`
          .developerBox {
            background-color: #c4c4cd;
            padding: auto;
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
        `}
      </style>
    </>
  );
};

export default developers;
