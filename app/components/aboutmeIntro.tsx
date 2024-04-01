// Images
//
import React from "react"
// --------------

const Single = () => {
  return (
    <div className="content-holder center-relative content">
      <h1 className="entry-title page-title sm:mb-2">Get To Know</h1>
      <div className="single-content-wrapper center-relative top-0 lg:top-70 max-w-4xl">
        <div className="entry-content">
          <p>
            I'm a FullStack Developer with over 7 years of experience, adept in streamlining web application functionality and enhancing user interface design across diverse platforms. I Demonstrate proficiency in database design, and cloud infrastructure, coupled with a robust skill set in NextJS, Vue, React, and Git, ensuring high performance and scalability of web solutions. Committed to leveraging analytical skills to solve complex problems, improve system reliability, and contribute to team success through effective collaboration and innovative approaches.
          </p>
        </div>
        <div className="clear"></div>
        <div className="tags-holder center-text top-60 hidden md:block">
          <div className="social-text tag">React</div>
          <div className="social-text tag">Javascript</div>
          <div className="social-text tag">NodeJs</div>
          <br />
          <div className="social-text tag">SQL/NonSQL</div>
          <div className="social-text tag">PHP</div>
          <div className="social-text tag">Typescript</div>
          <br />
          <div className="social-text tag">CSS/SASS</div>
          <div className="social-text tag">NextJs</div>
          <div className="social-text tag">Wordpress</div>
        </div>
        <br />
      </div>
    </div>
  );
};

export default Single;
