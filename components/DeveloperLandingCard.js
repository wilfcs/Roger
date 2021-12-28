import Image from "next/image";
import lottie from "lottie-web";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";


const DeveloperLandingCard = (props) => {

  const [firstLoad, setFirstLoad] = useState(1);

  const container = useRef(null); 

  useEffect(() => {

    lottie.loadAnimation(
      {
        container: container.current,
        renderer: "svg",
        loop: true,
        autoplay: true,
        animationData: require("../Json/arrow.json"),
      }
    );
  });


  return (
    <div className="cardBody ">
      <div className="flex flex-row justify-center">
           <div className="divImg">
            <img className="img rounded-full" src={`${props.img}`} alt="logo" width={150} height={150} />
          </div>
      </div>
      <div>
        <div className="text-xl mt-6 font-bold flex items-center">{props.name} <div className="ml-3">
          {/* <Image src="/Images/Frame.png" alt="logo" width={22} height={22} /> */}
          </div></div>
        <div className="text-lg mt-4 font-normal">{props.qual}</div>
        <div className="text-lg mt-4 font-bold text-blue-600">{props.tech}</div>
      </div>
      {/* <Link href="/developers" className="button"> */}
        <span className="pl-16 font-bold text-blue-600">Check Profile</span>
        <span className="arrow p-1" ref={container}  >
            
        </span>
      {/* </Link> */}
      <style jsx>{`
        .cardBody{
          height: 424px;
          width: 300px;
          background-color: #c4c4cd;
          box-shadow: 12px 12px 24px 0 rgba(0, 0, 0, 0.2),
              -12px -12px 24px 0 rgba(255, 255, 255, 0.5);
          border-radius: 30px;
          margin: 40px ;
          display: flex;
          flex-direction: column;
          padding: 20px 40px;
        }
        
        .divImg{
          display: flex;
          justify-content: center;
          align-items: center;
          width: 180px;
          height: 180px;
          background-color: #c4c4cd;

          box-shadow: 12px 12px 24px 0 rgba(0, 0, 0, 0.2),
              -12px -12px 24px 0 rgba(255, 255, 255, 0.5);
          border-radius: 50%;
        }
        
        .button{
          width: 250px;
          height: 55px;
          margin-top: 20px;
          background-color: #c4c4cd;

          box-shadow: 12px 12px 24px 0 rgba(0, 0, 0, 0.2),
              -12px -12px 24px 0 rgba(255, 255, 255, 0.5);
          border-radius: 42.5px;
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          align-items: center;
        }
        
        .arrow{
          width: 55px;
          height: 55px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: #c4c4cd;
          box-shadow: inset 6px 6px 10px 0 rgba(0, 0, 0, 0.2),
              inset -6px -6px 10px 0 rgba(255, 255, 255, 0.5);
          border-radius: 50%;
        }
    `}</style>
    </div>
  );
};

export default DeveloperLandingCard;
