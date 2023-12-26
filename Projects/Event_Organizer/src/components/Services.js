export default function Services(params) {
  const services = [
    {
      title: "Event Planning",
      description:
        "     Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum id ligula porta felis euismod semper. Aenean eu leo quam.",
    },
    {
      title: "Venue Management",
      description:
        "     Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum id ligula porta felis euismod semper. Aenean eu leo quam.",
    },
    {
      title: "Catering Services",
      description:
        "     Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum id ligula porta felis euismod semper. Aenean eu leo quam.",
    },
    {
      title: "Wedding",
      description:
        "     Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum id ligula porta felis euismod semper. Aenean eu leo quam.",
    },
    {
      title: "Private Party",
      description:
        "     Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum id ligula porta felis euismod semper. Aenean eu leo quam.",
    },
    {
      title: "Anniversities",
      description:
        "     Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum id ligula porta felis euismod semper. Aenean eu leo quam.",
    },
  ];
  return (
    <div className="flex flex-col items-center" id="services">
      <div className="text-center">
        <h3 className="text-md text-green-500 font-bold tracking-wider">
          Services
        </h3>
        <h2 className="text-4xl text-white py-3">Event Services We Provide</h2>
        <p className="text-gray-500 mb-8">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum id
          ligula porta felis euismod semper. Aenean eu leo quam.
        </p>
      </div>
      <div className="grid md:grid-cols-3 grid-cols-1 justify-center">
        {services.map((service, index) => (
          <div
            key={index}
            className="w-full sm:w-1/2 md:w-1/3 lg:w-full px-4 mb-4"
          >
            <div className="bg-none border-2 border-green-700 p-6 rounded-lg shadow-md">
              <h3 className="text-lg text-white font-bold mb-3">
                {service.title}
              </h3>
              <p className="text-white">{service.description}</p>
              <p className="flex border-2 cursor-pointer hover:bg-green-700  w-1/4 px-1 border-green-700 mt-2 text-white font-semibold">
                Read More{" "}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
