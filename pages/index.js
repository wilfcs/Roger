import Head from "next/head";
import { useEffect, useRef, useState } from "react";
import styles from "../styles/Home.module.css";
import lottie from "lottie-web";

export default function Home() {
  function play() {
    var audio = document.getElementById("a1");
    audio.play();
  }

  // Fucntion for updating Input Values
  const [resultant, setResultant] = useState("");
  const [val, setVal] = useState("");
  const [time, setTime] = useState("60");

  let startClick = 0;
  // Click Function
  const click = (e) => {
    const d = new Date();
    let s = d.getSeconds();

    if (e.type == "mousedown") {
      startClick = e.timeStamp;
    } else if (e.type == "mouseup" && startClick > 0) {
      if (e.timeStamp - startClick > 500) {
        if (parseInt(s) - parseInt(time) >= 2.5) {
          setVal(`${val} /-`);
          const d = new Date();
          let s = d.getSeconds();
          setTime(s);
        } else if (parseInt(s) - parseInt(time) >= 1.5) {
          setVal(`${val} -`);
          const d = new Date();
          let s = d.getSeconds();
          setTime(s);
        } else {
          setVal(`${val}-`);
          const d = new Date();
          let s = d.getSeconds();
          setTime(s);
        }
      } else {
        if (parseInt(s) - parseInt(time) >= 2.5) {
          setVal(`${val} /.`);
          const d = new Date();
          let s = d.getSeconds();
          setTime(s);
        } else if (parseInt(s) - parseInt(time) >= 1.5) {
          setVal(`${val} .`);
          const d = new Date();
          let s = d.getSeconds();
          setTime(s);
        } else {
          setVal(`${val}.`);
          const d = new Date();
          let s = d.getSeconds();
          setTime(s);
        }
      }
    }
    resultHandler();
  };
  // The end of Function

  // Resultant Function
  const resultHandler = () => {
    var str = "";
    let count = 0;
    setResultant("");

    for (let i = 0; i < val.length; i++) {
      if (val[i] != " ") {
        if (val[i] == ".") {
          str += "0";
        } else if (val[i] == "-") {
          str += "1";
        }
      } else {
        if (str == " ") {
          setResultant(`${resultant}${str}`);
        }
        if(str == "01"){
          setResultant(`${resultant}a`);
        }
        else if(str == "1000"){
          setResultant(`${resultant}b`);
        }
        else if(str == "1010"){
          setResultant(`${resultant}c`);
        }else if(str == "100"){
          setResultant(`${resultant}d`);
        }else if(str == "0"){
          setResultant(`${resultant}e`);
        }else if(str == "0010"){
          setResultant(`${resultant}f`);
        }else if(str == "110"){
          setResultant(`${resultant}g`);
        }else if(str == "0000"){
          setResultant(`${resultant}h`);
        }else if(str == "00"){
          setResultant(`${resultant}i`);
        }else if(str == "0111"){
          setResultant(`${resultant}j`);
        }else if(str == "101"){
          setResultant(`${resultant}k`);
        }else if(str == "0100"){
          setResultant(`${resultant}l`);
        }else if(str == "11"){
          setResultant(`${resultant}m`);
        }
        else if(str == "10"){
          setResultant(`${resultant}n`);
        }else if(str == "111"){
          setResultant(`${resultant}o`);
        }else if(str == "0110"){
          setResultant(`${resultant}p`);
        }else if(str == "1101"){
          setResultant(`${resultant}q`);
        }else if(str == "010"){
          setResultant(`${resultant}r`);
        }else if(str == "000"){
          setResultant(`${resultant}s`);
        }else if(str == "1"){
          setResultant(`${resultant}t`);
        }else if(str == "001"){
          setResultant(`${resultant}u`);
        }else if(str == "0001"){
          setResultant(`${resultant}v`);
        }else if(str == "011"){
          setResultant(`${resultant}w`);
        }else if(str == "1001"){
          setResultant(`${resultant}x`);
        }else if(str == "1011"){
          setResultant(`${resultant}y`);
        }else if(str == "1100"){
          setResultant(`${resultant}z`);
        }

        else if(str == "0111"){
          setResultant(`${resultant}1`);
        }else if(str == "00111"){
          setResultant(`${resultant}2`);
        }else if(str == "00011"){
          setResultant(`${resultant}3`);
        }else if(str == "00001"){
          setResultant(`${resultant}4`);
        }else if(str == "00000"){
          setResultant(`${resultant}5`);
        }else if(str == "10000"){
          setResultant(`${resultant}6`);
        }else if(str == "11000"){
          setResultant(`${resultant}7`);
        }else if(str == "11100"){
          setResultant(`${resultant}8`);
        }else if(str == "11110"){
          setResultant(`${resultant}9`);
        }else if(str == "11111"){
          setResultant(`${resultant}0`);
        }
        str = "";
      }
    }

  };

  // Adding Effect
  const [firstLoad, setFirstLoad] = useState(1);
  const container = useRef(null);
  const container2 = useRef(null);

  useEffect(() => {
    setFirstLoad(0);

    lottie.loadAnimation(
      {
        container: container.current,
        renderer: "svg",
        loop: true,
        autoplay: true,
        animationData: require("../Json/bottom.json"),
      },
      {
        container: container2.current,
        renderer: "svg",
        loop: true,
        autoplay: true,
        animationData: require("../Json/top.json"),
      }
    );

    lottie.loadAnimation({
      container: container2.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: require("../Json/top.json"),
    });
  }, [firstLoad]);

  return (
    <>
      {/* <Head><link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
        <link href="https://fonts.googleapis.com/css2?family=Work+Sans:wght@800&display=swap" rel="stylesheet"/> </Head> */}

      {/* <div className={` ${styles.mishra} `}>sdjfl;kasdjflkjds</div> */}
      <span className="topJson" ref={container2}></span>
      <div className="content">
        <div className="brand">
          <div className="logo"></div>
          <div className="brandName">Roger</div>

          <input
            type="text"
            className="showMorse"
            value={val}
            onChange={(e) => {
              setVal(e.target.val);
              resultHandler();
            }}
          />
          <input type="text" className="showText" value={resultant} />
        </div>

        <div className="body">
          <div
            className="bigButton"
            id="bigButton"
            onMouseDown={click}
            onMouseUp={click}
          ></div>
          <audio id="a1">
            <source src="/sound/bottonpress.wav" type="audio/mpeg" />
            Your browser does not support the audio element.
          </audio>
        </div>
      </div>
      <span className="bottomJson" ref={container}></span>

      <style jsx>
        {`
          input:focus {
            border: none;
            overflow: auto;
            outline: none;
          }

          .content {
            height: 100vh;
            width: 100vw;
            background-color: #c4c4cd;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .body {
            display: flex;
            justify-content: center;
            align-items: center;
            background-color: #c4c4cd;
            z-index: 999;
          }
          .bigButton {
            box-shadow: 12px 12px 24px 0 rgba(0, 0, 0, 0.2),
              -12px -12px 24px 0 rgba(255, 255, 255, 0.5);
            font-size: 5rem;
            width: 200px;
            height: 200px;
            border-radius: 40px;
            overflow: hidden;
            padding: 1.3rem;
            display: flex;
            justify-content: space-around;
            align-items: center;

            border: none;
            cursor: pointer;
            border-radius: 400px;
            height: 500px;
            width: 500px;
          }
          .bigButton:active {
            box-shadow: inset 6px 6px 10px 0 rgba(0, 0, 0, 0.2),
              inset -6px -6px 10px 0 rgba(255, 255, 255, 0.5);
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

          .showMorse {
            box-shadow: 12px 12px 24px 0 rgba(0, 0, 0, 0.2),
              -12px -12px 24px 0 rgba(255, 255, 255, 0.5);
            width: 250px;
            height: 30px;
            border-radius: 40px;
            overflow: hidden;
            display: flex;
            justify-content: space-around;
            align-items: center;

            border: none;

            box-shadow: inset 6px 6px 10px 0 rgba(0, 0, 0, 0.2),
              inset -6px -6px 10px 0 rgba(255, 255, 255, 0.5);
            background-color: #c4c4cd;

            padding: 0 1rem;
            position: relative;
            top: -51px;
            left: 70vw;
          }

          .showText {
            box-shadow: 12px 12px 24px 0 rgba(0, 0, 0, 0.2),
              -12px -12px 24px 0 rgba(255, 255, 255, 0.5);
            width: 250px;
            height: 30px;
            border-radius: 40px;
            overflow: hidden;
            display: flex;
            justify-content: space-around;
            align-items: center;

            border: none;

            box-shadow: inset 6px 6px 10px 0 rgba(0, 0, 0, 0.2),
              inset -6px -6px 10px 0 rgba(255, 255, 255, 0.5);
            background-color: #c4c4cd;

            padding: 0 1rem;
            position: relative;
            top: -42px;
            left: 70vw;
          }
          .bottomJson {
            position: fixed;
            left: 0;
            bottom: 0;
            height: 300px;
            width: 33rem;
          }

          .topJson {
            position: fixed;
            right: 0;
            top: 0;
            width: 33rem;
            height: 300px;
            overflow: hidden;
          }
        `}
      </style>
    </>
  );
}
