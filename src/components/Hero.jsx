import { useEffect, useRef } from "react";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { Bebas_Neue, Dancing_Script } from "next/font/google";

const bebas = Bebas_Neue({ subsets: ["latin"], weight: ["400"] });
const dancingScript = Dancing_Script({ subsets: ["latin"], weight: ["400"] });

const Hero = () => {
  gsap.registerPlugin(ScrollTrigger);

  const videoRef = useRef(null);
  const textRef = useRef(null);
  const triggerRef = useRef(null);

  useEffect(() => {
    gsap.timeline({
      scrollTrigger: {
        trigger: triggerRef.current,
        scrub: true,
        start: "top center",
        end: "bottom top",
      },
    });
  }, []);
  return (
    <>
      <header className="hero__header">
        <div ref={triggerRef} className="video-section">
          <video ref={videoRef} src="/coffee_3.webm" loop autoPlay muted />
          <div className="video-copy">
            <h1 ref={textRef} className={bebas.className}>
              <span className="view">Arabica</span>
            </h1>
          </div>
          <h2 ref={textRef} className={dancingScript.className}>
            start the day <br />
            <span ref={textRef} className={bebas.className}>
              with
            </span>
          </h2>
        </div>
        <svg
          className="wave__header"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
        >
          <defs>
            <linearGradient id="grad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#4e4e51" stopOpacity="0.1" />
              <stop offset="100%" stopColor="#282829" stopOpacity="1" />
            </linearGradient>
          </defs>
          <path
            d="M0,192L40,197.3C80,203,160,213,240,218.7C320,224,400,224,480,218.7C560,213,640,203,720,192C800,181,880,171,960,149.3C1040,128,1120,96,1200,74.7C1280,53,1360,43,1400,37.3L1440,32L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"
            fill="url(#grad)"
          ></path>
        </svg>
      </header>
    </>
  );
};

export default Hero;
