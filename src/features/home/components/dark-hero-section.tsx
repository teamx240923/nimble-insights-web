'use client';

import NextImage from 'next/image';
import { motion } from 'framer-motion';
import { Calendar, Quote } from 'lucide-react';

export default function DarkHeroSection() {
  return (
    <section className="relative bg-gradient-to-br from-gray-900 via-slate-800 to-gray-900 py-20 px-6 sm:px-8 lg:px-12 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-8"
          >
            <div className="space-y-6">
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight"
              >
                Turn Data Into{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 animate-pulse">
                  Instant Answers
                </span>
              </motion.h1>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-xl text-gray-300 leading-relaxed max-w-xl"
              >
                Ask business questions in plain English and get real-time insights from your ERP, CRM, 
                or spreadsheets — no SQL, no dashboards, no delays.
              </motion.p>
            </div>
            
            {/* CTA Buttons */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <motion.button 
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="group bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 shadow-lg hover:shadow-cyan-500/25 flex items-center justify-center gap-3"
              >
                <Calendar className="w-5 h-5 group-hover:animate-bounce" />
                Book a Demo
              </motion.button>
              <motion.button 
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="group bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-400 hover:to-pink-400 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 shadow-lg hover:shadow-purple-500/25 flex items-center justify-center gap-3"
              >
                <Quote className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                Request a Custom Quote
              </motion.button>
            </motion.div>
          </motion.div>
          
          {/* Right Visual */}
          <motion.div 
            initial={{ opacity: 0, x: 50, scale: 0.9 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
          >
            <motion.div 
              whileHover={{ scale: 1.02, rotateY: 5 }}
              transition={{ duration: 0.3 }}
              className="relative z-10"
            >
             <NextImage
                src="./hero_img1.png"
                alt="NimbleInsights Dashboard Preview"
                width={600}
                height={400}
                className="rounded-lg shadow-2xl border border-gray-700"
                priority
              />
            </motion.div>
            {/* Background decoration */}
            <motion.div 
              animate={{ 
                rotate: [0, 5, -5, 0],
                scale: [1, 1.05, 1]
              }}
              transition={{ 
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="absolute -top-6 -right-6 w-full h-full bg-gradient-to-br from-cyan-900/40 via-blue-900/40 to-purple-900/40 rounded-lg -z-10"
            ></motion.div>
            
            {/* Floating elements */}
            <motion.div
              animate={{ y: [-10, 10, -10] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-4 -left-4 bg-gray-800 border border-cyan-400/30 p-3 rounded-full shadow-lg"
            >
              <div className="w-3 h-3 bg-cyan-400 rounded-full animate-pulse"></div>
            </motion.div>
            <motion.div
              animate={{ y: [10, -10, 10] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-4 -right-4 bg-gray-800 border border-purple-400/30 p-3 rounded-full shadow-lg"
            >
              <div className="w-3 h-3 bg-purple-400 rounded-full animate-pulse"></div>
            </motion.div>
          </motion.div>
        </div>
      </div>
      
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-20" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='1.5'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
      }}></div>
      
      {/* Animated gradient orbs */}
      <motion.div
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.2, 0.4, 0.2]
        }}
        transition={{ 
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute top-20 left-20 w-32 h-32 bg-gradient-to-r from-cyan-400/20 to-blue-400/20 rounded-full blur-xl"
      ></motion.div>
      <motion.div
        animate={{ 
          scale: [1.2, 1, 1.2],
          opacity: [0.1, 0.3, 0.1]
        }}
        transition={{ 
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute bottom-20 right-20 w-40 h-40 bg-gradient-to-r from-purple-400/20 to-pink-400/20 rounded-full blur-xl"
      ></motion.div>
      
      {/* Grid pattern overlay */}
      <div 
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }}
      ></div>
    </section>
  );
}
