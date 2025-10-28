"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Clock,
  Users,
  ArrowRight,
  CheckCircle2,
  ChefHat,
  Utensils,
} from "lucide-react";

export default function OrdersPage() {
  const [orders, setOrders] = useState([
    { id: 1, table: 3, customer: "Ali Khan", items: ["Pasta", "Garlic Bread", "1 Pepsi"], status: "To Prepare", time: "10 mins ago" },
    { id: 2, table: 1, customer: "Fatima", items: ["Biryani", "2 Lemonades"], status: "Preparing", time: "25 mins ago" },
    { id: 3, table: 5, customer: "Hamza", items: ["Zinger Burger", "Fries", "Cola"], status: "Prepared", time: "5 mins ago" },
    { id: 4, table: 2, customer: "Zainab", items: ["Pizza", "Garlic Bread"], status: "Served", time: "30 mins ago" },
  ]);

  const statuses = ["To Prepare", "Preparing", "Prepared", "Served"];

  const moveOrder = (id, direction) => {
    setOrders((prev) =>
      prev.map((order) => {
        const currentIndex = statuses.indexOf(order.status);
        if (order.id === id) {
          const newIndex =
            direction === "next"
              ? Math.min(currentIndex + 1, statuses.length - 1)
              : Math.max(currentIndex - 1, 0);
          return { ...order, status: statuses[newIndex] };
        }
        return order;
      })
    );
  };

  const getStatusColor = (status) => {
    switch (status) {
      case "To Prepare":
        return "bg-yellow-50 border-yellow-200";
      case "Preparing":
        return "bg-blue-50 border-blue-200";
      case "Prepared":
        return "bg-green-50 border-green-200";
      case "Served":
        return "bg-gray-50 border-gray-200";
      default:
        return "bg-white border-gray-200";
    }
  };

  const getHeaderColor = (status) => {
    switch (status) {
      case "To Prepare":
        return "bg-yellow-100 text-yellow-800 border-yellow-300";
      case "Preparing":
        return "bg-blue-100 text-blue-800 border-blue-300";
      case "Prepared":
        return "bg-green-100 text-green-800 border-green-300";
      case "Served":
        return "bg-gray-100 text-gray-800 border-gray-300";
      default:
        return "bg-gray-50";
    }
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case "To Prepare":
        return <ChefHat className="w-5 h-5 text-yellow-600" />;
      case "Preparing":
        return <Utensils className="w-5 h-5 text-blue-600" />;
      case "Prepared":
        return <CheckCircle2 className="w-5 h-5 text-green-600" />;
      case "Served":
        return <CheckCircle2 className="w-5 h-5 text-gray-500" />;
    }
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between bg-gradient-to-r from-yellow-50 to-yellow-100 border border-yellow-200 p-5 rounded-2xl shadow-sm">
        <h1 className="text-2xl font-bold text-yellow-800">
          🍽️ Orders Status
        </h1>
        <p className="text-sm text-gray-500">{new Date().toLocaleString()}</p>
      </div>

      {/* Columns */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
        {statuses.map((status) => (
          <motion.div
            key={status}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className={`rounded-2xl shadow-sm border ${getStatusColor(status)} flex flex-col min-h-[500px]`}
          >
            {/* Column Header */}
            <div
              className={`p-3 flex items-center justify-between rounded-t-2xl border-b font-semibold ${getHeaderColor(
                status
              )}`}
            >
              <div className="flex items-center gap-2">
                {getStatusIcon(status)}
                <span>{status}</span>
              </div>
              <span className="text-xs font-medium bg-white px-2 py-1 rounded-md shadow-sm">
                {orders.filter((o) => o.status === status).length}
              </span>
            </div>

            {/* Orders in Column */}
            <div className="flex-1 overflow-y-auto p-3 space-y-4">
              {orders
                .filter((o) => o.status === status)
                .map((order) => (
                  <motion.div
                    key={order.id}
                    whileHover={{ scale: 1.02 }}
                    className="bg-white border border-gray-100 rounded-xl shadow-sm p-4 transition"
                  >
                    <h3 className="text-lg font-semibold text-gray-800">
                      Table #{order.table}
                    </h3>
                    <p className="text-sm text-gray-600 mt-1 flex items-center">
                      <Users className="w-4 h-4 mr-1 text-yellow-600" />
                      {order.customer}
                    </p>

                    <ul className="list-disc ml-5 text-gray-600 mt-2 text-sm">
                      {order.items.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>

                    <div className="flex justify-between items-center mt-4 text-sm">
                      <span className="flex items-center text-gray-500">
                        <Clock className="w-4 h-4 mr-1" />
                        {order.time}
                      </span>
                      <span
                        className={`text-xs px-2 py-1 rounded-md ${
                          order.status === "Served"
                            ? "bg-gray-100 text-gray-600"
                            : "bg-yellow-50 text-yellow-700"
                        }`}
                      >
                        {order.status}
                      </span>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex justify-end gap-2 mt-3">
                      {order.status !== "To Prepare" && (
                        <button
                          onClick={() => moveOrder(order.id, "prev")}
                          className="text-xs px-3 py-1 rounded-md border text-gray-600 hover:bg-gray-100 transition"
                        >
                          ⬅ Back
                        </button>
                      )}
                      {order.status !== "Served" && (
                        <button
                          onClick={() => moveOrder(order.id, "next")}
                          className="text-xs px-3 py-1 rounded-md bg-yellow-600 text-white hover:bg-yellow-700 transition"
                        >
                          Move ➜
                        </button>
                      )}
                    </div>
                  </motion.div>
                ))}

              {/* Empty State */}
              {orders.filter((o) => o.status === status).length === 0 && (
                <div className="text-center text-sm text-gray-400 py-10 italic">
                  No orders in this stage
                </div>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
