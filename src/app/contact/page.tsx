import React from 'react'
import Navbar from '@/components/Navbar';
function page() {
    const activeLink = '/contact';
  return (
    <div>
      <div className="navbar antialiased ">
   <Navbar activeLink={activeLink} />
    </div>
    </div>
  )
}

export default page
