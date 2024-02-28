import fs from "fs";
import matter from "gray-matter";
import { PortfolioMetaData } from "./PorfolioMetadata";

const getPorfolioMetaData = (): PortfolioMetaData[] => {
  const folder = "portfolioFiles/";
  const files = fs.readdirSync(folder);
  const markdownPosts = files.filter((file) => file.endsWith(".md"));

  // Get gray-matter data from each file.
  const posts = markdownPosts.map((fileName) => {
    const fileContents = fs.readFileSync(`portfolioFiles/${fileName}`, "utf8");
    const matterResult = matter(fileContents);
    return {
      role: truncateStringToMaxWords(matterResult.data.role, 4),
      slug: fileName.replace(".md", ""),
      shortDesc: truncateStringToMaxWords(matterResult.data.shortDesc),
      imgUrls: matterResult.data.imgUrls?.split(',')
    };
  });

  return posts;
};

function truncateStringToMaxWords(inputString: string, maxWords = 10) {
  const words = inputString.split(/\s+/);
  if (words.length > maxWords) {
    return words.slice(0, maxWords).join(' ') + '...';
  } else {
    return inputString;
  }
}

export default getPorfolioMetaData;
