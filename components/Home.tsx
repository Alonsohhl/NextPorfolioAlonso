
"use client";
import { useState, useEffect, ReactNode } from "react";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
// Images
import postImg from "@/assets/images/home/home_alonso.jpg";
import img02B from "@/assets/images/home/home_02B.jpg";
import img04 from "@/assets/images/home/home_04.jpg";
import closeIcon from "@/assets/images/close.png";

function Home({ children }: { children: ReactNode }) {
  const [openPortfolio, setOpenPortfolio] = useState<number>(0);

  /**
   * Closed the opened items by reseting the {openPortfolio} variable to 0
   */
  const handleClosePopup = () => {
    setOpenPortfolio(0);
  };

  useEffect(() => {
    const container = document.getElementById('page-background');
    const sections = document.querySelectorAll('.site-content');
    const containerWidth = container?.clientWidth;
  }, []);

  useEffect(() => {
    // Register the plugin
    gsap.registerPlugin(ScrollTrigger);
    let sections = gsap.utils.toArray("section");
    const element = document.querySelector(".horizontal-container") as HTMLElement;
    gsap.to(sections, {
      xPercent: -100 * (sections.length - 1),
      ease: "none",
      scrollTrigger: {
        trigger: ".horizontal-container",
        pin: true,
        // pinSpacing: false,
        scrub: 1,
        snap: 1 / (sections.length - 1),
        end: () => "+=" + element.offsetWidth
      }
    });

    // Cleanup function
    return () => {
      if (ScrollTrigger) {
        ScrollTrigger.getAll().forEach(trigger => trigger.kill());
      }
    };

  }, []); // Empty dependency array ensures this runs once on mount


  return (
    <>
      {children}
      <Popup
        open={openPortfolio !== 0}
        closeOnDocumentClick
        onClose={handleClosePopup}
        modal
      >
        <div className="my-popup">
          <div
            className="close-popup-btn"
            role="button"
            onClick={handleClosePopup}
          >
            <img src={closeIcon.src} alt="close icon" />
          </div>
          {openPortfolio === 1 ? (
            <div className="popup-image-box">
              <img src={img02B.src} alt="portfolio image" />
            </div>
          ) : openPortfolio === 2 ? (
            <p className="video-framer poped-up-item" onClick={close}>
              <iframe
                src="https://player.vimeo.com/video/199192931"
                width="100%"
                allow="autoplay; fullscreen"
              ></iframe>
            </p>
          ) : openPortfolio === 3 ? (
            <div className="popup-image-box">
              <img src={img04.src} alt="portfolio image" />
            </div>
          ) : openPortfolio === 4 ? (
            <p className="video-framer poped-up-item" onClick={close}>
              <iframe
                src="https://player.vimeo.com/video/199192931"
                width="100%"
                allow="autoplay; fullscreen"
              ></iframe>
            </p>
          ) : (
            <></>
          )}
        </div>
      </Popup>
    </>
  );
}

export default Home;
