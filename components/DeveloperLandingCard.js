import Image from "next/image";

const DeveloperLandingCard = (props) => {
  return (
    <div className="cardBody">
      <div className="flex flex-row justify-center">
           <div className="divImg">
            <img className="img rounded-full" src={`${props.img}`} alt="logo" width={150} height={150} />
          </div>
      </div>
      <div>
        <div className="text-xl mt-6 font-bold flex items-center">{props.name} <div className="ml-3"><Image src="/Images/Frame.png" alt="logo" width={22} height={22} /></div></div>
        <div className="text-lg mt-4 font-normal">{props.qual}</div>
        <div className="text-lg mt-4 font-bold text-blue-600">{props.tech}</div>
      </div>
      <a href="/developers" className="button">
        <span className="pl-16 font-bold text-blue-600">Check Profile</span>
        <span className="arrow">
            <Image src="/Images/Arrow.png" alt="logo" width={15} height={15} />
        </span>
      </a>
      <style jsx>{`
        .cardBody{
          height: 450px;
          width: 350px;
          background:  #FFFFFF;
          box-shadow: -20px -20px 50px #F3F3F3, 20px 20px 50px #D2D2D2;
          border-radius: 43px;
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
          background: #F3F3F3;
          box-shadow: -18px 18px 30px rgba(243, 243, 243, 0.2), 18px -18px 30px rgba(243, 243, 243, 0.2), -18px -18px 30px rgba(243, 243, 243, 0.9), 18px 18px 30px rgba(209, 217, 230, 0.9), inset 1px 1px 2px rgba(255, 255, 255, 0.3), inset -1px -1px 2px rgba(243, 243, 243, 0.5);
          border-radius: 50%;
        }
        
        .button{
          width: 250px;
          height: 55px;
          margin-top: 20px;
          background: #F9F9F9;
          box-shadow: -10px -10px 20px #F3F3F3, 10px 10px 20px rgba(0, 0, 0, 0.08);
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
          background: #F9F9F9;
          box-shadow: inset -10px -10px 20px #FFFFFF, inset 10px 10px 20px rgba(0, 0, 0, 0.08);
          border-radius: 42.5px;
        }
    `}</style>
    </div>
  );
};

export default DeveloperLandingCard;
