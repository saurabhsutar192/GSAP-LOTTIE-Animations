import { gsap } from "gsap";
import "./App.scss";
import { useEffect, useRef } from "react";
import flashToBar from "./LottieJSON/flashToBar.json";
import Lottie from "lottie-react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { progressToFramesConverter } from "./utils/helper";

function App() {
  const lottieRef = useRef();

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    ScrollTrigger.create({
      trigger: ".svg-container",
      start: "top top",
      markers: true,
      // endTrigger: "#otherID",
      end: "50% 50%",
      scrub: 2,
      // onToggle: () => lottieRef.current.play(),
      onUpdate: (self) => {
        lottieRef.current.goToAndStop(
          progressToFramesConverter(self.progress, 151),
          true
        );
      },
    });
  }, []);

  return (
    <div className="svg-container" style={{ marginTop: "100px" }}>
      <Lottie
        style={{ position: "sticky", top: "30px" }}
        animationData={flashToBar}
        autoplay={false}
        loop={false}
        lottieRef={lottieRef}
      />
      <h1>LOTTIE</h1>
    </div>
  );
}

export default App;
