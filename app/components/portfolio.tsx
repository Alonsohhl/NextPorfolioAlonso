import { PortfolioMetaData } from "@/components/PorfolioMetadata";
import getPortfolioMetadata from "@/components/getPortfolioMetadata";
import Link from 'next/link'

import { cn } from "@/lib/utils"
export function Portfolio() {

  const PortfolioData: PortfolioMetaData[] = getPortfolioMetadata();

  return (

    <main className="page-background ">
      <div id="content" className="site-content">
        <div className="content-holder center-relative content-1170 py-30">
          <h1 className="entry-title page-title center-text">
            Recent Work
          </h1>
          <div id="grid" className="grid md:grid-cols-2 gap-4">
            {PortfolioData && PortfolioData.map((item, index) => (
              <PortfolioItem key={index} {...item} />
            ))}
          </div>
        </div>

      </div>
    </main>

  )

}


const PortfolioItem = ({ key, role, imgUrls, slug, shortDesc }: PortfolioMetaData & { key: number }) => {
  const imageSrc = imgUrls[0]
  return (



    <div className="p-3 picture-item " id={String(key)}>
      <div className="relative block overflow-hidden rounded group transition-all duration-500 h-80">
        <img src={imageSrc} className="rounded transition-all duration-500 group-hover:scale-105" alt="work-image" />


        <Link href={"/portfolio/" + slug} className="absolute inset-3 flex items-end cursor-pointer rounded bg-white p-3 opacity-0 transition-all duration-500 group-hover:opacity-80 group-hover:backdrop-blur-sm">
          <div>
            <h6 className={cn(`text-base text-black font-medium`)}>{role}</h6>
          </div>
        </Link>

      </div>
      <div className="flex py-6">
        <div className="flex-grow w-2/3 pr-2">
          <h4 className="p-0 font-bold">{role}</h4>
          <p className={cn(`m-0 p-0 text-sm`)}>{shortDesc}</p>
        </div>
        <div className="flex-grow w-1/3">
          <div className="relative inline-block w-full">
            <div className="four-color-gradient absolute -inset-[2px] rounded-extra-large"></div>
            <Link href={"/portfolio/" + slug} >
              <button className="relative bg-black px-2 py-3 border-[2px] border-transparent rounded-extra-large z-10 w-full text-custom-pink text-xl">
                See Project
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
