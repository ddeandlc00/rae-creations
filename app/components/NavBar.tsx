import Image from "next/image";
import NavLinks from "./NavLinks";
import Link from "next/link";

export default function NavBar() {
    return (
        <div className="container-fluid top-0 sticky z-50">
            <div className="navbar bg-base-100 mx-auto md:px-10">
                <div className="flex-1">
                    <Link href="/" className="px-5 md:px-0">
                        <Image
                            src="/logo.png"
                            width={80}
                            height={60}
                            alt="Rae's Creations Logo"
                        />
                    </Link>
                </div>

                {/* Mobile Screen */}
                <div className="flex-none md:hidden z-50 relative">
                    <div>
                        <details className="dropdown dropdown-end">
                            <summary className="btn btn-ghost m-1">
                                <svg
                                    fill="none"
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    viewBox="0 0 24 24"
                                    className="w-6 h-6"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M4 6h16M4 12h16m-7 6h7"
                                    ></path>
                                </svg>
                            </summary>
                            <div className="menu dropdown-content rounded-box bg-gray-100 w-52 p-2 shadow absolute z-10">
                                <NavLinks />
                                <hr className="bg-gray-500" />
                                <li className="pt-5">
                                    <div className="flex space-x-2">
                                        <p>Follow Us: </p>
                                        <Image
                                            src="/icons/facebook.png"
                                            alt="Facebook"
                                            width={16}
                                            height={16}
                                        />
                                        <Image
                                            src="/icons/instagram.png"
                                            alt="Instagram"
                                            width={16}
                                            height={16}
                                        />
                                    </div>
                                </li>
                            </div>
                        </details>
                    </div>
                </div>


                {/* Tablets and PC, and Laptops */}
                <div className="mr-10 hidden md:flex">
                    <ul className="menu menu-horizontal rounded-box">
                        <NavLinks />
                    </ul>
                </div>

                {/* SocMed Icons */}
                <div className="px-5 hidden md:flex space-x-5">
                    <Image
                        src="/icons/facebook.png"
                        alt="Facebook"
                        width={24}
                        height={24}
                    />

                    <Image
                        src="/icons/instagram.png"
                        alt="Instagram"
                        width={24}
                        height={24}
                    />
                </div>
            </div>
        </div>
    );
}