import React, { useEffect, useRef } from "react";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

const Offices = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    ScrollTrigger.create({
      trigger: videoRef.current,
      pin: true,
      start: "top-=300px",
      end: document.body.offsetHeight - window.innerHeight ,
  })
  }, []);
  return (
    <div className="offices-section">
      <div className="content-offices">
        <div className="text">
          <p>
            The head office of the company is located in{" "}
            <a className="city" href="https://arabica.coffee/en">
              Kyoto
            </a>.
          </p>
          <br />
          <p>
            <span className="view">Arabica</span> Coffee today is in every
            Coffee House in all metropolitan areas of the world.
          </p>
        </div>

        <video
          className="video-offices"
          ref={videoRef}
          src="/Kioto.mp4"
          loop
          autoPlay
          muted
        ></video>
      </div>
    </div>
  );
};

export default Offices;
