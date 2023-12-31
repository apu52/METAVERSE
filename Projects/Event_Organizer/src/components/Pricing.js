export default function Pricing(params) {
  const eventPricing = [
    {
      type: "Party",
      price: "$500 - $2,000",
      description:
        "Perfect for birthdays, celebrations, and special occasions.",
      points: [
        "Personalized event theme and decor",
        "Entertainment options available",
        "Flexible package options",
      ],
    },
    {
      type: "Wedding",
      price: "$2,000 - $10,000",
      description: "Tailored packages for your dream wedding day.",
      points: [
        "Full-service wedding planning",
        "Venue selection assistance",
        "Customized catering options",
      ],
    },
    {
      type: "Corporate Events",
      price: "$1,000 - $5,000",
      description:
        "Professional planning for conferences, meetings, and corporate gatherings.",
      points: [
        "Logistical coordination for large groups",
        "Audio-visual setup and support",
        "Corporate branding integration",
      ],
    },
    {
      type: "Festival",
      price: "Contact for Quote",
      description:
        "Customized solutions for large-scale festivals and public events.",
      points: [
        "Site planning and logistics management",
        "Vendor coordination and selection",
        "Security and crowd control services",
      ],
    },
  ];
  return (
    <div className="container mx-auto py-16 px-3" id="pricing">
      <h2 className="text-3xl text-white font-bold mb-8">Event Pricing</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {eventPricing.map((event, index) => (
          <div
            key={index}
            className="bg-none border-4 border-green-700 p-6 rounded-lg shadow-md"
          >
            <h3 className="text-lg text-white font-bold mb-2">{event.type}</h3>
            <p className="text-white mb-4">{event.price}</p>
            <p className="text-white">{event.description}</p>
            <ul className="list-disc pl-6 text-gray-400">
              {event.points.map((point, pointIndex) => (
                <li key={pointIndex}>{point}</li>
              ))}
            </ul>
            <div className="text-center border-2 border-green-500 w-1/2 mt-2 mb-0 hover:bg-green-500 cursor-pointer px-2 py-2">
              <p className=" text-white  font-semibold">Get Started</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
