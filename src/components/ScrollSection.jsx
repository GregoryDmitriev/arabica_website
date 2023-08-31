import React, { useRef, useEffect } from "react";

import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

function ScrollSection() {
  const sectionRef = useRef(null);
  const triggerRef = useRef(null);

  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    const pin = gsap.fromTo(
      sectionRef.current,
      {
        translateX: 0,
      },
      {
        translateX: "-300vw",
        ease: "none",
        duration: 1,
        scrollTrigger: {
          trigger: triggerRef.current,
          start: "top top",
          end: "2000 top",
          scrub: 0.6,
          pin: true,
        },
      }
    );
    return () => {
      pin.kill();
    };
  }, []);

  return (
    <section className="scroll-section-outer">
      <div ref={triggerRef}>
        <div ref={sectionRef} className="scroll-section-inner">
          <div className="scroll-section">
            <div className="scroll-section-text">
              <h3>Origin</h3>
              <p>
                <span>Arabica</span> coffee was first discovered in the Ethiopia region of Africa. According to legend, a shepherd named <span>Kaldi </span>saw his goats become more alert after eating berries from a coffee bush. This became the starting point for the study and use of coffee beans.
              </p>
            </div>
            <video src="/herdsman.mp4" loop autoPlay muted></video>
          </div>
          <div className="scroll-section">
            <div className="scroll-section-text">
              <h3>Distribution centers</h3>
              <p>
                <span>Arabica</span> coffee was first grown in Arabia, and then
                it began to be grown in other regions, such as Egypt, Yemen and
                Turkey. In Yemen, for example, the first coffee plantations
                arose.
              </p>
            </div>
            <Image
              className="image"
              src="/images/origin.webp"
              width={500}
              height={500}
              alt="Origin"
              sizes="auto"
            />
          </div>
          <div className="scroll-section">
            <div className="scroll-section-text">
              <h3>Spread to Europe and the world</h3>
              <p>
                In the <span>17th</span> century, Europeans began to actively
                trade coffee and eventually grow it in tropical colonies. Coffee has become a popular drink in many parts of the world, and coffeehouses have become centers of social life.
              </p>
            </div>
          </div>

          <div className="scroll-section">
            <div className="scroll-section-text">
              <h3>Variety development</h3>
              <p>
                Over time, many varieties of <span>Arabica</span> coffee have
                been created, each with unique flavor characteristics depending
                on the growing conditions.
              </p>
            </div>
            <video src="/coffee_2.mp4" loop autoPlay muted></video>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ScrollSection;
