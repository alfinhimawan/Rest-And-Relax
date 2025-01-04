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
    <section id="apartments" className="py-16">
      <div className="max-w-screen-xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
          Apartments with Kitchen Set
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {apartments.map((apartment) => (
            <div
              key={apartment.id}
              className="relative bg-gray-50 rounded-2xl shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300"
            >
              <div className="relative h-60">
                <img
                  src={apartment.image}
                  alt={apartment.title}
                  className="w-full h-full object-cover rounded-t-2xl"
                />
                <div className="absolute inset-0 bg-black opacity-25"></div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {apartment.title}
                </h3>
                <p className="text-sm text-gray-600 mb-4">{apartment.location}</p>
                <div className="flex justify-between items-center">
                  <p className="text-lg font-bold text-yellow-500">
                    {apartment.price}
                  </p>
                  <button className="text-yellow-500 hover:text-white hover:bg-yellow-500 border-2 border-yellow-500 px-4 py-2 rounded-full transition-colors duration-300">
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
