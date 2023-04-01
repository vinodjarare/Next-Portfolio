import WorkItem from "../components/WorkItem";

const page = () => {
  const portfolioData = [
    {
      id: 1,
      image: "/portfolio/fake-store.png",
      title: "React Cart",
      link: "https://github.com/vinodjarare/",
      description:
        "This is the ecommerce cart in which user can add item to shopping cart . This project made by using  React, Bootstrap, Redux",
    },
    {
      id: 2,
      image: "/portfolio/react-chat.png",
      title: "Chat App",
      link: "https://github.com/vinodjarare/",
      description:
        "This is the messaging website in which  user can interact with other user. This project made by using react,css,firebase",
    },
    {
      id: 3,
      image: "/portfolio/poultry.png",
      title: "Poultry Farming",
      link: "https://github.com/vinodjarare/",
      description:
        "This is poultry site which helps user to improve knowledge about poultry industry. This project made by using HTML, CSS, JavaScript, Express js, Mongodb, Bootstrap",
    },
    {
      id: 4,
      image: "/portfolio/ecommerce.png",
      title: "Ecommerce",
      link: "https://github.com/vinodjarare/",
      description:
        "This is the ecommerce website in which user can bay items from wensite . This project made by using  React, Redux, Material UI, Express, Mongodb,Stripe Payment method",
    },
  ];
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
