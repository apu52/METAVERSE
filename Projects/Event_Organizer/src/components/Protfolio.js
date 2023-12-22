export default function Protfolio(params) {
  const pastEvents = [
    {
      id: 1,
      title: "Summer Music Festival",
      date: "July 2023",
      image:
        "https://images.pexels.com/photos/433452/pexels-photo-433452.jpeg?auto=compress&cs=tinysrgb&w=600",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      id: 2,
      title: "Tech Conference",
      date: "September 2023",
      image:
        "https://images.pexels.com/photos/2608516/pexels-photo-2608516.jpeg?auto=compress&cs=tinysrgb&w=600",
      description: "Vestibulum id ligula porta felis euismod semper.",
    },
    {
      id: 3,
      title: "Food Tasting Expo",
      date: "October 2023",
      image:
        "https://images.pexels.com/photos/2342400/pexels-photo-2342400.jpeg?auto=compress&cs=tinysrgb&w=600",
      description:
        "Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum.",
    },
    {
      id: 4,
      title: "Wedding Cermony",
      date: "September 2023",
      image:
        "https://images.pexels.com/photos/169198/pexels-photo-169198.jpeg?auto=compress&cs=tinysrgb&w=600",
      description:
        " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum id ligula porta felis euismod semper. Aenean eu leo quam.",
    },
  ];
  return (
    <div className="flex flex-col items-center py-16" id="portfolio">
      <div className="text-center">
        <h3 className="text-md text-green-500 font-bold tracking-wider">
          Portfolio
        </h3>
        <h2 className="text-2xl md:text-4xl text-white py-3">
          Some of Our Events
        </h2>
        <p className="text-gray-500 mb-8">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum id
          ligula porta felis euismod semper. Aenean eu leo quam.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 justify-center">
        {pastEvents.map((event, index) => (
          <div key={event.id} className="relative group overflow-hidden">
            {/* Event Image */}
            <img
              src={event.image}
              alt={event.title}
              className="w-full h-48 object-cover transition-transform transform group-hover:scale-105"
            />
            {/* Hover Content */}
            <div className="absolute inset-0 bg-black bg-opacity-50 p-4 text-white opacity-0 group-hover:opacity-100 transition-opacity">
              <h3 className="text-lg font-bold mb-2">{event.title}</h3>
              <p className="text-sm">{event.date}</p>
              {/* Additional event details can be added here */}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
