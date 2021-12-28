import { Input } from "postcss";
import React, { useEffect, useState } from "react";

const check = () => {
  // listen for long-press events
  const thisFun = () => {
    document.addEventListener("long-press", function (e) {
      e.target.setAttribute("data-editing", "true");
    });

    /*!
     * long-press.js
     * Pure JavaScript long-press event
     * https://github.com/john-doherty/long-press
     * @author John Doherty <www.johndoherty.info>
     * @license MIT
     */
    !(function (t, e) {
      "use strict";

      function n() {
        this.dispatchEvent(
          new CustomEvent("long-press", {
            bubbles: !0,
            cancelable: !0,
          })
        ),
          clearTimeout(o),
          console &&
            console.log &&
            console.log("long-press fired on " + this.outerHTML);
      }
      var o = null,
        u =
          "ontouchStart" in t ||
          navigator.MaxTouchPoints > 0 ||
          navigator.msMaxTouchPoints > 0,
        s = u ? "touchStart" : "mousedown",
        i = u ? "touchcancel" : "mouseout",
        a = u ? "touchend" : "mouseup",
        c = u ? "touchmove" : "mousemove";
      "initCustomEvent" in e.createEvent("CustomEvent") &&
        ((t.CustomEvent = function (t, n) {
          n = n || {
            bubbles: !1,
            cancelable: !1,
            detail: void 0,
          };
          var o = e.createEvent("CustomEvent");
          return o.initCustomEvent(t, n.bubbles, n.cancelable, n.detail), o;
        }),
        (t.CustomEvent.prototype = t.Event.prototype)),
        e.addEventListener(s, function (t) {
          var e = t.target,
            u = parseInt(e.getAttribute("data-long-press-delay") || "7000", 10);
          o = setTimeout(n.bind(e), u);
        }),
        e.addEventListener(a, function (t) {
          clearTimeout(o);
        }),
        e.addEventListener(i, function (t) {
          clearTimeout(o);
        }),
        e.addEventListener(c, function (t) {
          clearTimeout(o);
        });
    })(this, document);
  };
  const [val, setVal] = useState(".");
  const [time, setTime] = useState("0");

  const [x, setX] = useState(1);



  let startClick = 0;  

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
            setVal(`${val} .`)

        }
      }

    
  }
  useEffect(() => {
    
  }, [x]);

  return (
    <div>
      <div class="dock-item" data-long-press-delay="500" id="check"  onMouseDown={click} onMouseUp={click} >
        Press and hold me for .5s
      </div>
      <div class="dock-item">Press and hold me for 1.5s</div>
      <div class="dock-item" data-long-press-delay="5000">
        Press and hold me for 5s
      </div>

      <input type="text" value={val} onChange={(e)=>setVal(e.target.val)} id="lname" name="lname"/>
      <br/>
      <input type="text" value={time} id="lname" name="lname"/>

    </div>
  );
};

export default check;
