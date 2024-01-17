


// Images
import postImg from "@/assets/images/blog/posts/post_01.jpg";
import Link from "next/link";
// --------------

const Single = () => {
  return (
    <div className="content-holder center-relative content">
      <h1 className="entry-title page-title">
        Get To Know
      </h1>
      <div className="single-content-wrapper center-relative top-70 max-w-4xl">
        <div className="entry-content">
          <p>
            I've had the opportunity to work in the computer software industry, where I've developed a broad skill set. This includes experience with web applications, databases, and web services, as well as proficiency in REST APIs and design software. I'm also familiar with React, JavaScript, TypeScript, and the fundamentals of software architecture.

            My focus has always been on contributing to projects that enhance efficiency and effectiveness. I enjoy being part of a team that innovates and finds solutions to help organizations achieve their goals.
          </p>
        </div>
        <div className="clear"></div>
        <div className="tags-holder center-text top-60">
            <div className="social-text tag">
              React
            </div>
            <div className="social-text tag">
              Javascript
            </div>
            <div className="social-text tag">
              NodeJs
            </div>
            <br/>
            <div className="social-text tag">
              SQL/NonSQL
            </div>
            <div className="social-text tag">
              PHP
            </div>
            <div className="social-text tag">
              Typescript
            </div>
            <br/>
            <div className="social-text tag">
              CSS/SASS
            </div>
            <div className="social-text tag">
              NextJs
            </div>
            <div className="social-text tag">
              Wordpress
            </div>
          </div>
        <br/>
      </div>
    </div>
  );
};

export default Single;
