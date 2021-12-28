import React from 'react'
// import morse from '../public/images/wp5048666.png'
import Image from 'next/image';
import Logo from '../components/MyLogo';
import HomeArrow from '../components/HomeArrow';
function Header() {
    const check = ()=>{
    var msg = new SpeechSynthesisUtterance();
    msg.text = "This is how we translate the morse code. Translation of alphabets. For writing an A dot dash.  For writing B dash dot dot dot. For writing C dash dot dash dot. For writing D dash dot dot. For writing E dot. For writing F dot dot dash dot. For writing G dash dash dot. For writing H dot dot dot dot. For writing I dot dot. For writing J dot dash dash dash. For writing K dash dot dash. For writing L dot dash dot dot. For writing M dash dash. For writing N dash dot. For writing O dash dash dash. For writing P dot dash dash dot. For writing Q dash dash dot dash. For writing R dot dash dot. For writing S dot dot dot. For writing T dash. For writing U dot dot dash. For writing V dot dot dot dash. For writing W dot dash dash. For writing X dash dot dot dash. For writing Y dash dot dash dash. For writing Z dash dash dot dot. For writing one dot dash dash dash dash. For writing two dot dot dash dash dash. For writing three dot dot dot dash dash. For writing four dot dot dot dot dash. For writing five dot dot dot dot dot.For writing six dash dot dot dot dot. For writing seven dash dash dot dot dot. For writing eight dash dash dash dot dot. For writing nine dash dash dash dash dot. For writing zero dash dash dash dash dash.";
    
    var voices = window.speechSynthesis.getVoices();
    msg.voice = voices[0]; 
    msg.volume = 1; // From 0 to 1
    msg.rate = 1; // From 0.1 to 10
    msg.pitch = 2; // From 0 to 2

    window.speechSynthesis.speak(msg);
  }
    return (
        <>
        <button onClick={check}>CHECK ME PLS</button>
        <div  className='bodyBox shiftBox'>
            <div className="brand">
          <Logo/>
         
        </div>

        <div className='imageBox' >
             <Image src="/images/wp5048666.png" width={500} height={600} alt="Morse Code" />
        </div>
        <HomeArrow page="/developers"/>



        <style jsx>
            {
                `
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
                  .bodyBox{
                    width: 97vw;
                    height: 97vh;
                  }
                  .imageBox{
                      width: 401px;
                  }
                `
            }
        </style>
        </div>
        </>

       

        
    )
}

export default Header;
