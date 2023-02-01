import React, { useState } from "react";
import logo from "./logo-bookmark.svg";
import menu from "./icon-hamburger.svg";
import CallToAction from "./CallToAction";

const Navbar = () => {
  const [isLinksVisible, setLinksVisible] = useState(false);

  return (
    <nav className="lg:px-14 mt-10">
      <section className="flex justify-between items-center px-4">
      <img src={logo} alt=""className=""/>
      <img src={menu} alt="Navigation menu" className=" w-6 h-4 lg:hidden cursor-pointer" onClick={() => setLinksVisible(!isLinksVisible)} />
      </section>
      <section className={`${isLinksVisible ? 'block' : 'hidden'} lg:static bg-Blue h-5/6 lg:h-0 flex flex-col lg:flex-row justify-center items-center lg:bg-white absolute top-24  lg:w-5/12 pr-20 z-50 lg:flex lg:items-center`}>
        <ul className="flex w-screen lg:flex-row flex-col h-96 mb-10 lg:mb-0 items-center lg:h-0 justify-between lg:w-72 text-base lg:text-xs font-medium text-downText lg:text-Ash">
          <li>FEATURES</li>
          <li>PRICING</li>
          <li>CONTACT</li>
          <li className="block lg:hidden">LOGIN</li>
        </ul>
        <section className="text-white text-xs hidden lg:block">
          <CallToAction text="LOGIN"/>
        </section>
      </section>
    </nav>
  );
};

export default Navbar;
