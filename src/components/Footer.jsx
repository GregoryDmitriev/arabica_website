import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <span className="view">
          <div className="footer-text">
            <svg viewBox="0 0 210 60">
              <text x="10" y="45">
                Enter
              </text>
            </svg>
          </div>
          <div className="footer-text">
            <svg viewBox="0 0 210 60">
              <text x="10" y="45">
                the world
              </text>
            </svg>
          </div>
          <div className="footer-text">
            <svg viewBox="0 0 210 60">
              <text x="10" y="45">
                of
              </text>
            </svg>
          </div>
          <div className="footer-text">
            <svg viewBox="0 0 210 60">
              <text x="10" y="45">
                Arabica
              </text>
            </svg>
          </div>
        </span>
      </div>

      <p className="copyright">
        © Copyright 2023
        <span className="view"> Arabica Coffee</span>
      </p>
    </div>
  );
};

export default Footer;
