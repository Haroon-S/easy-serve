'use client';

import React from 'react';
import { MapPin, Phone, Utensils } from 'lucide-react';
import { motion } from 'framer-motion';

// RestaurantCard Component
const RestaurantCard = ({ name, description, address, phone }) => {
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

      <button className="bg-green-900 text-white font-semibold px-4 py-2 rounded-lg hover:bg-green-800 transition-colors">
        View Menu
      </button>
    </motion.div>
  );
};

// Data Array
const restaurants = [
  {
    name: 'Maple Kitchen #1',
    description: 'Casual dining with diverse menu',
    address: '101 Maple St',
    phone: '+1-202-000-0001',
  },
  {
    name: 'Urban Spoon #2',
    description: 'Casual dining with diverse menu',
    address: '102 Urban St',
    phone: '+1-202-000-0002',
  },
  {
    name: 'Blue Grill #3',
    description: 'Casual dining with diverse menu',
    address: '103 Blue St',
    phone: '+1-202-000-0003',
  },
  {
    name: 'Rustic Corner #4',
    description: 'Casual dining with diverse menu',
    address: '104 Rustic St',
    phone: '+1-202-000-0004',
  },
];

// Main Component
export default function RestaurantsList() {
  return (
    <section className="bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-3xl font-bold text-center text-blue-700 mb-10">
          Our Restaurants
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {restaurants.map((restaurant, index) => (
            <RestaurantCard key={index} {...restaurant} />
          ))}
        </div>
      </div>
    </section>
  );
}
