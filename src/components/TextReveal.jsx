import React, { useEffect, useRef } from "react";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

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
    "Tempor fugiat mollit excepteur tempor irure nostrud tempor et nostrud occaecat";

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
      <div className="spacing-small"></div>
      <div className="reveal">
        <div ref={triggerRef}>
          {text.split("").map((letter, index) => (
            <span className="reveal-text" key={index} ref={setlettersRef}>
              {letter}
            </span>
          ))}
        </div>
      </div>
    </>
  );
};

export default TextReveal;
