
// Images
import aboutImg from "@/assets/images/home/work.jpg";

// ------------

function About() {
  return (
        <div className="content-holder center-relative content">
          <h1 className="entry-title page-title center-text">
            Work
          </h1>


          <img className="page-featured-image" src={aboutImg.src} alt="" />

          <div className="one_half">
            <ul className="timeline-holder">
              <li className="timeline-event">
                <span className="timeline-circle"></span>
                <div className="timeline-event-content">
                Led API, React, database management; focused on JavaScript/Typescript for complex apps, optimized SQL/MongoDB.
                    <p className="italic text-white font-light">Enrollment Resources, Canada</p>
                </div>
                <div className="timeline-event-date">2024</div>
              </li>

              <li className="timeline-event">
                <span className="timeline-circle"></span>
                <div className="timeline-event-content">
                    Freelancer in web, static sites, web apps, API rest, using Python, JavaScript, PHP, WordPress.
                </div>
                <div className="timeline-event-date">2014</div>
                <p className="italic text-white font-light">Freelancer, Canada</p>
              </li>

              <li className="timeline-event">
                <span className="timeline-circle"></span>
                <div className="timeline-event-content">
                  translating designs to HTML/CSS, creating custom post types, working with custom and popular plugins
                </div>
                <div className="timeline-event-date">2010</div>
                <p className="italic text-white font-light">LeapXD, Canada</p>
              </li>

              {/* <li className="timeline-event">
                <span className="timeline-circle"></span>
                <div className="timeline-event-content">
                  Tendrils of gossamer clouds, the ash of stellar alchemy
                  tendrils of true gossamer clouds vangelis the sky calls to us
                  rich in heavy atoms something
                </div>
                <div className="timeline-event-date">2020</div>
              </li>

              <li className="timeline-event">
                <span className="timeline-circle"></span>
                <div className="timeline-event-content">
                  Muse about descended from astronomers shores of the cosmic
                  ocean across the centuries encyclopaedia galactica Euclid
                  intelligent beings. As a patch of light Apollonius of Perga,
                  rings of Uranus network for which there’s little good evidence
                  something fine.
                </div>
                <div className="timeline-event-date">2025</div>
              </li> */}
            </ul>
          </div>

          {/* <div className="one_half last">
            Bearable only through love hydrogen atoms bits of moving fluff
            culture shores of the cosmic ocean paroxysm of global death rich in
            heavy atoms with pretty stories for which there’s little good
            evidence something incredible is waiting to be known not a sunrise
            but a galaxyrise shores of the cosmic ocean inconspicuous motes of
            rock.
            <br />
            <br />
            Galaxies network of wormholes birth extraplanetary Apollonius of
            Perga adipisci velit! Muse about descended from astronomers shores
            of the cosmic ocean across the centuries encyclopaedia galactica
            Euclid intelligent beings. As a patch of light Apollonius of Perga,
            rings of Uranus network of wormholes bits of moving fluff,
            consciousness the only home we’ve ever known. Galaxies, corpus
            callosum radio telescope. Globular star cluster, light years made in
            the interiors of collapsing stars cosmic ocean with pretty stories
            for which there’s little good evidence something incredible.
          </div>
          <div className="clear"></div>

          <div className="social-holder center-text top-60">
            <a className="social-text" href="https://www.twitter.com/">
              TWITTER
            </a>
            <a className="social-text" href="https://www.facebook.com/">
              FACEBOOK
            </a>
            <a className="social-text" href="https://www.instagram.com/">
              INSTAGRAM
            </a>
          </div> */}
        </div>
  );
}

export default About;
