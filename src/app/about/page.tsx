'use client'
import React, { useState, useEffect } from 'react';
import Navbar from '@/components/Navbar';

const Page: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);
  const activeLink = '/about';

  // Scroll to top on component mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  return (
    <div>
      <div className="navbar mt-4 mb-4">
        <Navbar activeLink={activeLink} />
      </div>
      
      {/* Loading screen */}
      {isLoading && (
        <div className="loading-screen">
          <div className="spinner"></div>
        </div>
      )}
<div className="pcScreen">
      <img
        className="projects-img"
        src="/abt1.jpg"
        alt="Project"
        onLoad={() => setIsLoading(false)} // Hide loading screen when image is loaded
        style={{ display: isLoading ? 'none' : 'block', width: '100%', height: 'auto' }} // Ensure the image scales correctly
      />
      <div className="line mt-36"></div>
      <div className="thrilledSection text-white flex items-center justify-between">

        <div className='flex flex-col'>
          <span className='thrilledtext'>I&apos;m thrilled to answer to</span>
          <span className='arrowline flex gap-8 items-center'>your next project <img src="/arrow.png" alt="" /></span>
        </div>

        <div className='flex flex-col'>
         <p className='email'>neeraj942000@gmail.com</p>
         <a className='resume mt-4' target='_blank' rel="noopener noreferrer" href="/CV.pdf">View Resume</a>

        </div>
      </div>
        <div className="socials flex gap-5">
          <a target='/' href="https://www.behance.net/000nr1118c21NKR"><img src="/behance.png" alt="" /></a>
          <a target='/' href="https://www.linkedin.com/in/neeraj-kumar-002118283/"><img src="/Social Icons.png" alt="" /></a>
          <a target='/' href="https://www.instagram.com/_the_neeeraj/"><img src="/insta.png" alt="" /></a>
        </div>
        </div>

        <div className="mobileScreen">
        <img
        className="projects-img"
        src="/abtPhn.jpg"
        alt="Project"
        onLoad={() => setIsLoading(false)} // Hide loading screen when image is loaded
        style={{ display: isLoading ? 'none' : 'block', width: '100%', height: 'auto' }} // Ensure the image scales correctly
      />
     <div className="thrilledSection text-white flex items-center justify-between">

<div className='flex flex-col'>
 <a className='resume mt-4' target='_blank' rel="noopener noreferrer" href="/CV.pdf">View Resume</a>

</div>
</div>
<div className="socials flex gap-5">
          <a target='/' href="https://www.behance.net/000nr1118c21NKR"><img src="/behance.png" alt="" /></a>
          <a target='/' href="https://www.linkedin.com/in/neeraj-kumar-002118283/"><img src="/Social Icons.png" alt="" /></a>
          <a target='/' href="https://www.instagram.com/_the_neeeraj/"><img src="/insta.png" alt="" /></a>
        </div>
        </div>
      <button className="scrollToTop" onClick={scrollToTop}>▲</button>
      <style jsx global>{`
        html {
          scroll-behavior: smooth; /* Enables smooth scrolling */
        }

        .loading-screen {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(0, 0, 0, 0.5);
          color: white;
          display: flex;
          justify-content: center;
          align-items: center;
          z-index: 1000;
        }

        .spinner {
          border: 8px solid rgba(0, 0, 0, 0.1); /* Light grey */
          border-radius: 50%;
          border-top: 8px solid #fff; /* White */
          width: 50px;
          height: 50px;
          animation: spin 1s linear infinite;
        }

        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }

        .projects-img {
          display: block; /* Ensures the image is block-level for styling */
          max-width: 100%; /* Ensures the image scales properly within its container */
          height: auto; /* Keeps aspect ratio intact */
        }
      `}</style>
    </div>
  );
};

export default Page;
