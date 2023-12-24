export default function PastInfo(params) {
  return (
    <div className="flex flex-wrap justify-center">
      {/* Card 1: Events Done */}
      <div className="w-full sm:w-1/2 lg:w-1/3 px-4 mb-8">
        <div
          className="relative bg-cover bg-center h-64 rounded-lg"
          style={{
            backgroundImage:
              'url("https://images.pexels.com/photos/2774556/pexels-photo-2774556.jpeg?auto=compress&cs=tinysrgb&w=600")',
          }}
        >
          <div className="absolute inset-0 bg-black opacity-50 rounded-lg"></div>
          <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
            <h3 className="text-lg font-bold mb-2">Events Done</h3>
            <p className="text-2xl font-semibold">150+</p>
          </div>
        </div>
      </div>

      {/* Card 2: Years of Experience */}
      <div className="w-full sm:w-1/2 lg:w-1/3 px-4 mb-8">
        <div
          className="relative bg-cover bg-center h-64 rounded-lg"
          style={{
            backgroundImage:
              'url("https://images.pexels.com/photos/1190297/pexels-photo-1190297.jpeg?auto=compress&cs=tinysrgb&w=600")',
          }}
        >
          <div className="absolute inset-0 bg-black opacity-50 rounded-lg"></div>
          <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
            <h3 className="text-lg font-bold mb-2">Years of Experience</h3>
            <p className="text-2xl font-semibold">10+</p>
          </div>
        </div>
      </div>

      {/* Card 3: Happy Clients */}
      <div className="w-full sm:w-1/2 lg:w-1/3 px-4 mb-8">
        <div
          className="relative bg-cover bg-center h-64 rounded-lg"
          style={{
            backgroundImage:
              'url("https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg?auto=compress&cs=tinysrgb&w=600")',
          }}
        >
          <div className="absolute inset-0 bg-black opacity-50 rounded-lg"></div>
          <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
            <h3 className="text-lg font-bold mb-2">Happy Clients</h3>
            <p className="text-2xl font-semibold">500+</p>
          </div>
        </div>
      </div>
    </div>
  );
}
