import React from "react";

function MostPicked() {
  const mostPickedItems = [
    {
      id: 1,
      image: "/assets/most-picked-1.svg",
      title: "House with Pool",
      location: "Jakarta, Indonesia",
      price: "$120/night",
    },
    {
      id: 2,
      image: "/assets/most-picked-2.svg",
      title: "Modern Apartment",
      location: "Bandung, Indonesia",
      price: "$90/night",
    },
    {
      id: 3,
      image: "/assets/most-picked-3.svg",
      title: "Cozy Cabin",
      location: "Bali, Indonesia",
      price: "$150/night",
    },
    {
      id: 4,
      image: "/assets/most-picked-4.svg",
      title: "Beachfront Villa",
      location: "Lombok, Indonesia",
      price: "$200/night",
    },
  ];

  return (
    <section id="mostpicked" className="py-16 bg-gray-50">
      <div className="max-w-screen-xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center text-gray-800">
          Most Picked
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {mostPickedItems.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-xl shadow-lg overflow-hidden transform hover:scale-105 transition duration-300 ease-in-out"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-56 object-cover transition duration-500 ease-in-out transform hover:scale-110"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">{item.title}</h3>
                <p className="text-sm text-gray-500">{item.location}</p>
                <p className="text-xl font-bold text-yellow-500 mt-2">{item.price}</p>
                <button className="mt-4 bg-yellow-500 text-white px-6 py-2 rounded-lg hover:bg-yellow-600 transition duration-300">
                  Book Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default MostPicked;
