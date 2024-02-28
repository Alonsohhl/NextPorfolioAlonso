import "reactjs-popup/dist/index.css";
// Images
import postImg from "@/assets/images/home/home_alonso.jpg"
import About from "./components/aboutme"
import AboutIntro from "./components/aboutmeIntro"
import HomeWrapper from "@/components/Home"
//import ContactMe from "./components/homeContactMe"
import dynamic from 'next/dynamic'
import { Portfolio } from "./components/portfolio";


const ContactMe = dynamic(() => import('./components/homeContactMe'), { ssr: false })

function Home() {

  return (
    <>
      <HomeWrapper>
        <main className="page-background" id="page-background">
          <div id="content" className="site-content">

            <div className="horizontal-container">
              <section className="panel">
                <div className="content-holder center-relative">
                  <div className="blog-holder">
                    <article className="blog-item-holder">
                      <div className="entry-holder">
                        <h2 className="entry-title">
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
        <Portfolio />
        <ContactMe />
        {/* Popups */}
      </HomeWrapper>
    </>
  );
}

export default Home;
