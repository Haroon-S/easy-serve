"use client";
import { MenuItemCard } from "@/components/landingPage/MenuItems";
import { useGetRestaurantMenusQuery } from "@/services/public/resturants";
import { useParams } from "next/navigation";
import React from "react";

function Restaurant() {
  const param = useParams();
  const { data } = useGetRestaurantMenusQuery(param.id, { skip: !param.id });
  console.log(data?.results);
  return (
    <section className="bg-gray-50 py-12 min-h-96">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-3xl font-bold text-center text-blue-700 mb-2">
          Our Restaurants
        </h1>
        <p className="text-gray-500 text-center mb-10">
          Enjoy our exquisite cuisine from the comfort of your home
        </p>
        {data?.results?.map((menu) => (
          <div key={menu.id}>
            <h2 className="text-2xl font-bold text-green-900 mb-6">
              {menu.name}
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
              {menu?.menu_items.map((item, index) => (
                <MenuItemCard key={index} {...item} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Restaurant;
