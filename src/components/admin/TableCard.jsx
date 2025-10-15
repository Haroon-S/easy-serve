"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Users, Coffee, Clock, MessageSquare } from "lucide-react";
import ReviewModal from "./ReviewModal";
import { cn } from "@/lib/utils";



export default function TableCard({ table }) {
  const { number, status, customers, orderCount, orderItems, orderTime } = table;
  const [openReview, setOpenReview] = useState(false);

  // Calculate minutes since order taken
  const minutesAgo = Math.floor((Date.now() - new Date(orderTime).getTime()) / 60000);

  const color =
    status === "occupied"
      ? "bg-yellow-100 border-yellow-300"
      : status === "served"
      ? "bg-green-100 border-green-300"
      : "bg-gray-100 border-gray-300";

  return (
    <>
      <motion.div
        whileHover={{ scale: 1.02 }}
        className={cn(
          "rounded-2xl border shadow-sm p-5 flex flex-col gap-3 transition relative",
          color
        )}
      >
        <div className="flex justify-between items-center">
          <h3 className="text-lg font-semibold text-gray-800">Table #{number}</h3>
          <span
            className={cn(
              "px-3 py-1 text-xs rounded-full font-medium",
              status === "occupied"
                ? "bg-yellow-200 text-yellow-800"
                : status === "served"
                ? "bg-green-200 text-green-800"
                : "bg-gray-200 text-gray-700"
            )}
          >
            {status.toUpperCase()}
          </span>
        </div>

        <div className="flex items-center gap-3 text-sm text-gray-600">
          <Users className="w-4 h-4" /> {customers || 0} Customers
          <Clock className="w-4 h-4 ml-2" /> {minutesAgo} mins ago
        </div>

        <div className="text-sm mt-2">
          <p className="font-medium text-gray-700">🍜 Order:</p>
          <ul className="list-disc ml-5 text-gray-600">
            {orderItems.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </div>

        <button
          onClick={() => setOpenReview(true)}
          className="mt-auto flex items-center justify-center gap-2 bg-yellow-500 hover:bg-yellow-600 text-white py-2 px-4 rounded-xl transition text-sm font-medium"
        >
          <MessageSquare className="w-4 h-4" />
          Add Customer Review
        </button>
      </motion.div>

      {/* Review Modal */}
      <ReviewModal open={openReview} onClose={() => setOpenReview(false)} tableNumber={number} />
    </>
  );
}
