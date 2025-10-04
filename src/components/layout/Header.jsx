"use client";

import Link from "next/link";
import { ShoppingCart } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { toggleCart } from '@/store/slices/cartSlice'

export function Header() {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.cart.items);

  return (
    <header className="bg-green-900 text-white py-4 shadow">
      <div className="container mx-auto flex justify-between items-center px-4">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <span className="font-bold text-lg">🍴 Restaurant</span>
        </div>

        {/* Nav Links */}
        <nav className="flex gap-6 font-medium items-center">
          <Link href="/">Home</Link>
          <Link href="/auth/register">Register</Link>
          <Link href="/auth/login">Login</Link>

          {/* Cart Icon */}
          <button
            onClick={() => dispatch(toggleCart())}
            className="relative p-2 rounded-full hover:bg-green-800 transition"
          >
            <ShoppingCart className="w-6 h-6" />
            {items.length > 0 && (
              <span className="absolute -top-1 -right-1 bg-red-600 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                {items.reduce((acc, item) => acc + item.qty, 0)}
              </span>
            )}
          </button>
        </nav>
      </div>
    </header>
  );
}
