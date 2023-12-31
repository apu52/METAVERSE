export default function LandingImg({ image }) {
  return (
    <>
      <section className="absolute left-0 top-0 w-full h-full">
        <img
          src={image}
          className="w-full h-full object-cover  opacity-60 md:max-h-screen sm:max-h-screen "
          alt="About"
        />
      </section>
    </>
  );
}
