"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import { useDispatch, useSelector } from 'react-redux';
import { addItem, increaseQty, decreaseQty } from '@/store/slices/cartSlice';
import MenuPic from "@/assets/menuImgs/menu-pic.jpg";

// -------------------------
// MenuItemCard Component
// -------------------------
export const MenuItemCard = ({ id, name, description, price, image }) => {
  console.log('name ==>', name);
  console.log('image ==>', image);
  
    const dispatch = useDispatch();

    // check if item exists in cart
    const cartItem = useSelector((state) =>
        state.cart.items.find((i) => i.id === id)
    );
    const quantity = cartItem?.qty || 0;

    const increment = () => {
        if (cartItem) {
            dispatch(increaseQty(id));
        } else {
            dispatch(addItem({ id, name, price, image, qty: 1 }));
        }
    };

    const decrement = () => {
        if (cartItem && quantity > 0) {
            dispatch(decreaseQty(id));
        }
    };

  return (
    <motion.div
      className="bg-white rounded-2xl shadow-md p-4 flex flex-col hover:shadow-lg transition-shadow duration-300"
      whileHover={{ scale: 1.03 }}
    >
      <div className="relative mb-3">
        <Image
          src={image ? image : MenuPic}
          alt={name}
          width={400}
          height={250}
          className="rounded-xl object-cover w-full h-48"
        />
        <span className="absolute top-2 right-2 bg-green-900 text-white px-3 py-1 rounded-md text-sm font-bold">
          Rs. {price}
        </span>
      </div>
      <h2 className="text-lg font-bold mb-1">{name}</h2>
      <p className="text-gray-700 mb-4 text-sm">{description}</p>

      <div className="flex items-center justify-center gap-3 mb-3">
        <button
          onClick={decrement}
          className="bg-green-900 text-white rounded-md px-2 py-1 text-lg hover:bg-green-800"
        >
          <Minus size={18} />
        </button>
        <span className="text-lg font-semibold w-6 text-center">
          {quantity}
        </span>
        <button
          onClick={increment}
          className="bg-green-900 text-white rounded-md px-2 py-1 text-lg hover:bg-green-800"
        >
          <Plus size={18} />
        </button>
      </div>

            {/* Add to Cart */}
            <button
                onClick={() =>
                    dispatch(addItem({ id, name, price, image, qty: 1 }))
                }
                className="bg-green-900 text-white font-semibold py-2 rounded-lg hover:bg-green-800 transition-colors"
            >
                Add to Cart
            </button>
        </motion.div>
    );
};

// -------------------------
// Data Array
// -------------------------
const menuItems = [
    {
        id: '1',
        name: 'Chicken Samosa',
        description: 'Crispy pastry filled with spiced chicken and herbs',
        price: 450,
        image: MenuPic,
    },
    {
        id: '2',
        name: 'Seekh Kebab',
        description: 'Grilled minced meat skewers with aromatic spices',
        price: 650,
        image: MenuPic,
    },
    {
        id: '3',
        name: 'Chicken Tikka',
        description: 'Marinated chicken pieces grilled to perfection',
        price: 750,
        image: MenuPic,
    },
    {
        id: '4',
        name: 'Chicken Karahi',
        description: 'Traditional chicken curry cooked in wok with tomatoes and spices',
        price: 1200,
        image: MenuPic,
    },
    {
        id: '5',
        name: 'Mutton Biryani',
        description: 'Fragrant rice layered with mutton and spices',
        price: 1500,
        image: MenuPic,
    },
    {
        id: '6',
        name: 'Beef Nihari',
        description: 'Slow-cooked beef stew with traditional spices',
        price: 1100,
        image: MenuPic,
    },
    {
        id: '7',
        name: 'Gulab Jamun',
        description: 'Sweet dumplings in rose syrup',
        price: 350,
        image: MenuPic,
    },
];

// -------------------------
// Main Component
// -------------------------
export default function MenuSection() {
  return (
    <section className="bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-3xl font-bold text-center text-blue-700 mb-2">
          Our Restaurants
        </h1>
        <p className="text-gray-500 text-center mb-10">
          Enjoy our exquisite cuisine from the comfort of your home
        </p>

        <h2 className="text-2xl font-bold text-green-900 mb-6">Menu Items</h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
                    {menuItems.map((item) => (
                        <MenuItemCard key={item.id} {...item} />
                    ))}
                </div>

        <h2 className="text-2xl font-bold text-green-900 my-6">
          Recommended For You{" "}
        </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
                    {menuItems.map((item) => (
                        <MenuItemCard key={item.id} {...item} />
                    ))}
                </div>

        <h2 className="text-2xl font-bold text-green-900 my-6">
          Most Popular Dishes
        </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
                    {menuItems.map((item) => (
                        <MenuItemCard key={item.id} {...item} />
                    ))}
                </div>
            </div>
        </section>
    );
}
