'use client'
import React, { useState, useEffect } from 'react';
import Navbar from '@/components/Navbar';

const Page: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);
  const activeLink = '/projects';

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

      <img
        className="projects-img"
        src="/u41.jpg"
        alt="Project"
        onLoad={() => setIsLoading(false)} // Hide loading screen when image is loaded
        style={{ display: isLoading ? 'none' : 'block', width: '100%', height: 'auto' }} // Ensure the image scales correctly
      />
      {/* add animation */}
      <div className="project42-container bg-white">
        <img
          loading="lazy"
          src="/p42.png"
          alt="Project Image 2"
          onLoad={() => setIsLoading(false)} // Hide loading screen when image is loaded
          style={{ display: isLoading ? 'none' : 'block', width: '100%', height: 'auto' }} 
        />
      </div>
      <div className="animationFrame bg-white">
        <div className="upper">
          <div className="upperTitle">
            <p>Home & Analysis</p>
            <span>
              The platform offers a range of functionalities enabling users to
              access
            </span>
            <span>
              their prior meditation sessions, schedule new sessions, and
              receive
            </span>
            <span>tips to enhance their meditation practice.</span>
          </div>
          <div className="upperFigma">
            <iframe
              style={{ border: "none" }}
              src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2F0WInfi78UOwGxUZaF3tPKs%2FWorkplace%3Fpage-id%3D0%253A1%26node-id%3D1044-8150%26viewport%3D-9560%252C-1704%252C0.42%26t%3D7CGHfJIwNGVZL2eb-1%26scaling%3Dscale-down"
              allowFullScreen
            />
          </div>
        </div>
        <div className="upper">
          <div className="upperFigma">
            <iframe
              style={{ border: "none" }}
              src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2F0WInfi78UOwGxUZaF3tPKs%2FWorkplace%3Fpage-id%3D0%253A1%26node-id%3D1044-8741%26viewport%3D-16506%252C-3121%252C0.72%26t%3DQ3nfjJTvCRYWWJLE-1%26scaling%3Dscale-down"
              allowFullScreen
            />
          </div>
          <div className="upperTitle">
            <p>Heart rate & Breathing</p>
            <span>
              Experience the sleek and intuitive onboarding for effortless
            </span>
            <span>navigation through our clean and elegant interface.</span>
          </div>
        </div>
      </div>
      <img
        className="projects-img"
        src="/u42.jpg"
        alt="Project"
        onLoad={() => setIsLoading(false)} // Hide loading screen when image is loaded
        style={{ display: isLoading ? 'none' : 'block', width: '100%', height: 'auto' }} // Ensure the image scales correctly
      />
       <div className="project1Text-container">
        <img
          loading="lazy"
          src="/p41.jpg"
          alt="Project Image 4"
          onLoad={() => setIsLoading(false)} // Hide loading screen when image is loaded
        style={{ display: isLoading ? 'none' : 'block', width: '100%', height: 'auto' }}
        />
      </div>
      <div className="prototype">
        <iframe
          style={{ border: 'none' }}
          src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2F19nihBQTCvYbfGbpijPcc1%2FEnvisioning%3Fpage-id%3D0%253A1%26node-id%3D1-8958%26viewport%3D1463%252C557%252C0.62%26t%3D8dPCuBRKcOh5t7VU-1%26scaling%3Dscale-down%26starting-point-node-id%3D1%253A8958"
          allowFullScreen
        />
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
