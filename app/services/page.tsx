import Image from "next/image";

export default async function Page() {
    return (
        <>
            <div className="hero bg-emerald-900 h-[30vh] flex justify-center text-white items-center text-center">
                <div className="hero-content ">
                    <div className="max-w-md">
                        <h1 className="text-5xl md:text-7xl font-bold">SERVICES</h1>
                        <p className="text-sm md:text-lg">
                            Discover our premium lash services, crafted to enhance your natural beauty with expert care and precision.
                        </p>
                    </div>
                </div>
            </div>

            {/* Lash Full Sets */}

            <div className="container py-14 mx-auto">
                <h1 className="font-bold text-4xl mb-4 text-center md:text-left uppercase">Lash Full Sets</h1>
                <div className="flex justify-center">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">

                        <div className="card bg-rae-card text-rae-font w-96 shadow-md">
                            <figure>
                                <Image
                                    width={450}
                                    height={300}
                                    src="/lash-models/1.jpg"
                                    alt="Shoes"
                                />
                            </figure>
                            <div className="card-body">
                                <h2 className="card-title text-3xl">CLASSIC FULL SET</h2>
                                <p className="italic text-justify">Classic lashes are the perfect way to enhance natural lashes. Its one individual lash is applied to one natural lash to create a set of longer and thicker lashes.</p>
                                <div className="card-actions justify-start mt-5">
                                    <div className="badge badge-outline"> $ 80.00</div>
                                    <div className="badge badge-outline">
                                        <Image
                                            src="/icons/clock.svg"
                                            width={16}
                                            height={16}
                                            alt="Clock Icon"
                                        // className="mr-2"
                                        />
                                        &nbsp; 2 hrs 30 mins</div>
                                </div>
                            </div>
                        </div>

                        <div className="card bg-rae-card text-rae-font w-96 shadow-md">
                            <figure>
                                <Image
                                    width={450}
                                    height={300}
                                    src="/lash-models/3.jpg"
                                    alt="Shoes"
                                />
                            </figure>
                            <div className="card-body">
                                <h2 className="card-title text-3xl">CLASSIC FULL SET</h2>
                                <p className="italic text-justify">Classic lashes are the perfect way to enhance natural lashes. Its one individual lash is applied to one natural lash to create a set of longer and thicker lashes.</p>
                                <div className="card-actions justify-start mt-5">
                                    <div className="badge badge-outline"> $ 80.00</div>
                                    <div className="badge badge-outline">
                                        <Image
                                            src="/icons/clock.svg"
                                            width={16}
                                            height={16}
                                            alt="Clock Icon"
                                        // className="mr-2"
                                        />
                                        &nbsp; 2 hrs 30 mins</div>
                                </div>
                            </div>
                        </div>

                        <div className="card bg-rae-card text-rae-font w-96 shadow-md">
                            <figure>
                                <Image
                                    width={450}
                                    height={300}
                                    src="/lash-models/2.jpg"
                                    alt="Shoes"
                                />
                            </figure>
                            <div className="card-body">
                                <h2 className="card-title text-3xl">CLASSIC FULL SET</h2>
                                <p className="italic text-justify">Classic lashes are the perfect way to enhance natural lashes. Its one individual lash is applied to one natural lash to create a set of longer and thicker lashes.</p>
                                <div className="card-actions justify-start mt-5">
                                    <div className="badge badge-outline"> $ 80.00</div>
                                    <div className="badge badge-outline">
                                        <Image
                                            src="/icons/clock.svg"
                                            width={16}
                                            height={16}
                                            alt="Clock Icon"
                                        // className="mr-2"
                                        />
                                        &nbsp; 2 hrs 30 mins</div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            {/* Lash Fills */}

            <div className="container py-14 mx-auto">
                <h1 className="font-bold text-4xl mb-4 text-center md:text-left uppercase">Lash Fills</h1>
                <div className="flex justify-center">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">

                        <div className="card bg-rae-card text-rae-font w-96 shadow-md">
                            <div className="card-body">
                                <h2 className="card-title text-3xl">CLASSIC FULL SET</h2>
                                <p className="italic text-justify">Classic lashes are the perfect way to enhance natural lashes. Its one individual lash is applied to one natural lash to create a set of longer and thicker lashes.</p>
                                <div className="card-actions justify-start mt-5">
                                    <div className="badge badge-outline"> $ 80.00</div>
                                    <div className="badge badge-outline">
                                        <Image
                                            src="/icons/clock.svg"
                                            width={16}
                                            height={16}
                                            alt="Clock Icon"
                                        // className="mr-2"
                                        />
                                        &nbsp; 2 hrs 30 mins</div>
                                </div>
                            </div>
                        </div>

                        <div className="card bg-rae-card text-rae-font w-96 shadow-md">
                            <div className="card-body">
                                <h2 className="card-title text-3xl">CLASSIC FULL SET</h2>
                                <p className="italic text-justify">Classic lashes are the perfect way to enhance natural lashes. Its one individual lash is applied to one natural lash to create a set of longer and thicker lashes.</p>
                                <div className="card-actions justify-start mt-5">
                                    <div className="badge badge-outline"> $ 80.00</div>
                                    <div className="badge badge-outline">
                                        <Image
                                            src="/icons/clock.svg"
                                            width={16}
                                            height={16}
                                            alt="Clock Icon"
                                        // className="mr-2"
                                        />
                                        &nbsp; 2 hrs 30 mins</div>
                                </div>
                            </div>
                        </div>

                        <div className="card bg-rae-card text-rae-font w-96 shadow-md">
                            <div className="card-body">
                                <h2 className="card-title text-3xl">CLASSIC FULL SET</h2>
                                <p className="italic text-justify">Classic lashes are the perfect way to enhance natural lashes. Its one individual lash is applied to one natural lash to create a set of longer and thicker lashes.</p>
                                <div className="card-actions justify-start mt-5">
                                    <div className="badge badge-outline"> $ 80.00</div>
                                    <div className="badge badge-outline">
                                        <Image
                                            src="/icons/clock.svg"
                                            width={16}
                                            height={16}
                                            alt="Clock Icon"
                                        // className="mr-2"
                                        />
                                        &nbsp; 2 hrs 30 mins</div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            {/* Extras */}

            <div className="container py-14 mx-auto">
                <h1 className="font-bold text-4xl mb-4 text-center md:text-left uppercase">Extras</h1>
                <div className="flex justify-center">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">

                        <div className="card bg-rae-card text-rae-font w-96 shadow-md">
                            <div className="card-body">
                                <h2 className="card-title text-3xl">CLASSIC FULL SET</h2>
                                <p className="italic text-justify">Classic lashes are the perfect way to enhance natural lashes. Its one individual lash is applied to one natural lash to create a set of longer and thicker lashes.</p>
                                <div className="card-actions justify-start mt-5">
                                    <div className="badge badge-outline"> $ 80.00</div>
                                    <div className="badge badge-outline">
                                        <Image
                                            src="/icons/clock.svg"
                                            width={16}
                                            height={16}
                                            alt="Clock Icon"
                                        // className="mr-2"
                                        />
                                        &nbsp; 2 hrs 30 mins</div>
                                </div>
                            </div>
                        </div>

                        <div className="card bg-rae-card text-rae-font w-96 shadow-md">
                            <div className="card-body">
                                <h2 className="card-title text-3xl">CLASSIC FULL SET</h2>
                                <p className="italic text-justify">Classic lashes are the perfect way to enhance natural lashes. Its one individual lash is applied to one natural lash to create a set of longer and thicker lashes.</p>
                                <div className="card-actions justify-start mt-5">
                                    <div className="badge badge-outline"> $ 80.00</div>
                                    <div className="badge badge-outline">
                                        <Image
                                            src="/icons/clock.svg"
                                            width={16}
                                            height={16}
                                            alt="Clock Icon"
                                        // className="mr-2"
                                        />
                                        &nbsp; 2 hrs 30 mins</div>
                                </div>
                            </div>
                        </div>

                        <div className="card bg-rae-card text-rae-font w-96 shadow-md">
                            <div className="card-body">
                                <h2 className="card-title text-3xl">CLASSIC FULL SET</h2>
                                <p className="italic text-justify">Classic lashes are the perfect way to enhance natural lashes. Its one individual lash is applied to one natural lash to create a set of longer and thicker lashes.</p>
                                <div className="card-actions justify-start mt-5">
                                    <div className="badge badge-outline"> $ 80.00</div>
                                    <div className="badge badge-outline">
                                        <Image
                                            src="/icons/clock.svg"
                                            width={16}
                                            height={16}
                                            alt="Clock Icon"
                                        // className="mr-2"
                                        />
                                        &nbsp; 2 hrs 30 mins</div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>

    );
}