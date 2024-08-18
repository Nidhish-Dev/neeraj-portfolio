"use client";
import Link from "next/link";

interface NavbarProps {
  activeLink: string;
}

function Navbar({ activeLink }: NavbarProps) {
  return (
    <main className="navbar flex flex-row md:flex-row justify-between items-center mt-5 px-4">
      <div className="left-items flex items-center text-center md:text-left text-sm md:text-base">
        Neeraj Kumar
      </div>
      <div className="right-items">
        <ul className="flex flex-row gap-2 md:gap-4">
          <li>
            <Link
              href="/"
              className={`text-sm md:text-base ${activeLink === '/' ? 'text-white' : 'text-gray-400'}`}
            >
              Home
            </Link>
          </li>
          {/* <li>
            <Link
              href="/projects"
              className={`text-sm md:text-base ${activeLink === '/work' ? 'text-white' : 'text-gray-400'}`}
            >
              Work
            </Link>
          </li> */}
          <li>
            <Link
              href="/about"
              className={`text-sm md:text-base ${activeLink === '/about' ? 'text-white' : 'text-gray-400'}`}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              href="/contact"
              className={`text-sm md:text-base ${activeLink === '/contact' ? 'text-white' : 'text-gray-400'}`}
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </main>
  );
}

export default Navbar;
