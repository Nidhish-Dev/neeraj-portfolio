"use client";
import Link from "next/link";

function Navbar() {
  
  return (
    <main className="navbar flex flex-row md:flex-row  justify-between mt-5 ">
    <div className="left-items flex items-center text-center md:text-left text-sm md:text-base">Neeraj Kumar</div>
    <div className="right-items  md:mt-0">
      <ul className="flex flex-row md:flex-row gap-2 md:gap-4">
        <li><Link href={"/projects"} className="text-sm md:text-base">Home</Link></li>
        <li><Link href={"/"} className="text-sm md:text-base">Work</Link></li>
        <li><Link href={"/"} className="text-sm md:text-base">About</Link></li>
        <li><Link href={"/"} className="text-sm md:text-base">Contact</Link></li>
      </ul>
    </div>
  </main>
  
  
  );
}



export default Navbar;
