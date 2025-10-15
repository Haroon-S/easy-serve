"use client";

import { motion } from "framer-motion";
import { User, Clock, CheckCircle, UtensilsCrossed, Truck } from "lucide-react";
import TableCard from "@/components/admin/TableCard";

export default function DashboardPage() {
  // Demo data
  const waiter = {
    name: "Ali Khan",
    id: "WTR-203",
    profile:
      "https://randomuser.me/api/portraits/men/75.jpg",
  };

  const stats = [
    {
      title: "Total Orders Today",
      value: 28,
      icon: UtensilsCrossed,
      color: "bg-yellow-100 text-yellow-700",
    },
    {
      title: "Orders Served",
      value: 22,
      icon: CheckCircle,
      color: "bg-green-100 text-green-700",
    },
    {
      title: "Ready for Pickup",
      value: 4,
      icon: Truck,
      color: "bg-blue-100 text-blue-700",
    },
    {
      title: "Avg Serve Time",
      value: "15 min",
      icon: Clock,
      color: "bg-purple-100 text-purple-700",
    },
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
    <div className="space-y-8">
      {/* 🧑‍🍳 Waiter Info */}
      <div className="flex items-center justify-between flex-wrap gap-4">
        <div className="flex items-center gap-4">
          <img
            src={waiter.profile}
            alt={waiter.name}
            className="w-14 h-14 rounded-full border-2 border-yellow-400 object-cover"
          />
          <div>
            <h2 className="text-xl font-semibold text-gray-800">
              Welcome, {waiter.name}
            </h2>
            <p className="text-sm text-gray-500">ID: {waiter.id}</p>
          </div>
        </div>

        <div className="text-right">
          <p className="text-gray-600 text-sm">Shift: 12 PM – 10 PM</p>
          <p className="text-gray-600 text-sm">Date: {new Date().toDateString()}</p>
        </div>
      </div>

      {/* 📊 Stats Cards */}
      <motion.div
        className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        {stats.map((s, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.03 }}
            className={`rounded-2xl p-5 flex items-center gap-4 shadow-sm border ${s.color}`}
          >
            <s.icon className="w-8 h-8 opacity-80" />
            <div>
              <p className="text-sm font-medium">{s.title}</p>
              <h3 className="text-xl font-semibold">{s.value}</h3>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* 🪑 Tables */}
      <div>
        <h3 className="text-2xl font-semibold mb-6 text-yellow-700">
          Assigned Tables
        </h3>
        <motion.div
          className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
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
