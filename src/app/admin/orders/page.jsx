"use client";

import { motion } from "framer-motion";
import { Clock, Users, CheckCircle2 } from "lucide-react";

const orders = [
  {
    id: 1,
    table: 3,
    customer: "Ali Khan",
    items: ["Pasta", "Garlic Bread", "1 Pepsi"],
    status: "Preparing",
    time: "10 mins ago",
  },
  {
    id: 2,
    table: 1,
    customer: "Fatima",
    items: ["Biryani", "2 Lemonades"],
    status: "Served",
    time: "25 mins ago",
  },
];

export default function OrdersPage() {
  return (
    <div>
      <h2 className="text-2xl font-semibold mb-6 text-yellow-700">
        Current Orders
      </h2>

      <motion.div
        className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        {orders.map((order) => (
          <div
            key={order.id}
            className="border rounded-2xl shadow-sm p-5 bg-white hover:shadow-md transition"
          >
            <h3 className="text-lg font-semibold text-gray-800">
              Table #{order.table}
            </h3>
            <p className="text-sm text-gray-600 mt-1">
              <Users className="w-4 h-4 inline mr-1 text-yellow-600" />
              {order.customer}
            </p>
            <ul className="list-disc ml-5 text-gray-600 mt-2">
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
                className={`flex items-center gap-1 ${
                  order.status === "Served"
                    ? "text-green-600"
                    : "text-yellow-600"
                }`}
              >
                <CheckCircle2 className="w-4 h-4" />
                {order.status}
              </span>
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
}
