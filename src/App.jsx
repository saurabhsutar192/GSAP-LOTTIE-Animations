import { gsap } from "gsap";
import "./App.scss";
import { useEffect } from "react";
import { FlashDart } from "./components/FlashDart/FlashDart";
import { BarGraph } from "./components/BarGraph/BarGraph";
import flashToBar from "./LottieJSON/flashToBar.json";
import Lottie from "lottie-react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

function App() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const circle1 = document.getElementById("backPink");
    const circle2 = document.getElementById("centerViolet");
    const circle3 = document.getElementById("topPink");

    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: ".flash-container",
        markers: true,
        // pin: true, // pin the trigger element while active
        start: "top 30%", // when the top of the trigger hits the top of the viewport
        end: "bottom 50%", // end after scrolling 500px beyond the start
        scrub: 1, // smooth scrubbing, takes 1 second to "catch up" to the scrollbar
        // snap: {
        //   snapTo: "labels", // snap to the closest label in the timeline
        //   duration: { min: 0.2, max: 3 }, // the snap animation should be at least 0.2 seconds, but no more than 3 seconds (determined by velocity)
        //   delay: 0.2, // wait 0.2 seconds from the last scroll event before doing the snapping
        //   ease: "power1.inOut", // the ease of the snap animation ("power3" by default)
        // },
      },
    });
    timeline
      .to(
        ".flash",
        { x: -150, y: 50, scale: 0, duration: 1, ease: "power1.in" },
        0.5
      )
      .fromTo(
        circle1,
        { strokeDashoffset: 0 },
        {
          strokeDashoffset: -566,
          strokeWidth: 54,
          duration: 1.3,
          delay: 0.5,
          ease: "power1.in",
        },
        "<"
      )

      .fromTo(
        circle2,
        { strokeDashoffset: 0 },
        {
          strokeDashoffset: -314,
          strokeWidth: 54,
          duration: 1,
          ease: "power1.in",
        },
        "<0.2"
      )
      .fromTo(
        circle3,
        { strokeDashoffset: 0 },
        {
          strokeDashoffset: -95,
          stroke: "#F6E393",
          duration: 1,
          ease: "power1.in",
        },
        "<0.4"
      )
      .fromTo(
        "#circle-violet-center",
        { x: "-50%", y: "-50%" },
        {
          x: -93,
          y: 30,
        },
        "<"
      )
      .fromTo(
        "#circle-pink-outer",
        { x: 0, y: 0 },
        {
          x: 90,
          y: 110,
        },
        "<0.1"
      )

      .fromTo(
        "#circle-pink-inner",
        { x: "-50%", y: "-50%" },
        {
          x: 48,
          y: 70,
          scale: 1.7,
        },
        "<0.2"
      )
      .fromTo("#bar-left-violet", { scaleY: 0 }, { scaleY: 1 }, "<0.4")
      .fromTo("#bar-center-pink", { scaleY: 0 }, { scaleY: 1 }, "<0.1")
      .fromTo("#bar-right-yellow", { scaleY: 0 }, { scaleY: 1 }, "<0.2");
  }, []);

  const interactivity = {
    mode: "scroll",
    actions: [
      {
        visibility: [0.45, 0.8],
        type: "seek",
        frames: [0, 302],
      },
    ],
  };

  // const styles = {
  //   position: "sticky",
  //   top: "50vh",
  // };

  return (
    <div className="svg-container" style={{ marginTop: "300px" }}>
      {/* <div className="diamond-container">
        <svg
          width="177"
          height="282"
          viewBox="0 0 177 282"
          fill="none"
          className="center-yellow"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path id="triangle" d={p1} fill="#F6E393" />
        </svg>

        <img src={diamondYellow} className="back-violet" />
        <img src={diamondPink} className="top-pink" />
      </div> */}
      <FlashDart />
      <BarGraph />

      <Lottie
        animationData={flashToBar}
        // loop={true}
        interactivity={interactivity}
      />
    </div>
  );
}

export default App;