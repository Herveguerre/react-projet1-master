
import Btn from "../btn/Btn.js";
import BtnIcon from "../btn/BtnIcon.js";
export default function Hero() {
    return (
      <div  className="text-center p-10 pt-[50px]">
            <h1 className="text-upercase font-black text-[2.5rem] " >Free template for create your website with <span className="text-[#b030ff]" >Astro 3.0</span>  + Tailwind css</h1>
            <p className="p-2 pb-5" > <span className="text-bold" >AstroWind</span>But you're good, Marty, you're really good. And this audition tape of your is great, you gotta send it in to the record company. It's like Doc's always saying. Oh, what I meant to day was- I got enough practical jokes for one evening. Good night, fut</p>
            <div className="pt-10 flex justify-center space-x-5"> 
            <BtnIcon 
              title = 'Get template'
              bgColor="bg-blue-700"
              textColor= 'text-white' 
            />
            <Btn title = 'Learn more' />
        </div>
        <div className="pt-10">
          <img src='img/1.png' alt="cosmonaute  dans l'espace" /> 
          </div>
      </div>
      
    )

  }