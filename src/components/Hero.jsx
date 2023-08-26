import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { Bebas_Neue,Dancing_Script } from "next/font/google";

const bebas = Bebas_Neue({ subsets: ["latin"], weight: ["400"] });
const dancingScript = Dancing_Script({ subsets: ["latin"], weight: ["400"] });

const Hero = () => {
  gsap.registerPlugin(ScrollTrigger);

  const videoRef = useRef(null);
  const textRef = useRef(null);
  const triggerRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: triggerRef.current,
        scrub: true,
        start: "top center",
        end: "bottom top",
      },
    });
  }, []);
  return (
    <header className="hero__header">
      <div ref={triggerRef} className="video-section">
        <video ref={videoRef} src="/coffee_3.mp4" loop autoPlay muted></video>
        <div className="video-copy">
          <h1 ref={textRef} className={bebas.className}>
          Arabica
          </h1>
        </div>
        <h2 ref={textRef} className={dancingScript.className}>
          start the day <br/>
          <span ref={textRef} className={bebas.className}>
            with
          </span>
        </h2>
      </div>
    </header>
  );
};

export default Hero;
