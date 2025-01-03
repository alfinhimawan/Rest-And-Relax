import React from "react";

function HotelsWithLargeLivingRoom() {
  const hotels = [
    {
      id: 1,
      image: "/assets/hotel-1.svg",
      title: "Luxury Villa with Spacious Living Room",
      location: "Jakarta, Indonesia",
      price: "$300/night",
    },
    {
      id: 2,
      image: "/assets/hotel-2.svg",
      title: "Modern House with Living Room View",
      location: "Bali, Indonesia",
      price: "$220/night",
    },
    {
      id: 3,
      image: "/assets/hotel-3.svg",
      title: "Cozy Mansion with Large Living Area",
      location: "Lombok, Indonesia",
      price: "$350/night",
    },
    {
      id: 4,
      image: "/assets/hotel-4.svg",
      title: "Beachside House with Open Concept Living",
      location: "Surabaya, Indonesia",
      price: "$400/night",
    },
  ];

  return (
    <section id="hotels" className="py-16 bg-gray-50">
      <div className="max-w-screen-xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center text-gray-800">
          Hotels with Large Living Room
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {hotels.map((hotel) => (
            <div
              key={hotel.id}
              className="bg-white rounded-lg shadow-xl overflow-hidden transform hover:scale-105 transition duration-300 ease-in-out"
            >
              <img
                src={hotel.image}
                alt={hotel.title}
                className="w-full h-56 object-cover transition duration-500 ease-in-out transform hover:scale-110"
              />
              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">{hotel.title}</h3>
                <p className="text-sm text-gray-500">{hotel.location}</p>
                <p className="text-xl font-bold text-yellow-500 mt-2">{hotel.price}</p>
                <button className="mt-4 bg-yellow-500 text-white py-2 px-4 rounded-full w-full hover:bg-yellow-600 transition duration-300">
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

export default HotelsWithLargeLivingRoom;
