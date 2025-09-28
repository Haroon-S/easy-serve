"use client";
import { motion } from "framer-motion";
import { X, Plus, Minus, Trash2 } from "lucide-react";
import Image from "next/image";
import { useSelector, useDispatch } from "react-redux";
import {
  removeItem,
  increaseQty,
  decreaseQty,
  toggleCart,
} from "@/store/slices/cartSlice";

export default function CartDrawer() {
  const dispatch = useDispatch();
  const { isOpen, items } = useSelector((state) => state.cart);

  const subtotal = items.reduce((acc, item) => acc + item.price * item.qty, 0);
  const tax = subtotal * 0.15;
  const deliveryFee = 120;
  const discount = subtotal * 0.15;
  const total = subtotal + tax + deliveryFee - discount;

  return (
    <motion.div
      initial={{ x: "100%" }}
      animate={{ x: isOpen ? 0 : "100%" }}
      transition={{ type: "tween" }}
      className="fixed top-0 right-0 h-full w-[380px] bg-white shadow-xl z-50 flex flex-col"
    >
      {/* Header */}
      <div className="flex items-center justify-between p-4 border-b">
        <h2 className="text-lg font-semibold">Your Cart</h2>
        <button onClick={() => dispatch(toggleCart())}>
          <X className="w-5 h-5" />
        </button>
      </div>

      {/* Cart Items */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {items.length === 0 ? (
          <p className="text-gray-500 text-center">Your cart is empty</p>
        ) : (
          items.map((item) => (
            <div
              key={item.id}
              className="flex items-center justify-between border-b pb-3"
            >
              <div className="flex items-center space-x-3">
                <Image
                  src={item.image}
                  alt={item.name}
                  width={50}
                  height={50}
                  className="rounded"
                />
                <div>
                  <h4 className="font-medium">{item.title}</h4>
                  <p className="text-sm text-gray-500">Rs. {item.price}</p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <button
                  className="p-1 border rounded"
                  onClick={() => dispatch(decreaseQty(item.id))}
                >
                  <Minus className="w-4 h-4" />
                </button>
                <span>{item.qty}</span>
                <button
                  className="p-1 border rounded"
                  onClick={() => dispatch(increaseQty(item.id))}
                >
                  <Plus className="w-4 h-4" />
                </button>
                <button
                  className="p-1 text-red-500"
                  onClick={() => dispatch(removeItem(item.id))}
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))
        )}
      </div>

      {/* Summary */}
      <div className="p-4 border-t space-y-2">
        <div className="flex justify-between text-sm">
          <span>Total</span>
          <span>Rs. {subtotal}</span>
        </div>
        <div className="flex justify-between text-sm">
          <span>Tax 15%</span>
          <span>Rs. {tax}</span>
        </div>
        <div className="flex justify-between text-sm">
          <span>Delivery Fee</span>
          <span>Rs. {deliveryFee}</span>
        </div>
        <div className="flex justify-between text-sm text-green-600">
          <span>Discount 15%</span>
          <span>- Rs. {discount}</span>
        </div>
        <div className="flex justify-between font-semibold text-lg">
          <span>Grand Total</span>
          <span>Rs. {total}</span>
        </div>
        <button className="w-full bg-green-700 text-white py-2 rounded-lg mt-2">
          Checkout
        </button>
      </div>
    </motion.div>
  );
}
