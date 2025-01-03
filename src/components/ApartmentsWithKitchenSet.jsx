import React from "react";

function ApartmentsWithKitchenSet() {
  const apartments = [
    {
      id: 1,
      image: "/assets/apartement-1.svg",
      title: "Modern Apartment with Fully Equipped Kitchen",
      location: "Jakarta, Indonesia",
      price: "$180/night",
    },
    {
      id: 2,
      image: "/assets/apartement-2.svg",
      title: "Cozy Apartment with Kitchen Island",
      location: "Bali, Indonesia",
      price: "$160/night",
    },
    {
      id: 3,
      image: "/assets/apartement-3.svg",
      title: "Chic Loft with Open Kitchen",
      location: "Surabaya, Indonesia",
      price: "$200/night",
    },
    {
      id: 4,
      image: "/assets/apartement-4.svg",
      title: "Spacious Apartment with Designer Kitchen",
      location: "Bandung, Indonesia",
      price: "$220/night",
    },
  ];

  return (
    <section id="apartments" className="py-16 bg-white">
      <div className="max-w-screen-xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-10">
          Apartments with Kitchen Set
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {apartments.map((apartment) => (
            <div
              key={apartment.id}
              className="relative bg-gray-50 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 ease-in-out"
            >
              <img
                src={apartment.image}
                alt={apartment.title}
                className="w-full h-56 object-cover rounded-t-lg"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {apartment.title}
                </h3>
                <p className="text-sm text-gray-500">{apartment.location}</p>
                <p className="text-lg font-bold text-yellow-500 mt-3">
                  {apartment.price}
                </p>
                <div className="mt-4">
                  <button className="w-full py-3 px-4 bg-yellow-500 text-white font-semibold rounded-lg hover:bg-yellow-600 transition-all duration-300">
                    Book Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ApartmentsWithKitchenSet;
