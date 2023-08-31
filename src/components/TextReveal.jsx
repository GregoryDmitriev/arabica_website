import React, { useEffect, useRef } from "react";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Image from "next/image";

const TextReveal = () => {
  const useArrayRef = () => {
    const lettersRef = useRef([]);
    lettersRef.current = [];
    return [lettersRef, (ref) => ref && lettersRef.current.push(ref)];
  };

  const [lettersRef, setlettersRef] = useArrayRef();
  const triggerRef = useRef(null);

  gsap.registerPlugin(ScrollTrigger);
  const text =
    "Arabica coffee remains one of the most popular and widespread types of coffee beans in the world.";

  useEffect(() => {
    const anim = gsap.to(lettersRef.current, {
      scrollTrigger: {
        trigger: triggerRef.current,
        scrub: true,
        start: "top center",
        end: "bottom 85%",
      },
      color: "#e6e6e6",
      duration: 5,
      stagger: 1,
    });
    return () => {
      anim.kill();
    };
  }, [lettersRef]);

  return (
    <>
      <div className="reveal">
        {/* <svg
          className="wave__reveal"
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
        </svg> */}
        {/* <Image src={'/images/coffee-beans.webp'} width={300} height={600} alt="Beans"></Image> */}
        <div className="reveal-inner">
          <div className="box-earth">
            <div className="earth">
              {/* <div
                className="box-earth__c"
                style={{ display: "flex", justifyContent: "center" }}
              >
                <div className="earth__c">
                  <Image
                    src="/images/earth.svg"
                    width={800}
                    height={800}
                    alt="Earth"
                    sizes="auto"
                  />
                </div>
                <div className="earth__element"></div>
              </div> */}
            </div>
          </div>

          <div ref={triggerRef}>
            {text.split("").map((letter, index) => (
              <span className="reveal-text" key={index} ref={setlettersRef}>
                {letter}
              </span>
            ))}
          </div>
        </div>
        <svg
          className="wave__reveal-bottom"
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
        
      </div>
    </>
  );
};

export default TextReveal;
