"use client";
import { navbarData } from "../data";
import LinkItem from "./LinkItem";

const Navbar = () => {
  return (
    <nav className="md:mx-8 mb-3 px-4 py-2 z-10 sticky top-0 bg-white shadow rounded">
      <ul className="flex flex-wrap">
        {navbarData.map((el, id) => (
          <LinkItem el={el} key={id} />
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
