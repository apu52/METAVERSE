export default function About(params) {
  return (
    <div className="py-16 px-4">
      <div
        className="container mx-auto flex flex-col md:flex-row items-center"
        id="about-us"
      >
        <div className="md:w-1/2 pr-8">
          {/* Image */}
          <img
            src="https://images.pexels.com/photos/1387174/pexels-photo-1387174.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt="About Event Organizer"
            className="rounded-lg shadow-lg w-full md:w-auto"
          />
        </div>
        <div className="md:w-1/2 mt-8 md:mt-0">
          {/* Content */}
          <h3 className="text-md text-green-500 font-bold ">About Us</h3>
          <h2 className="text-4xl text-white font-semibold py-3 tracking-wide">
            Make Your Event <br />
            Idea Come True
          </h2>
          <p className="text-white text-lg mb-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
            id ligula porta felis euismod semper. Aenean eu leo quam.
            Pellentesque ornare sem lacinia quam venenatis vestibulum. Fusce
            dapibus, tellus ac cursus commodo.
          </p>

          {/* Key Points */}
          <ul className="mt-6 text-white">
            <li className="flex items-center mb-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 mr-2 text-green-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 13l4 4L19 7"
                />
              </svg>
              Experienced event planning team
            </li>
            <li className="flex items-center mb-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 mr-2 text-green-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 13l4 4L19 7"
                />
              </svg>
              Tailored event solutions for every occasion
            </li>
            <li className="flex items-center mb-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 mr-2 text-green-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 13l4 4L19 7"
                />
              </svg>
              Seamless coordination and execution
            </li>
            {/* Add more key points as needed */}
          </ul>

          <div className="text-white border-2 w-full md:w-1/4 mt-4 py-2 px-2 border-green-700 hover:bg-green-700 cursor-pointer">
            <p>Read More</p>
          </div>
        </div>
      </div>
    </div>
  );
}
