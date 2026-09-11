import Banner from "../assets/banner-stack.png";
const Hero = () => {
  return (
    <section className="bg-white">
      <div className=" max-w-6xl mx-auto grid  items-center gap-10 px-4 py-16 md:px-6 lg:grid-cols-2 lg:py-24">
        {/* left side */}
        <div>
          <h1 className="text-4xl font-bold text-gray-950 md:text-4xl lg:text-5xl">
            Build Your Ideal
            <span className="block bg-linear-to-r from-orange-500 via-pink-400 to-violet-600 bg-clip-text text-transparent">
              Development Stack
            </span>
          </h1>
          <p className="text-gray-700 md:text-lg mt-6 max-w-6xl text-base leading-7">
            Explore frontend, backend, database, and tooling options, compare
            them side by side, and put together the stack that fits your next
            project.
          </p>

          {/* button */}

          <div className="mt-8 flex gap-4">
            <button className="rounded-xl bg-linear-to-r from-orange-500 to-pink-500 px-6 py-3 font-semibold text-white shadow-md transition hover:scale-105 cursor-pointer">
              Explore Technologies
            </button>
            <button className="rounded-xl border border-gray-300 px-6 py-3 font-semibold text-gray-700 transition hover:border-pink-500 hover:text-pink-500 hover:scale-105 cursor-pointer ">
              Learn More
            </button>
          </div>
        </div>

        {/* img */}
        <div className="flex justify-center lg:justify-end">
          <img src={Banner} alt="" className="w-full max-w-lg" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
