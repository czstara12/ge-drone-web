"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function Hero() {
  return (
    <section className="relative h-[600px] flex items-center justify-center overflow-hidden bg-slate-900 text-white">
      {/* Background Image Overlay */}
      <div className="absolute inset-0 bg-black/50 z-10" />
      <div 
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{ backgroundImage: 'url(https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=futuristic%20drone%20flying%20city%20skyline%20night%20cyberpunk%20style&image_size=landscape_16_9)' }}
      />

      <div className="container relative z-20 px-4 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-bold mb-6"
        >
          探索天空的无限可能
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-lg md:text-xl text-gray-200 mb-8 max-w-2xl mx-auto"
        >
          ZFLY 为您提供专业的工业级、消费级无人机解决方案，让飞行更简单、更智能、更高效。
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex justify-center gap-4"
        >
          <Link
            href="/products"
            className="inline-flex items-center px-6 py-3 rounded-full bg-primary hover:bg-primary/90 text-white font-medium transition-colors"
          >
            浏览产品
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
          <Link
            href="/about"
            className="inline-flex items-center px-6 py-3 rounded-full bg-white/10 hover:bg-white/20 text-white border border-white/20 font-medium transition-colors backdrop-blur-sm"
          >
            了解我们
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
