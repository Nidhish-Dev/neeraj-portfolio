import React from 'react'
import Navbar from '@/components/Navbar';
function page() {
    const activeLink = '/about';
  return (
    <div>
      <Navbar activeLink={activeLink} />
    </div>
  )
}

export default page
