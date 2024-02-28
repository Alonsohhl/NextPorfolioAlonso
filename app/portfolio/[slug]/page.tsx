import fs from "fs";
import Markdown from "markdown-to-jsx";
import matter from "gray-matter";
import getPortfolioMetadata from "../../../components/getPortfolioMetadata";
//import { InfoPortfolio } from "./info";
import { StickyScroll } from "@/components/sticky-scroll-reveal"

const getPostContent = (slug: string) => {
  const folder = "portfolioFiles/";
  const file = `${folder}${slug}.md`;
  const content = fs.readFileSync(file, "utf8");
  const matterResult = matter(content);
  return matterResult;
};

export const generateStaticParams = async () => {


  const posts = getPortfolioMetadata();
  return posts.map((post) => ({
    slug: post.slug,
  }));
};

function extractSectionContent(slug: any): {
  title: string
  description: string
}[] {
  // Read the Markdown file
  const folder = "portfolioFiles/";
  const file = `${folder}${slug}.md`;

  const fileContent = fs.readFileSync(file, 'utf8');

  // Use gray-matter to parse the Markdown file, extracting only the content
  const { content } = matter(fileContent);

  // Split the content by lines to process each line
  const lines = content.split('\n');

  let sections = [];
  let currentSection = { title: '', description: '' };
  let descriptionAgregator: string[] = []

  lines.forEach(line => {
    if (line.startsWith('## ')) { // New section starts
      if (currentSection.title) {
        // Save the previous section before starting a new one
        currentSection.description = descriptionAgregator.join('\n').trim();
        descriptionAgregator = []
        sections.push(currentSection);
      }
      // Start a new section
      currentSection = { title: line.substring(3).trim(), description: '' };
    } else {
      // Add line to current section content
      descriptionAgregator.push(line);
    }
  });

  // Don't forget to add the last section
  if (currentSection.title) {
    currentSection.description = descriptionAgregator.join('\n').trim();
    sections.push(currentSection);
  }

  return sections;
}

function SinglePortfolio(props: any) {
  const slug = props.params.slug;
  const GMcontent = getPostContent(slug)
  const content = extractSectionContent(slug)

  return (
    <main className="page-background single single-portfolio my-40">
      <div id="content pt-0" className="site-content">
        <div className="content-holder center-relative content-1170">
          <h1 className="entry-title page-title center-text">
            {
              GMcontent.data.role
            }
          </h1>
        </div>

        <div className="">
          <StickyScroll content={content} imageUrls={GMcontent.data.imgUrls}>

          </StickyScroll>
        </div>

      </div>
    </main >
  );
}

export default SinglePortfolio;
