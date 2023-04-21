import { BsInfoSquare } from "react-icons/bs";
import TitleSection from "./TitleSection";
import Card from "./cards/Card";

export default function SectionFeatures() {
  return (
    <div>
      <div className="flex bg-slate-400 py-6 justify-center space-x-5 ">
        <BsInfoSquare />
        <p>
          But you're good, Marty, you're really good. And this audition tape of
          your i
        </p>
      </div>
      <div className="py-2 px-20"></div>
      <div>
        <TitleSection
          title="Features"
          subtitle="wtah you get with AstroWind"
          description=" lorem10 But you fghhfg ghrhgg rg  "
        />
      </div>
    <div className="flex" >
      <div className="">
          <div> 
            <Card className="text-start" 
            titleCard="astro + tailwind css integration" descriptionCard="AstroWind made with a real css is much more joi and more proffesional" />
          </div>
          <div> 
            <Card 
            titleCard="ready to use components"
            descriptionCard="AstroWind made with a real css is much more joi and more proffesional" />
          </div>
          <div> 
            <Card 
            titleCard="best practices" 
            descriptionCard="AstroWind made with a real css is much more joi and more proffesional" />
          </div>
      </div>
      <div className="">
        <div> 
          <Card 
            titleCard="excellent page speed" 
          descriptionCard="AstroWind made with a real css is much more joi    and      more proffesional" />
        </div>
        <div> 
          <Card 
          titleCard="seazrch engine optimisation (seo)"
          descriptionCard="AstroWind made with a real css is much more joi and more proffesional"
          />
        </div>
        <div> 
          <Card
          titleCard="open to new ideas and contributions"
          descriptionCard="AstroWind made with a real css is much more joi and more proffesional"
          />
        </div>
      </div>
      </div>
    </div>
  );
}
