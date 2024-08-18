"use client";
import Link from "next/link";
import Image from 'next/image';

interface NavbarProps {
  activeLink: string;
}

function Navbar({ activeLink }: NavbarProps) {
  return (
    <main className="navbar font-light flex flex-row md:flex-row justify-between items-center mt-5 px-4">
      <div className="left-items ">
        <Image
          src="/NK.png"
          width={40}
          height={40} // Ensure height is set to a non-zero value
          alt="Picture of the author"
         
        />
      </div>
      <div className="right-items">
        <ul className="flex flex-row gap-4 md:gap-6">
          <li>
            <Link
              href="/"
              className={`text-sm md:text-base ${activeLink === '/' ? 'text-white' : 'text-custom-gray'}`}
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
              className={`text-sm md:text-base ${activeLink === '/about' ? 'text-white' : 'text-custom-gray'}`}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              href="/contact"
              className={`text-sm md:text-base ${activeLink === '/contact' ? 'text-white' : 'text-custom-gray'}`}
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
