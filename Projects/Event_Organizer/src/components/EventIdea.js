export default function EventIdea(params) {
  return (
    <div
      className="relative h-64 md:h-80 lg:h-96 bg-cover bg-center flex items-center text-white text-center"
      style={{
        backgroundImage:
          'url("https://images.pexels.com/photos/1047940/pexels-photo-1047940.jpeg?auto=compress&cs=tinysrgb&w=600")',
      }}
    >
      <div className="absolute inset-0 bg-black opacity-60"></div>
      <div className="relative container mx-auto py-16">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
          Let's Talk About Your Event Idea with Us
        </h2>
        <p className="text-lg md:text-xl lg:text-2xl mb-8">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum id
          ligula porta felis euismod semper. Aenean eu leo quam.
        </p>
        <button className="bg-none border-2 border-green-600 font-bold text-white px-6 py-3 hover:bg-green-600">
          Contact Us
        </button>
      </div>
    </div>
  );
}
