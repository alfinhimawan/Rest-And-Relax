import React from "react";

function HouseWithBackyard() {
  const houseWithBackyardItems = [
    {
      id: 1,
      image: "/assets/house-1.svg",
      title: "Spacious House with Backyard",
      location: "Surabaya, Indonesia",
      price: "$130/night",
    },
    {
      id: 2,
      image: "/assets/house-2.svg",
      title: "Villa with a Big Garden Park",
      location: "Yogyakarta, Indonesia",
      price: "$180/night",
    },
    {
      id: 3,
      image: "/assets/house-3.svg",
      title: "Modern House with Pool & Backyard",
      location: "Bali, Indonesia",
      price: "$250/night",
    },
    {
      id: 4,
      image: "/assets/house-4.svg",
      title: "Country House with Large Backyard",
      location: "Lombok, Indonesia",
      price: "$210/night",
    },
  ];

  return (
    <section id="houses" className="py-16">
      <div className="max-w-screen-xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
          Houses with Spacious Backyards
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {houseWithBackyardItems.map((item) => (
            <div
              key={item.id}
              className="relative bg-gray-50 rounded-2xl shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300"
            >
              <div className="relative h-60">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover rounded-t-2xl"
                />
                <div className="absolute inset-0 bg-black opacity-25"></div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-600 mb-4">{item.location}</p>
                <div className="flex justify-between items-center">
                  <p className="text-lg font-bold text-yellow-500">
                    {item.price}
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

export default HouseWithBackyard;
