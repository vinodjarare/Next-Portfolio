import WorkItem from "../components/WorkItem";
import { portfolioData } from "../data";

export const metadata = {
  title: "Vinod Jarare | work",
};

const page = () => {
  return (
    <section className="pb-10">
      <div className="flex flex-wrap md:px-4">
        {portfolioData.map((portfolio, id) => (
          <WorkItem portfolio={portfolio} key={id} />
        ))}
      </div>
    </section>
  );
};

export default page;
