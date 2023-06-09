import Image from "next/image";
import Link from "next/link";
import { FaRegEye } from "react-icons/fa";

const WorkItem = (props) => {
  const { image, title, link, description } = props.portfolio;
  return (
    <div className="w-full lg:w-1/2">
      <div className="my-4 md:mx-4 shadow p-6 rounded-md bg-white group hover:shadow-md">
        <div className="relative mb-6 w-full h-48 bg-purple-200 rounded-md overflow-hidden">
          <Image
            src={image}
            fill={true}
            alt="coverImage"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute opacity-0 transition duration-200 bg-purple-100 bg-opacity-80 w-full flex items-center justify-center h-full left-0 top-0 group-hover:opacity-100 group-hover:visible">
            <ul className="flex flex-wrap">
              <li className="m-2">
                <Link
                  href={link}
                  target="_blank"
                  rel="noreferrer"
                  className="w-12 h-10 text-xl text-purple-600 flex items-center justify-center border-2 border-purple-600 rounded hover:text-white hover:bg-purple-600"
                >
                  <FaRegEye />
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <h3 className="text-lg font-medium text-gray-800 mb-2">{title}</h3>
        <p className="text-gray-950 lg:h-32 xl:h-28">{description}</p>
      </div>
    </div>
  );
};

export default WorkItem;
