'use client';

import { useState } from 'react';


interface Service {
    id: number;
    title: string;
    description: string;
    price: string;
}

export default function BookAppointment() {
    const services: Service[] = [
        {
            id: 1,
            title: 'Classic Lash Full Set',
            description:
                'Enhances your natural lashes with individually applied extensions for a natural, elegant look.',
            price: '$50',
        },
        {
            id: 2,
            title: 'Volume Lash Full Set',
            description:
                'Provides a fuller, dramatic lash look by applying multiple lightweight extensions to each lash.',
            price: '$70',
        },
        {
            id: 3,
            title: 'Hybrid Lash Full Set',
            description:
                'Combines classic and volume lashes for a textured, unique appearance.',
            price: '$60',
        },
    ];

    // State for the cart
    const [cart, setCart] = useState<Service[]>([]);

    // Handle checkbox changes
    const handleCheckboxChange = (service: Service) => {
        const isAlreadyInCart = cart.some((item) => item.id === service.id);

        if (isAlreadyInCart) {
            // Remove from cart
            setCart(cart.filter((item) => item.id !== service.id));
        } else {
            // Add to cart
            setCart([...cart, service]);
        }
    };

    return (
        <>
            <div style={{ padding: '20px', margin: 'auto' }}>

                <div className="flex justify-end w-full right-4 md:hidden">
                    <div className='indicator fixed'>
                        <span className="indicator-item badge text-xs indicator-start">{cart.length}</span>
                        <details className="dropdown dropdown-end">
                            <summary className="btn btn-sm bg-rae-button hover:bg-rae-button m-1">
                                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#FFFFFF"><path d="M240-80q-33 0-56.5-23.5T160-160v-480q0-33 23.5-56.5T240-720h80q0-66 47-113t113-47q66 0 113 47t47 113h80q33 0 56.5 23.5T800-640v480q0 33-23.5 56.5T720-80H240Zm0-80h480v-480h-80v80q0 17-11.5 28.5T600-520q-17 0-28.5-11.5T560-560v-80H400v80q0 17-11.5 28.5T360-520q-17 0-28.5-11.5T320-560v-80h-80v480Zm160-560h160q0-33-23.5-56.5T480-800q-33 0-56.5 23.5T400-720ZM240-160v-480 480Z" /></svg>
                            </summary>
                            <div className="menu dropdown-content rounded-box bg-gray-100 w-60 p-2 shadow absolute z-10">
                                {/* Cart Section */}
                                <div>
                                    <h2>Selected Services:</h2>
                                    {cart.length > 0 ? (
                                        <ul>
                                            {cart.map((item) => (
                                                <li className='border-2 rounded-md mt-2' key={item.id}>
                                                    <div className='text-lg font-bold'>
                                                        {item.title}
                                                    </div>
                                                    <div className='text-sm'>
                                                        {item.price}.00
                                                    </div>
                                                </li>
                                            ))}
                                        </ul>
                                    ) : (
                                        <p>No services selected yet.</p>
                                    )}
                                </div>
                            </div>
                        </details>
                    </div>
                </div>

                {/* Services List */}
                <div className='grid md:grid-cols-3 gap-5 justify-between'>
                    <div className='mt-16 md:mt-0 col-span-2'>
                        {services.map((service) => (
                            <div
                                key={service.id}
                                style={{
                                    marginBottom: '20px',
                                    border: '1px solid #ddd',
                                    padding: '10px',
                                    borderRadius: '5px',
                                }}
                            >
                                <label>
                                    <input
                                        type="checkbox"
                                        onChange={() => handleCheckboxChange(service)}
                                        checked={cart.some((item) => item.id === service.id)} // Sync checkbox state
                                    />
                                    <strong className='ml-2 text-xl text-rae-font'>{service.title}</strong>
                                </label>
                                <p className='text-sm pb-3 text-justify'>{service.description}</p>
                                <p>
                                    <strong>Price: {service.price}</strong>
                                </p>
                            </div>
                        ))}
                    </div>

                    <div className='hidden md:block'>
                        {/* Cart Section */}
                        <div>
                            <h2>Selected Services:</h2>
                            {cart.length > 0 ? (
                                <ul>
                                    {cart.map((item) => (
                                        <li className='border-2 p-2 rounded-md mt-2' key={item.id}>
                                            <div className='text-lg font-bold'>
                                                {item.title}
                                            </div>
                                            <div className='text-sm'>
                                                {item.price}.00
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                            ) : (
                                <p>No services selected yet.</p>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}