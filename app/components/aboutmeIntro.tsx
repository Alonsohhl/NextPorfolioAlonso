// Images
import postImg from "@/assets/images/blog/posts/post_01.jpg";
import Link from "next/link";
// --------------

const Single = () => {
  return (
    <div className="content-holder center-relative content">
      <h1 className="entry-title page-title sm:mb-2">Get To Know</h1>
      <div className="single-content-wrapper center-relative top-0 lg:top-70 max-w-4xl">
        <div className="entry-content">
          <p>
            I&apos;ve spent 10 years in the computer software industry,
            developing a broad skill set that allows me to contribute to
            projects enhancing efficiency and effectiveness. My experience spans
            web applications, databases, web services, and I&apos;m proficient
            in REST APIs and design software. Additionally, I&apos;m well-versed
            in React, JavaScript, TypeScript, and possess a strong understanding
            of software architecture.
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
