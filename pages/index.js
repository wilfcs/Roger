import Head from "next/head";
import { useEffect, useRef, useState } from "react";
import styles from "../styles/Home.module.css";
import lottie from "lottie-web";
import Logo from "../components/MyLogo";
import HomeArrow from "../components/HomeArrow";

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
          res(val);
        } else if (parseInt(s) - parseInt(time) >= 1.5) {
          setVal(`${val} -`);
          const d = new Date();
          let s = d.getSeconds();
          setTime(s);
          res(val);
        } else {
          setVal(`${val}-`);
          const d = new Date();
          let s = d.getSeconds();
          setTime(s);
        }
      } else {
        // if (parseInt(s) - parseInt(time) >= 2.5) {
        //   setVal(`${val} /.`);
        //   const d = new Date();
        //   let s = d.getSeconds();
        //   setTime(s);
        //   res(val);
        // }
        if (parseInt(s) - parseInt(time) >= 1.5) {
          setVal(`${val} .`);
          const d = new Date();
          let s = d.getSeconds();
          setTime(s);
          res(val);
        } else {
          setVal(`${val}.`);
          const d = new Date();
          let s = d.getSeconds();
          setTime(s);
        }
      }
    }
  };
  // The end of Function

  // Resultant Function

  function decodeMorse(morseCode) {
    var ref = {
      ".-": "a",
      "-...": "b",
      "-.-.": "c",
      "-..": "d",
      ".": "e",
      "..-.": "f",
      "--.": "g",
      "....": "h",
      "..": "i",
      ".---": "j",
      "-.-": "k",
      ".-..": "l",
      "--": "m",
      "-.": "n",
      "---": "o",
      ".--.": "p",
      "--.-": "q",
      ".-.": "r",
      "...": "s",
      "-": "t",
      "..-": "u",
      "...-": "v",
      ".--": "w",
      "-..-": "x",
      "-.--": "y",
      "--..": "z",
      ".----": "1",
      "..---": "2",
      "...--": "3",
      "....-": "4",
      ".....": "5",
      "-....": "6",
      "--...": "7",
      "---..": "8",
      "----.": "9",
      "-----": "0",
    };

    return morseCode
      .split("   ")
      .map((a) =>
        a
          .split(" ")
          .map((b) => ref[b])
          .join("")
      )
      .join(" ");
  }

  const res = () => {
    setResultant(decodeMorse(val));
  };

  // Adding Effect
  const [firstLoad, setFirstLoad] = useState(1);
  const container = useRef(null);
  const container2 = useRef(null);
  const container3 = useRef(null);

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
      },
      {
        container: container3.current,
        renderer: "svg",
        loop: true,
        autoplay: true,
        animationData: require("../Json/page.json"),
      }
    );

    lottie.loadAnimation({
      container: container2.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: require("../Json/top.json"),
    });
    lottie.loadAnimation({
      container: container3.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: require("../Json/page.json"),
    });
  }, [firstLoad]);

  const check = () => {
    console.log("helllo g Hello");
    var msg = new SpeechSynthesisUtterance();
    msg.text =
      "Hello, I am Roger. Tap the button in the center to register a dot, hold the button for 1 second to register a dash. click the button on the bottom right to go to tutorials page. Thankyou hahahaha.";

    var voices = window.speechSynthesis.getVoices();
    msg.voice = voices[0];
    msg.volume = 1; // From 0 to 1
    msg.rate = 1; // From 0.1 to 10
    msg.pitch = 2; // From 0 to 2

    window.speechSynthesis.speak(msg);
  };



  // Audio Play
  const [firstPlay, setFirstPlay] = useState(1);

  useEffect(() => {
    setTimeout(() => {
    check();
      
    }, 2000);
    setFirstPlay(0);

  }, [firstPlay]);
  return (
    <>
      {/* <Head><link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
        <link href="https://fonts.googleapis.com/css2?family=Work+Sans:wght@800&display=swap" rel="stylesheet"/> </Head> */}

      {/* <div className={` ${styles.mishra} `}>sdjfl;kasdjflkjds</div> */}

      <span className="topJson " ref={container2}></span>
      <div className="content">
        <div className="brand">
          <Logo />
          <input
            type="text"
            className="showMorse"
            value={val}
            onChange={(e) => {
              setVal(e.target.val);
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

      <HomeArrow page="/learn" />

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
          .pageJson {
            width: 5rem;
            height: 50px;
            overflow: hidden;
          }
        `}
      </style>
      <p className="pageJson fixed bottom-10 right-10  w-28 h-32       "></p>
    </>
  );
}
