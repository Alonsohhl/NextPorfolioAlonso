import fs from "fs";
import Markdown from "markdown-to-jsx";
import matter from "gray-matter";
import getPostMetadata from "../../../components/getpostMetadata";

const getPostContent = (slug: string) => {
  const folder = "jobsMarkdown/";
  const file = `${folder}${slug}.md`;
  const content = fs.readFileSync(file, "utf8");
  const matterResult = matter(content);
  return matterResult;
};

export const generateStaticParams = async () => {
  const posts = getPostMetadata();
  return posts.map((post) => ({
    slug: post.slug,
  }));
};

import { Info } from "./Info";

function SinglePortfolio(props: any) {
  const slug = props.params.slug;
  const post = getPostContent(slug);
  return (
    <main className="page-background single single-portfolio mt-20">
      <div id="content pt-0" className="site-content">
        <div className="content-holder center-relative content-1170">
          <h1 className="entry-title page-title center-text">
            {post.data.role}
          </h1>
          <div className="float-left">
            <Info dateFrom={post.data.dateFrom} dateTo={post.data.dateTo} companyName={post.data.companyName} role={post.data.role} />
          </div>
          <div className="medium-text">
            <Markdown className="markdown text-white list-decimal list-inside">{post.content}</Markdown>
          </div>
        </div>

      </div>
    </main >
  );
}

export default SinglePortfolio;
