import { useEffect } from "react";
import { gsap } from "gsap";

const Cursor = () => {
  useEffect(() => {
    const cursor = document.getElementById("custom-cursor");
    const spans = document.querySelectorAll("span");

    gsap.set(cursor, { scale: 1, cursor: "auto" });

    const onMouseMove = (event) => {
      const { clientX, clientY } = event;
      gsap.to(cursor, { x: clientX, y: clientY });
    };

    const onMouseEnterLink = (event) => {
      const span = event.target;
      if (span.classList.contains("view")) {
        gsap.to(cursor, { scale: 4 });
      } else {
        gsap.to(cursor, { scale: 4 });
      }
    };

    const onMouseLeaveLink = () => {
      gsap.to(cursor, { scale: 1 });
    };

    document.addEventListener("mousemove", onMouseMove);
    spans.forEach((span) => {
      span.addEventListener("mouseenter", onMouseEnterLink);
      span.addEventListener("mouseleave", onMouseLeaveLink);
    });
  }, []);

  return (
    <>
      <div id="custom-cursor" className="custom-cursor"></div>
    </>
  );
};

export default Cursor;
