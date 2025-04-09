import React from 'react';
import Link from 'next/link';

const Navbar = () => {

  return (
    <>
    <nav className="navbar navbar-expand-lg navbar-light bg-blue-100 shadow-sm">
      <div className="container-fluid">
        <Link className="bg-blue-500 p-2" href="/">Form Makanan</Link>
        
        </div>
    </nav>
    </>
  );
};

export default Navbar;