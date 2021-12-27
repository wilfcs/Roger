import Head from 'next/head'
import { useEffect, useRef, useState } from 'react';
import styles from '../styles/Home.module.css'
import lottie from 'lottie-web'



export default function Home() {
    function play() {
    var audio = document.getElementById('a1');
    audio.play();
    }

    // Fucntion for updating Input Values
    const [val, setVal] = useState(".");
    const [time, setTime] = useState("0");
    

    let startClick =  0;
    const click =  (e)=>{
      const d = new Date();
      let s = (d.getSeconds()); 
      if( parseInt(s)- parseInt(time) >2){
          setVal(`${val} / `)
          setTime(s);
  
      }
        if(e.type == "mousedown"){
          startClick = e.timeStamp;
        }
        else if(e.type == "mouseup" && startClick > 0){
          if(e.timeStamp - startClick > 500){  // 0.5 secound
              setVal(`${val} -`)
              const d = new Date();
              let s = (d.getSeconds()); 
              setTime(s);
          }
          else{
            const d = new Date();

            let s = (d.getSeconds()); 
              setTime(s);
              setVal(`${val} .`)
  
          }
        }
  
      
    }
    // The end of Function 


    // Adding Effect
    const container =  useRef(null);
    const container2 =  useRef(null);

    useEffect(() => {
    
        lottie.loadAnimation({
            container: container.current,
            renderer:'svg',
            loop:true,
            autoplay:true,
            animationData: require('../Json/bottom.json')
        },
        {
          container: container2.current,
          renderer:'svg',
          loop:true,
          autoplay:true,
          animationData: require('../Json/top.json')
      },
        )

        lottie.loadAnimation(
          {
            container: container2.current,
            renderer: "svg",
            loop: true,
            autoplay: true,
            animationData: require("../Json/top.json"),
          }
        );
      })
      
  return (
      <>
      {/* <Head><link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
        <link href="https://fonts.googleapis.com/css2?family=Work+Sans:wght@800&display=swap" rel="stylesheet"/> </Head> */}


        {/* <div className={` ${styles.mishra} `}>sdjfl;kasdjflkjds</div> */}

        <div className={styles.topJson}  ref={container2} >

            </div>


        <div className={styles.content}>
          <div className={styles.brand}>
            <div className={styles.logo}></div>
            <div className={styles.brandName}>Roger</div>
            
            <input type="text" className={styles.showMorse} value={val} />
            <input type="text" className={styles.showText}   />
          </div>

        <div className={styles.body}>
          {/* <button className={` ${styles.logo} ${styles.convex}` }></button> */}
          <div className={styles.bigButton} id='bigButton' onMouseDown={click} onMouseUp={click}></div>
          <audio id='a1'>
          <source src='/sound/bottonpress.wav' type='audio/mpeg' />
          Your browser does not support the audio element.
        </audio>
        </div>
        <div className={styles.bottomJson}  ref={container} >

            </div>
        
        </div>
        

      </>
  )
  }
