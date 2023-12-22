import {
  FaEnvelope,
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";
export default function Footer(params) {
  return (
    <footer
      className="relative text-white h-auto md:h-64 bg-cover bg-center py-12 px-3"
      style={{
        backgroundImage:
          'url("https://images.pexels.com/photos/761543/pexels-photo-761543.jpeg?auto=compress&cs=tinysrgb&w=600")',
      }}
      id="contact-us"
    >
      <div className="absolute inset-0 bg-black opacity-60"></div>
      <div className="relative container mx-auto flex flex-wrap justify-between">
        {/* Newsletter Subscription */}
        <div className="w-full md:w-1/2 lg:w-1/3 mb-8">
          <h3 className="text-xl font-bold mb-4">
            Subscribe to Our Newsletter
          </h3>
          <form className="flex items-center">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full text-white p-2 outline-none bg-transparent border-2 border-green-700"
            />
            <button
              type="submit"
              className="mx-2 font-semibold border-2 border-green-700 hover:bg-green-700 text-white p-2"
            >
              Subscribe
            </button>
          </form>
        </div>

        {/* Social Media Icons */}
        <div className="flex items-center space-x-4 mb-8 md:mb-0">
          <a href="facebook" className="text-2xl">
            <FaFacebook />
          </a>
          <a href="twitter" className="text-2xl">
            <FaTwitter />
          </a>
          <a href="instagram" className="text-2xl">
            <FaInstagram />
          </a>
          <a href="linkedin" className="text-2xl">
            <FaLinkedin />
          </a>
          <a href="mailto:info@example.com" className="text-2xl">
            <FaEnvelope />
          </a>
        </div>
      </div>

      {/* Bottom Text */}
      <div className="relative text-center text-white">
        <p>&copy; 2023 GEvent. All rights reserved.</p>
      </div>
    </footer>
  );
}
