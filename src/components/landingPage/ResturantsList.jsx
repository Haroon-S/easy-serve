"use client";

import React from "react";
import { MapPin, Phone, Utensils } from "lucide-react";
import { motion } from "framer-motion";
import { useGetRestaurantsQuery } from "@/services/public/resturants";
import { useRouter } from "next/navigation";

// RestaurantCard Component
const RestaurantCard = ({ id, name, description, address, phone }) => {
  const router = useRouter();
  return (
    <motion.div
      className="bg-white rounded-2xl shadow-md p-6 flex flex-col items-center text-center hover:shadow-lg transition-shadow duration-300"
      whileHover={{ scale: 1.03 }}
    >
      <Utensils className="w-12 h-12 text-yellow-500 mb-4" />
      <h2 className="text-lg font-bold mb-2">{name}</h2>
      <p className="text-gray-600 mb-4">{description}</p>

      <div className="flex flex-col items-center text-gray-700 mb-4">
        <div className="flex items-center gap-2">
          <MapPin className="w-4 h-4" />
          <span>{address}</span>
        </div>
        <div className="flex items-center gap-2">
          <Phone className="w-4 h-4" />
          <span>{phone}</span>
        </div>
      </div>

      <button onClick={() => router.push(`/restaurant/${id}`)} className="bg-green-900 cursor-pointer text-white font-semibold px-4 py-2 rounded-lg hover:bg-green-800 transition-colors">
        View Menu
      </button>
    </motion.div>
  );
};

// Main Component
export default function RestaurantsList() {
  const { data, isLoading } = useGetRestaurantsQuery();

  return (
    <section className="bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-3xl font-bold text-center text-blue-700 mb-10">
          Our Restaurants
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {data?.results?.map((restaurant, index) => (
            <RestaurantCard
              key={restaurant?.id}
              id={restaurant?.id}
              phone={restaurant?.phone_number}
              address={restaurant?.address}
              name={restaurant?.name}
              description={restaurant?.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
