import "reactjs-popup/dist/index.css";
import HomeSection from "./components/homeSection";
import Summary from "./components/Summary";
import WorkExperience from "./components/WorkExperience";


import HomeWrapper from "@/components/Home";
import dynamic from "next/dynamic";
import { Portfolio } from "./components/portfolio";
import { WavyBackground } from "@/components/ui/wavy-background";
import { cn } from "@/lib/utils";
import HomeStars from "./components/HomeSection/HomeStars";

const ContactMe = dynamic(() => import("./components/homeContactMe"), {
  ssr: false,
});




function Home() {



  return (
    <>
        <WavyBackground
          // className={cn(`w-full mx-auto h-full absolute -z-20 `)}
          className={`w-full mx-auto h-full absolute -z-20 `}
        ></WavyBackground>
        <HomeWrapper>
          <main className="page-background" id="page-background">
            <HomeStars />
            <div id="content" className="site-content">
              <div className="horizontal-container">
                {/* <WavyBackground className="w-full mx-auto h-full pb-40 absolute -z-20"></WavyBackground> */}
                <HomeSection />
                <section className="panel ">
                  <Summary />
                </section>
                <section className="panel ">
                  <WorkExperience />
                </section>
              </div>
            </div>
          </main>
          <Portfolio />
          <ContactMe />
          {/* Popups */}
        </HomeWrapper>
    </>
  );
}

export default Home;
