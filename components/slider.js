import React, { useState } from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import DeveloperLandingCard from './DeveloperLandingCard'
import Image from 'next/image';

const ThisSlider = () => {
  const image1 =  `./public/images/himanshu_image.jpeg` 
  const image2 =  `https://i.imgur.com/QrxYwym.png` 
  const image3 =  `https://imgur.com/8uJJZp6.png` 
  const image4 =  `https://i.imgur.com/1zKU2KD.jpeg` 

    const settings = {
      dots: true,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
    };
  
    const DummyDevelopers = [
      
      {
        id: "m2",
        img:"./images/himanshu_image.jpeg",
        name: "Himanshu Mishra",
        qual: "Software Sophomore",
        tech: "Front-End / Designer",
      },
      {
        id: "m3",
        img:"https://imgur.com/8uJJZp6.png",
        name: "Samridhi Kapoor",
        qual: "Software Sophomore",
        tech: "Machine Learning",
      },
      {
        id: "m5",
        img:"https://i.imgur.com/1zKU2KD.jpeg",
        name: "Om Prakash",
        qual: "Software Sophomore",
        tech: "Full Stack Developer",
      },
    ];
  return (
    <div className=' flex  z-30  ' >
      
        {DummyDevelopers.map((developer, index) => {
          return (
            <div className="  mb-12  mx-3 "key={index} >
              <DeveloperLandingCard
                id={developer.id}
                img={developer.img}
                name={developer.name}
                qual={developer.qual}
                tech={developer.tech}
                
              />
            </div>
          );
        })} 

    </div>
  )
}

export default ThisSlider;
