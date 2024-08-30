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
        src="/g1.jpg"
        alt="Project"
        onLoad={() => setIsLoading(false)} // Hide loading screen when image is loaded
        style={{ display: isLoading ? 'none' : 'block', width: '100%', height: 'auto' }} // Ensure the image scales correctly
      />
      
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
