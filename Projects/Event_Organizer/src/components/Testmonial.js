import authorImg from "../assets/anime.jpg";
export default function Testmonial(params) {
  const testimonial = {
    author: "John Doe",
    role: "Event Attendee",
    quote:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum id ligula porta felis euismod semper. Aenean eu leo quam.Vestibulum id ligula porta felis euismod semper.Vestibulum id ligula porta felis euismod semper.",
    image: authorImg,
  };
  return (
    <div className="py-16 px-5">
      <div className="container mx-auto flex flex-col md:flex-row items-center">
        <div className="w-full md:w-1/2 pr-0 md:pr-8">
          {/* Image */}
          <img
            src="https://images.pexels.com/photos/1179581/pexels-photo-1179581.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt="Testimonial"
            className="w-full md:w-auto rounded-lg shadow-lg"
          />
        </div>
        <div className="w-full md:w-1/2 mt-8 md:mt-0">
          {/* Content */}
          <h3 className="text-md text-green-500 font-bold tracking-wider">
            Testimonial
          </h3>
          <h2 className="text-2xl md:text-4xl text-white font-semibold py-3 tracking-wide">
            Experience <br />
            They Have
          </h2>
          <p className="text-white text-base md:text-lg mb-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
            id ligula porta felis euismod semper.
          </p>

          <div className="text-center">
            <div className="mx-auto max-w-md">
              {/* Testimonial Quote */}
              <blockquote className="italic text-white">
                <p className="text-base md:text-md">{testimonial.quote}</p>
              </blockquote>

              {/* Testimonial Author Details */}
              <div className="flex items-center justify-center mt-6">
                <img
                  src={testimonial.image}
                  alt={testimonial.author}
                  className="w-10 h-10 md:w-12 md:h-12 rounded-full mr-4"
                />
                <div>
                  <p className="text-base md:text-lg text-white font-bold">
                    {testimonial.author}
                  </p>
                  <p className="text-white text-sm md:text-base">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
