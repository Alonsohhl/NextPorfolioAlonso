// import postImg from "@/assets/images/home/home-page.png";
"use client"
import React, { useState, useEffect } from "react"
import Model3d from "./3DPCModel"


export default function HomeSection() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updateMousePosition = (event: any) => {
      setMousePosition({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener('mousemove', updateMousePosition);

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
    };
  }, []);



  return (
      <section className="panel">

        <div className="content-holder center-relative">
          <div className="blog-holder">
            <article className="blog-item-holder">
              <div className="entry-holder">
                <h2 className="entry-title -z-20">
                  FullStack
                  <br />
                  Developer
                </h2>
                {/* <img src={postImg.src} alt="" className="animate-float"/> */}
                <Model3d mousePosition={mousePosition} />
                <ul className="entry-info">
                  <li className="author-nickname-holder">
                    <div className="entry-info-text">Location</div>
                    <div className="author-nickname">Victoria, BC</div>
                  </li>
                  <li className="entry-date-holder">
                    <div className="entry-info-text">email</div>
                    <div className="entry-date published">
                      <a
                        className="text-black"
                        href="mailto:alonso.hl25@gmail.com"
                      >
                        alonso.hl25@gmail.com
                      </a>
                    </div>
                  </li>
                  <li className="cat-links-holder">
                    <div className="entry-info-text">Phone</div>
                    <div className="cat-links">
                      <a className="text-black" href="tel:+12508805401">
                        250-880-5401
                      </a>
                    </div>
                  </li>
                </ul>
              </div>
            </article>
          </div>
          <div className=" flex justify-between bottom-10 z-50">
            <div className="contact-me z-50 bg-black p-2 md:bg-none md:p-1">
              <a href="mailto:alonso.hl25@gmail.com">Contact Me</a>
            </div>
            {/* <div className="scrool z-90">scroll {">>"}</div> */}
            <div className="z-50 bg-black p-2 md:bg-none md:p-1 flex items-center gap-2">
              <div className="leading-none ">
                scroll<br />
                down
              </div>
              <div className="leading-none text-center">
                {">>"}
              </div>
            </div>
          </div>
        </div>
      </section>
  );
}
