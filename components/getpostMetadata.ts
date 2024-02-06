import fs from "fs";
import matter from "gray-matter";
import { PostMetadata } from "../components/PostMetadata";

const getPostMetadata = (): PostMetadata[] => {
  const folder = "jobsMarkdown/";
  const files = fs.readdirSync(folder);
  const markdownPosts = files.filter((file) => file.endsWith(".md"));

  // Get gray-matter data from each file.
  const posts = markdownPosts.map((fileName) => {
    const fileContents = fs.readFileSync(`jobsMarkdown/${fileName}`, "utf8");
    const matterResult = matter(fileContents);
    return {
      companyName: matterResult.data.companyName,
      dateFrom: matterResult.data.dateFrom,
      dateTo: matterResult.data.dateTo,
      slug: fileName.replace(".md", ""),
      shortDesc: matterResult.data.shortDesc
    };
  });

  return posts;
};

export default getPostMetadata;
