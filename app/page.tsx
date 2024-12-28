import Image from "next/image";

export default function Home() {
  return (
    <div className="">

      {/* Hero Section */}
      <section className=" text-black h-[70vh] flex mt-52 justify-center text-center">
        <div>
          <p className="text-md md:text-2xl">Elevate your looks, unleash your beauty</p>
          <h1 className="text-8xl md:text-9xl font-bold">ONE LASH AT A TIME</h1>

          <div className="mt-5">
            <button className="btn btn-sm bg-rae-button hover:bg-emerald-900 border-none text-white w-1/4">BOOK NOW</button>
          </div>
        </div>
      </section>

      {/* Most Popular Section */}
      <section className="bg-slate-100 text-black p-5 py-16 md:p-16">
        <div className="text-center md:text-left">
          <h1 className="text-4xl font-bold">MOST POPULAR</h1>
          <p>The most-loved lash styles</p>

          {/* Most Popular Cards */}
          <div className="mt-5 flex justify-center">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">

              <div className="card bg-rae-card text-rae-font w-80">
                <figure>
                  <img
                    src="/lash-models/1.jpg"
                    alt="Shoes" />
                </figure>
                <div className="card-body">
                  <h2 className="card-title text-2xl">
                    Classic Full Set
                  </h2>
                  <p className="text-justify">Classic lashes are the perfect way to enhance natural lashes. Its one individual lash is applied to one natural lash to create a set of longer and thicker lashes.</p>
                </div>
              </div>

              <div className="card bg-rae-card text-rae-font w-80">
                <figure>
                  <img
                    src="/lash-models/2.jpg"
                    alt="Shoes" />
                </figure>
                <div className="card-body">
                  <h2 className="card-title text-2xl">
                    Light Volume Full Set
                  </h2>
                  <p className="text-justify">Light volume lash extensions are softer, lighter and more natural looking than volume lash extensions. Its perfect for people who wants a subtle natural look.</p>
                </div>
              </div>

              <div className="card bg-rae-card text-rae-font w-80">
                <figure>
                  <img
                    src="/lash-models/3.jpg"
                    alt="Shoes" />
                </figure>
                <div className="card-body">
                  <h2 className="card-title text-2xl">
                    Volume Full Set
                  </h2>
                  <p className="text-justify">It is created by fanning several lashes and applying them to a single natural lash. This lash extensions will give you a fuller, fluffy and dramatic look.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Feedbacks */}
      <section className=" text-black p-5 py-16 md:p-16">
        <div className="text-center md:text-left">
          <h1 className="text-4xl font-bold">FEEDBACKS</h1>
          <p>Loved and trusted by many, see why our customers can’t get enough of their lashes.</p>

          {/* Most Popular Cards */}
          <div className="mt-5 flex justify-center">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">

              <div className="card bg-rae-card text-rae-font w-80">
                <figure>
                  <img
                    src="/lash-models/1.jpg"
                    alt="Shoes" />
                </figure>
                <div className="card-body">
                  <h2 className="card-title text-2xl">
                    Classic Full Set
                  </h2>
                  <p className="text-justify">Classic lashes are the perfect way to enhance natural lashes. Its one individual lash is applied to one natural lash to create a set of longer and thicker lashes.</p>
                </div>
              </div>

              <div className="card bg-rae-card text-rae-font w-80">
                <figure>
                  <img
                    src="/lash-models/2.jpg"
                    alt="Shoes" />
                </figure>
                <div className="card-body">
                  <h2 className="card-title text-2xl">
                    Light Volume Full Set
                  </h2>
                  <p className="text-justify">Light volume lash extensions are softer, lighter and more natural looking than volume lash extensions. Its perfect for people who wants a subtle natural look.</p>
                </div>
              </div>

              <div className="card bg-rae-card text-rae-font w-80">
                <figure>
                  <img
                    src="/lash-models/3.jpg"
                    alt="Shoes" />
                </figure>
                <div className="card-body">
                  <h2 className="card-title text-2xl">
                    Volume Full Set
                  </h2>
                  <p className="text-justify">It is created by fanning several lashes and applying them to a single natural lash. This lash extensions will give you a fuller, fluffy and dramatic look.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
