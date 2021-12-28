import React, { useState } from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import DeveloperLandingCard from './DeveloperLandingCard'
import Image from 'next/image';

const ThisSlider = () => {
  const image1 =  `https://i.imgur.com/k7o3oFU.png` 
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
        img:"https://i.imgur.com/QrxYwym.png",
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
    <div className='bg-red-200' >
      <Slider
        {...settings}
        customPaging={(i) => {
          return (
            <div  >
              <Image
                src={eval(`image${i+1}`)}
                width="100%"
                height="100%"
                objectFit="cover"
              />
            </div>
          );
        }}
        dotsClass="slick-dots mydot"
      >
        {DummyDevelopers.map((developer) => {
          return (
            <div className="  mb-12  mx-3 " >
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
      </Slider>  

    </div>
  )
}

export default ThisSlider;
