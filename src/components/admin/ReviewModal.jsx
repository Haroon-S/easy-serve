"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, Star } from "lucide-react";
import { useState } from "react";

export default function ReviewModal({ open, onClose, tableNumber }) {
  const [name, setName] = useState("");
  const [rating, setRating] = useState(0);
  const [message, setMessage] = useState("");

  if (!open) return null;

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 bg-black/50 flex items-center justify-center z-[100]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <motion.div
          className="bg-white rounded-2xl w-full max-w-md p-6 shadow-xl relative"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
        >
          <button
            onClick={onClose}
            className="absolute top-3 right-3 p-2 rounded-full hover:bg-gray-100"
          >
            <X className="w-5 h-5" />
          </button>

          <h2 className="text-lg font-semibold text-yellow-700 mb-4">
            Add Review for Table #{tableNumber}
          </h2>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              console.log({ name, rating, message });
              onClose();
            }}
            className="flex flex-col gap-4"
          >
            <div>
              <label className="text-sm font-medium text-gray-700">Customer Name</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full mt-1 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
                placeholder="Enter customer name"
                required
              />
            </div>

            <div>
              <label className="text-sm font-medium text-gray-700 mb-1 block">Rating</label>
              <div className="flex gap-2">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star
                    key={star}
                    onClick={() => setRating(star)}
                    className={`w-6 h-6 cursor-pointer ${
                      star <= rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"
                    }`}
                  />
                ))}
              </div>
            </div>

            <div>
              <label className="text-sm font-medium text-gray-700">Review</label>
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                rows={3}
                className="w-full mt-1 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
                placeholder="Write your feedback..."
              />
            </div>

            <button
              type="submit"
              className="bg-yellow-500 hover:bg-yellow-600 text-white py-2 rounded-xl font-medium transition"
            >
              Submit Review
            </button>
          </form>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
