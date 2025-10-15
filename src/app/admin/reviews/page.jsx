"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";

const reviews = [
  { id: 1, table: 1, name: "Ali", rating: 5, review: "Excellent service!" },
  { id: 2, table: 3, name: "Fatima", rating: 4, review: "Good food, nice ambiance." },
  { id: 3, table: 2, name: "Ahmed", rating: 3, review: "Could be faster." },
];

export default function ReviewsPage() {
  return (
    <div>
      <h2 className="text-2xl font-semibold mb-6 text-yellow-700">
        Customer Reviews
      </h2>

      <motion.div
        className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        {reviews.map((r) => (
          <div
            key={r.id}
            className="border rounded-2xl p-5 bg-white shadow-sm hover:shadow-md transition"
          >
            <div className="flex justify-between items-center">
              <h3 className="font-semibold text-gray-800">
                Table #{r.table}
              </h3>
              <div className="flex text-yellow-500">
                {Array.from({ length: r.rating }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-yellow-400" />
                ))}
              </div>
            </div>
            <p className="mt-2 text-gray-600 italic">"{r.review}"</p>
            <p className="text-sm text-gray-400 mt-1">– {r.name}</p>
          </div>
        ))}
      </motion.div>
    </div>
  );
}
