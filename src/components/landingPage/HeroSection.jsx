'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import BannerImg from '@/assets/banner.jpg';

export default function HeroSection() {
  return (
    <section className="relative w-full h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Background Image + Overlay */}
      <div className="absolute inset-0">
        <div className="relative w-full h-full">
          <Image
            src={BannerImg}
            alt="Delicious food background"
            fill
            priority
            className="object-cover"
          />
          {/* Overlay */}
          <div className="absolute inset-0 bg-black/50 z-10" />
        </div>
      </div>

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-20 text-center text-white px-4 max-w-2xl"
      >
        <h1 className="text-3xl md:text-5xl font-bold mb-4">
          Welcome to <span className="text-yellow-400">Easy Serve</span>
        </h1>
        <p className="text-base md:text-lg text-gray-200 mb-6">
          Experience culinary excellence in an atmosphere of refined elegance
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button className="bg-yellow-400 text-black hover:bg-yellow-500 text-lg px-6 py-3 rounded-2xl shadow-lg">
            Make Reservation
          </Button>
          <Button
            variant="outline"
            className="border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black text-lg px-6 py-3 rounded-2xl"
          >
            View Menu
          </Button>
        </div>
      </motion.div>
    </section>
  );
}
