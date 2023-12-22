import homeImg from "../assets/homeimg.jpg";

export default function Home(params) {
  return (
    <>
      <div className="relative bg-gray-800 text-white" id="home">
        {/* Image */}
        <img
          src={homeImg}
          alt="Home Section "
          className="object-cover w-full h-screen"
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-black opacity-50"></div>
        {/* Content */}
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center">
          <h2 className="text-3xl font-bold mb-4">
            Welcome to Our Event Platform
          </h2>
          <p className="text-lg mb-6">
            Discover and organize amazing events in your area.
          </p>
          <button className="bg-none border-2 font-semibold border-green-700 text-white px-6 py-3  hover:bg-green-600">
            Explore Events
          </button>
        </div>
      </div>
      <div className="relative  container mx-auto max-w-3xl mt-8 flex flex-col md:flex-row justify-center space-y-8 md:space-y-0 md:space-x-8 px-4">
        {/* Card 1 */}
        <div className="border-2 border-green-700 text-white p-6 rounded-md shadow-md md:w-1/3">
          <h3 className="text-xl text-center font-bold mb-2">Find Events</h3>
          <p className="text-center">
            Explore a variety of events happening around you. From concerts to
            workshops, we've got you covered.
          </p>
        </div>
        {/* Card 2 */}
        <div className="border-2 border-green-700 text-white p-6 rounded-md shadow-md md:w-1/3">
          <h3 className="text-xl text-center font-bold mb-2">
            Organize Your Own
          </h3>
          <p className="text-center">
            Host your own events and reach a broader audience. Manage attendees
            and make your event a success.
          </p>
        </div>
        {/* Card 3 */}
        <div className="border-2 border-green-700 text-white p-6 rounded-md shadow-md md:w-1/3">
          <h3 className="text-xl text-center font-bold mb-2">
            Connect with Attendees
          </h3>
          <p className="text-center">
            Engage with attendees, get feedback, and build a community around
            your events. Foster meaningful connections.
          </p>
        </div>
      </div>
    </>
  );
}
