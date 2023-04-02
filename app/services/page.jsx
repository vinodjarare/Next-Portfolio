import { FaBootstrap, FaCode, FaHtml5, FaReact } from "react-icons/fa";
import ServiceItem from "../components/ServiceItem";
import { serviceData } from "../data";

export const metadata = {
  title: "Vinod Jarare | services",
};

const page = () => {
  return (
    <section className="pb-10">
      <div className="flex flex-wrap md:px-4">
        {serviceData.map((service, id) => (
          <ServiceItem service={service} key={id} />
        ))}
      </div>
    </section>
  );
};

export default page;
