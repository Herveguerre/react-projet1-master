import { HiOutlineRss, HiOutlineSun } from "react-icons/hi";
import Btn from "../btn/Btn.js";

export default function Navbar() {
  return (
    <nav className="flex  justify-between items-center pt-2 pl-2 pr-2">
    
        <img className="max-w-[20px]"src="img/fusee.png" alt="logo fusee"></img>
      
      <p className="font-black">AstroWind</p>
      <ul className="flex flex-wrap space-x-4">
        <li>Landing</li>
        <li>Pages</li>
        <li>Widgets</li>
        <li>Blog</li>
      </ul>
      <div className="flex flex-wrap items-center space-x-2">
        <HiOutlineSun />
        <HiOutlineRss />
      </div>
      <Btn title="download" />
    </nav>
  );
}
