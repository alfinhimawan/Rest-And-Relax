import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import MostPicked from "./components/MostPicked";
import HouseWithBackyard from "./components/HouseWithBackyard";
import HotelWithLargeLivingRoom from "./components/HotelsWithLargeLivingRoom";
import ApartemenWithKitchenSet from "./components/ApartmentsWithKitchenSet";
import HappyStory from "./components/HappyStory";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="font-sans bg-white">
      <Navbar />
      <Hero />
      <MostPicked />
      <HouseWithBackyard />
      <HotelWithLargeLivingRoom />
      <ApartemenWithKitchenSet />
       <HappyStory />
      <Footer />
    </div>
  );
}

export default App;
