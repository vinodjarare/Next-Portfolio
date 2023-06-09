import Image from "next/image";
import Link from "next/link";
import { socials } from "../data";
const Sidebar = () => {
  return (
    <aside className="sticky top-0 bg-white md:mx-8 lg:mx-4 mb-8 p-6 shadow-md rounded-md -mt-40">
      <div className="w-24 h-24 rounded-md overflow-hidden mx-auto mb-5">
        <Image
          width={100}
          height={100}
          src={"/person.png"}
          alt="profile"
          priority={true}
          className="w-full"
        />
      </div>
      <div className="text-center">
        <h1 className="text-xl text-gray-800 font-bold mb-1">Vinod Jarare</h1>
        <p className="text-sm text-gray-950 font-medium mb-3">
          <Link
            href="linkedin.com/in/vinod-jarare"
            className="text-purple-600 pl-1"
          >
            Full Stack Web Developer
          </Link>
        </p>
        <a
          href="VinodResume.pdf"
          className="inline-block mb-3 rounded bg-purple-600 text-center border-0 py-2 px-6 text-white leading-7 tracking-wide hover:bg-purple-800"
          download="Resume"
        >
          Download Resume
        </a>
        <ul className="flex flex-wrap justify-center">
          {socials.map((social, id) => (
            <SocialIcon social={social} key={id} />
          ))}
        </ul>
      </div>
      <div className="text-start pt-4">
        <h3 className="text-md mb-2 uppercase font-medium text-gray-800">
          About Me
        </h3>
        <p className="text-gray-950 text-base  leading-relaxed">
          Hi there! <br /> My name is Vinod Jarare and I&apos;m a web developer
          and designer with a passion for creating intuitive, efficient designs.
          I specialize in HTML, CSS, JavaScript, React, SASS, Bootstrap, and
          nodejs, and have a strong focus on delivering high-quality work that
          exceeds client expectations.
          <br />
          As a problem-solver at heart, I love the challenge of evaluating and
          manipulating designs to meet specific client needs. Whether it&apos;s
          a new website or an update to an existing one, I&apos;m committed to
          delivering exceptional results that drive business success.
        </p>
      </div>
    </aside>
  );
};

export default Sidebar;

const SocialIcon = (props) => {
  const { icon, link } = props.social;
  return (
    <li className="m-2">
      <Link
        href={link}
        className="w-8 h-8 bg-purple-100 rounded text-purple-800 flex items-center justify-center hover:text-white hover:bg-purple-600"
      >
        {icon}
      </Link>
    </li>
  );
};
