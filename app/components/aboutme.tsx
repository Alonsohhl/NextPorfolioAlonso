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
    </div>
  );
}

export default About;
