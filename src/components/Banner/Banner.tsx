import bannerImg from "../../assets/banner-stack.png";

const Banner = () => {
  return (
    <div className="container mx-auto px-5">
      <div className="flex flex-col md:flex-row items-stretch gap-8 py-24">
        <div className="flex-1 flex flex-col justify-center items-center md:items-start text-center md:text-left bg-blue-50">
          <h1 className="font-inter font-extrabold text-6xl tracking-tight mb-6">
            <span className="text-slate-900">Build Your Ideal</span>
            <br />
            <span className="bg-[image:var(--gradient-bg)] bg-clip-text text-transparent">
              Development Stack
            </span>
          </h1>

          <p className="md:pr-40 text-lg leading-8 text-slate-600 mb-10">
            Explore frontend, backend, database, and tooling options, compare
            them side by side, and put together the stack that fits your next
            project.
          </p>
          <div className="flex gap-4 w-full md:w-auto font-inter font-semibold text-sm">
            <button className="btn flex-1 md:min-w-44 p-3 rounded-lg bg-[image:var(--gradient-bg)] text-white">
              Explore Technologies
            </button>
            <button className="btn flex-1 md:min-w-44 p-3 rounded-lg">
              Learn More
            </button>
          </div>
        </div>
        <div className="flex-1 flex flex-col justify-center items-center text-center bg-red-50">
          <img src={bannerImg} alt="Banner Stack" />
        </div>
      </div>
    </div>
  );
};

export default Banner;
