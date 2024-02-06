import aboutImg from "@/assets/images/home/work.jpg";
import getPostMetaData from "@/components/getpostMetadata"
import { PostMetadata } from "@/components/PostMetadata"
import Link from 'next/link'

function About() {
  const posts: PostMetadata[] = getPostMetaData();

  return (
    <div className="content-holder center-relative content max-w-4xl">
      <h1 className="entry-title page-title center-text">
        Work
      </h1>


      <img className="page-featured-image mx-auto" src={aboutImg.src} alt="" />

      <div className="one_half">
        <ul className="timeline-holder">
          {
            posts && posts.slice(0, 2).map(post => {
              return (
                <li className="timeline-event" id={post.slug}>
                  <Link href={"/jobs/" + post.slug}>
                    <span className="timeline-circle"></span>
                    <div className="timeline-event-content">
                      {post.shortDesc}
                    </div>
                    <div className="timeline-event-date leading-none">
                      {post.dateFrom}
                      {post.dateTo && (
                        <>
                          <br />|<br />
                          {post.dateTo}
                        </>
                      )}                  </div>
                    <p className="italic text-white font-light">{post.companyName}</p>
                  </Link>
                </li>
              )
            })
          }
        </ul>
      </div>
      <div className="one_half last">
        <ul className="timeline-holder">
          {
            posts && posts.length > 3 && posts.slice(2, 4).map(post => {
              return (
                <li className="timeline-event" id={post.slug}>
                  <Link href={"/jobs/" + post.slug}>
                    <span className="timeline-circle"></span>
                    <div className="timeline-event-content">
                      {post.shortDesc}
                    </div>
                    <div className="timeline-event-date leading-none">
                      {post.dateFrom}
                      {post.dateTo && (
                        <>
                          <br />|<br />
                          {post.dateTo}
                        </>
                      )}                  </div>
                    <p className="italic text-white font-light">{post.companyName}</p>
                  </Link>
                </li>
              )
            })
          }
        </ul>
      </div>
      <div className="clear"></div>

      {/*
      <div className="one_half">
        <ul className="timeline-holder">
          <li className="timeline-event">
            <span className="timeline-circle"></span>
            <div className="timeline-event-content">
              Led API, React, database management; focused on JavaScript/Typescript for complex apps, optimized SQL/MongoDB.
              <p className="italic text-white font-light">Enrollment Resources, Canada</p>
            </div>
            <div className="timeline-event-date leading-none"> 2024<br />|<br />2024</div>
          </li>

          <li className="timeline-event">
            <span className="timeline-circle"></span>
            <div className="timeline-event-content">
              Freelancer in web, static sites, web apps, API rest, using Python, JavaScript, PHP, WordPress.
            </div>
            <div className="timeline-event-date leading-none">2014<br />|<br />Today</div>
            <p className="italic text-white font-light">Freelancer, Canada</p>
          </li>


        </ul>
      </div>



      <div className="one_half last">
        <ul>
          <li className="timeline-event">
            <span className="timeline-circle"></span>
            <div className="timeline-event-content">
              translating designs to HTML/CSS, creating custom post types, working with custom and popular plugins
            </div>
            <div className="timeline-event-date leading-none">2021</div>
            <p className="italic text-white font-light">LeapXD, Canada</p>
          </li>
          <li className="timeline-event">
            <span className="timeline-circle"></span>
            <div className="timeline-event-content">
              translating designs to HTML/CSS, creating custom post types, working with custom and popular plugins
            </div>
            <div className="timeline-event-date leading-none">2017 <br />|<br /> 2020</div>
            <p className="italic text-white font-light">Panam, Peru</p>
          </li>
        </ul>

      </div>
      */}

    </div>
  );
}

export default About;
