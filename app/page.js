import Link from "next/link";
import Skills from "./components/skills/Skills";
import { edu, certificate } from "./data";
export default function Home() {
  return (
    <section className="py-8">
      <div className="flex flex-wrap md:px-4">
        <div className="w-full">
          <div className="md:mx-4 bg-white shadow rounded my-2 p-4">
            <h3 className="text-2xl text-gray-800 font-bold mb-4">Education</h3>
            {edu.map((e) => (
              <div className="my-4" key={e.id}>
                <p className="text-purple-400">{e.year}</p>
                <h6 className="text-gray-500">{e.institute}</h6>
                <p className="text-gray-950">{e.percentage}%</p>
                <p className="text-gray-950 font-light">{e.desc}</p>
              </div>
            ))}
          </div>
          <div className="md:mx-4 bg-white shadow rounded my-2 p-4">
            <h3 className="text-2xl text-gray-800 font-bold mb-4">
              Certificates
            </h3>
            {certificate.map((c) => (
              <div className="my-4" key={c.id}>
                <h6 className="text-gray-600">{c.title}</h6>
                <Link href={c.link} className="text-purple-400">
                  View Certificate
                </Link>
              </div>
            ))}
          </div>
          <Skills />
        </div>
      </div>
    </section>
  );
}
