import Link from "next/link";
import { navbarData } from "../data";

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

const LinkItem = (props) => {
  const { title, to } = props.el;
  return (
    <li className="m-3 lg:mx-5">
      <Link
        href={to}
        className={"text-gray-800 text-medium hover:text-purple-600 "}
      >
        {title}
      </Link>
    </li>
  );
};
