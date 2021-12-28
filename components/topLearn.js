import React from 'react'
import { useEffect, useRef, useState } from "react";
import lottie from "lottie-web";

const topLearn = () => {
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
        <div>
            
        </div>
    )
}

export default topLearn
