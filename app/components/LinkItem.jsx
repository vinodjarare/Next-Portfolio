"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const LinkItem = (props) => {
  const { title, to } = props.el;
  const pathname = usePathname();
  return (
    <li className="m-3 lg:mx-5">
      <Link
        href={to}
        className={`text-gray-800 text-medium hover:text-purple-600 ${
          pathname === to && `text-purple-500`
        } `}
      >
        {title}
      </Link>
    </li>
  );
};

export default LinkItem;
