"use client";

import { motion } from "framer-motion";
import { Clock, CheckCircle, UtensilsCrossed, Truck } from "lucide-react";
import TableCard from "@/components/admin/TableCard";

export default function DashboardPage() {
  // Demo data
  const user = {
    name: "Ali Khan",
    id: "WTR-203",
    role: "Waiter",
    profile: "https://randomuser.me/api/portraits/men/75.jpg",
  };

  const stats = [
    { title: "Total Orders Today", value: 28, icon: UtensilsCrossed, color: "bg-yellow-50 text-yellow-700 border-yellow-100" },
    { title: "Orders Served", value: 22, icon: CheckCircle, color: "bg-green-50 text-green-700 border-green-100" },
    { title: "Ready for Pickup", value: 4, icon: Truck, color: "bg-blue-50 text-blue-700 border-blue-100" },
    { title: "Avg Serve Time", value: "15 min", icon: Clock, color: "bg-purple-50 text-purple-700 border-purple-100" },
  ];

  const tables = [
    {
      id: 1,
      number: 1,
      status: "occupied",
      customers: 3,
      orderItems: ["Chicken Noodles", "2 Drinks", "Fried Rice"],
      orderTime: new Date(Date.now() - 10 * 60 * 1000),
    },
    {
      id: 2,
      number: 2,
      status: "served",
      customers: 2,
      orderItems: ["Pasta", "1 Cold Coffee"],
      orderTime: new Date(Date.now() - 25 * 60 * 1000),
    },
    {
      id: 3,
      number: 3,
      status: "occupied",
      customers: 4,
      orderItems: ["Biryani", "3 Drinks"],
      orderTime: new Date(Date.now() - 5 * 60 * 1000),
    },
  ];

  return (
    <div className="space-y-10">

      {/* 🧑‍🍳 User Info Card */}
      <div className="bg-white border border-gray-100 rounded-2xl shadow-sm p-6 flex items-center justify-between flex-wrap gap-6">
        <div className="flex items-center gap-5">
          <img
            src={user.profile}
            alt={user.name}
            className="w-16 h-16 rounded-full border-2 border-yellow-400 object-cover shadow-sm"
          />
          <div>
            <h2 className="text-xl font-semibold text-gray-800">
              {user.name}
            </h2>
            <p className="text-sm text-gray-500 mt-1">ID: {user.id}</p>
            <p className="text-sm font-medium text-yellow-700 mt-2 bg-yellow-50 px-3 py-1 rounded-full w-fit">
              {user.role}
            </p>
          </div>
        </div>

        <div className="text-right text-gray-600">
          <p className="text-sm">Shift: 12 PM – 10 PM</p>
          <p className="text-sm mt-1">Date: {new Date().toDateString()}</p>
        </div>
      </div>

      {/* 📊 Stats Cards */}
      <motion.div
        className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        {stats.map((s, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.04 }}
            className={`rounded-2xl p-5 flex items-center gap-4 border shadow-sm transition-all duration-200 ${s.color}`}
          >
            <s.icon className="w-8 h-8 opacity-80" />
            <div>
              <p className="text-sm font-medium">{s.title}</p>
              <h3 className="text-xl font-semibold">{s.value}</h3>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* 🪑 Tables Section */}
      <div>
        <h3 className="text-2xl font-semibold mb-6 text-yellow-800 border-l-4 border-yellow-400 pl-3">
          Assigned Tables
        </h3>
        <motion.div
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          {tables.map((table) => (
            <TableCard key={table.id} table={table} />
          ))}
        </motion.div>
      </div>
    </div>
  );
}
