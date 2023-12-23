export default function ChooseUs(params) {
  const chooseUsPoints = [
    "Experienced Event Planning Team",
    "Tailored Solutions for Every Occasion",
    "Seamless Coordination and Execution",
    "Creative and Innovative Approach",
    "Customer-Centric Service",
    "Proven Track Record of Successful Events",
  ];
  return (
    <div className="bg-none text-white py-16 px-3">
      <div className="container mx-auto flex flex-col md:flex-row items-center">
        <div className="md:w-full  pr-8">
          {/* Content */}
          <h2 className="text-md text-green-500 font-bold mb-4 tracking-wider">
            Why Choose Us
          </h2>
          <h2 className="text-2xl md:text-4xl tracking-wide font-bold mb-6">
            Very Responsible <br />
            With Your Event
          </h2>
          <p className="text-lg mb-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
            id ligula porta felis euismod semper. Aenean eu leo quam.
          </p>
          <div className="text-blue-500 cursor-pointer">
            <p>Explore the Difference</p>
          </div>

          {/* Points to Choose Us */}
          <ul className="list-disc pl-6 text-gray-300 mt-6">
            {chooseUsPoints.map((point, index) => (
              <li key={index} className="mb-2">
                {point}
              </li>
            ))}
          </ul>
        </div>
        <div className="md:w-full  mt-8 md:mt-0">
          {/* Image */}
          <img
            src="https://images.pexels.com/photos/154147/pexels-photo-154147.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt="Why Choose Us "
            className="rounded-lg shadow-lg w-full"
          />
        </div>
      </div>
    </div>
  );
}
