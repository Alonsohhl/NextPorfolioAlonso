"use client";
import { useState, useEffect } from "react";

// Plugins
import { motion } from "framer-motion";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import Link from "next/link";

// Images
import postImg from "@/assets/images/home/home_alonso.jpg";


import img01 from "@/assets/images/home/home_01.jpg";
import img02 from "@/assets/images/home/home_02.jpg";
import img02B from "@/assets/images/home/home_02B.jpg";
import img03 from "@/assets/images/home/home_03.jpg";
import img04 from "@/assets/images/home/home_04.jpg";
import img05 from "@/assets/images/home/home_05.jpg";
import img06 from "@/assets/images/home/home_06.jpg";
import img07 from "@/assets/images/home/home_07.jpg";
import img08 from "@/assets/images/home/home_08.jpg";
import closeIcon from "@/assets/images/close.png";


import About from "./components/aboutme"
import AboutIntro from "./components/aboutmeIntro"
//import ContactMe from "./components/homeContactMe"
import dynamic from 'next/dynamic'
const ContactMe = dynamic(() => import('./components/homeContactMe'), { ssr: false })

// ------------

function Home() {
  const [openPortfolio, setOpenPortfolio] = useState<number>(0);

  /**
   * Open a popup of the item with the given number passed to the function
   *
   * @param num Pop up item number to be open
   */
  const handleOpenPopup = (num: number) => {
    setOpenPortfolio(num);
  };

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

    // Select the elements
    let sections = gsap.utils.toArray("section");
    // let sections = gsap.utils.toArray(".panel");

    // Create the animation
    // const element = document.getElementById('.horizontal-container') as HTMLElement;
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
      <main className="page-background" id="page-background">
        <div id="content" className="site-content">

          <div className="horizontal-container">
            <section className="panel">
              <div className="content-holder center-relative">
                <div className="blog-holder">
                  <article className="blog-item-holder">
                    <div className="entry-holder">
                      <h2 className="entry-title">
                        {/* <h2 className="text-9xl relative"> */}
                        FullStack<br />
                        Developer
                      </h2>
                      <img src={postImg.src} alt="" />
                      <ul className="entry-info">
                        <li className="author-nickname-holder">
                          <div className="entry-info-text">Location</div>
                          <div className="author-nickname">Victoria, BC</div>
                        </li>
                        <li className="entry-date-holder">
                          <div className="entry-info-text">email</div>
                          <div className="entry-date published"><a className="text-black" href="mailto:alonso.hl25@gmail.com">alonso.hl25@gmail.com</a></div>
                        </li>
                        <li className="cat-links-holder">
                          <div className="entry-info-text">Phone</div>
                          <div className="cat-links"><a className="text-black" href="tel:+12508805401">250-880-5401</a></div>
                        </li>
                      </ul>
                    </div>
                  </article>

                </div>
                <div className=" flex justify-between bottom-10">

                  <div className="contact-me"><a href="mailto:alonso.hl25@gmail.com">Contact Me</a></div>
                  <div className="scrool">scroll {'>>'}</div>


                </div>
              </div>
            </section>
            <section className="panel ">
              <AboutIntro />
            </section>
            <section className="panel ">
              <About />
            </section>
          </div>

        </div>


      </main>
      <ContactMe />
      {/* Popups */}
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
