import React from 'react'
import { useEffect, useRef, useState } from "react";

import lottie from "lottie-web";
import Link from 'next/link';

const HomeArrow = ({page}) => {
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
        animationData: require("../Json/homeArrow.json"),
      },
    );

    
  }, [firstLoad]);

    return (
        <>
        <Link href={page}>
        <div className='fixed z-50  right-7 bottom-4 w-28 h-28 p-0 overflow-hidden cursor-pointer   ' >
        <div ref ={container} >
            
        </div>
        </div>
        </Link>
        </>
    )
}

export default HomeArrow
