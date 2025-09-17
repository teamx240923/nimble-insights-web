'use client';

import NextImage from 'next/image';
import { motion } from 'framer-motion';

export default function HeroSection() {
  const scrollToHowItWorks = () => {
    const howItWorksSection = document.getElementById('how-it-works');
    if (howItWorksSection) {
      howItWorksSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative bg-white py-20 px-6 sm:px-8 lg:px-12 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-8"
          >
            {/* Badge/Label */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center px-4 py-2 bg-blue-50 text-blue-700 text-sm font-medium rounded-full border border-blue-200"
            >
              AI-Powered Analytics Platform
            </motion.div>
            
            {/* Main Headline */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="space-y-4"
            >
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Turn Data Into
                <br />
                <span className="text-blue-600">Instant Answers.</span>
              </h1>
            </motion.div>
            
            {/* Subheadline */}
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-xl text-gray-600 leading-relaxed"
            >
              Ask business questions in plain English and get real-time insights from your ERP, CRM, or spreadsheets — no SQL, no dashboards, no delays.
            </motion.p>
            
            {/* CTA Button */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="pt-4"
            >
              <motion.button 
                onClick={scrollToHowItWorks}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl text-lg"
              >
                Get Started
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
            {/* Main Dashboard Image */}
            <div className="relative bg-white rounded-2xl shadow-2xl border border-gray-200 p-6">
              <NextImage
                src="/hero_img1.png"
                alt="NimbleInsights Dashboard Preview"
                width={600}
                height={400}
                className="rounded-xl w-full h-auto"
                priority
              />
              
              {/* Floating Insight Cards */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 1.2 }}
                className="absolute -left-4 top-1/4 bg-white rounded-xl shadow-xl border border-gray-200 p-4 max-w-xs hidden lg:block"
              >
                <div className="flex items-center space-x-3 mb-3">
                  <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                  <span className="text-sm font-medium text-gray-600">AUTONOMOUS INSIGHTS</span>
                </div>
                <div className="space-y-2">
                  <h4 className="font-semibold text-gray-900">Revenue Growth</h4>
                  <div className="text-2xl font-bold text-green-600">+24.5%</div>
                  <p className="text-sm text-gray-500">Mobile users showing strong performance</p>
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 1.4 }}
                className="absolute -right-4 bottom-1/4 bg-white rounded-xl shadow-xl border border-gray-200 p-4 max-w-xs hidden lg:block"
              >
                <div className="flex items-center space-x-3 mb-3">
                  <div className="w-3 h-3 bg-blue-400 rounded-full animate-pulse"></div>
                  <span className="text-sm font-medium text-gray-600">INSIGHTS GENERATED</span>
                </div>
                <div className="space-y-2">
                  <h4 className="font-semibold text-gray-900">This Week</h4>
                  <div className="text-2xl font-bold text-blue-600">124</div>
                  <p className="text-sm text-gray-500">Actionable insights discovered</p>
                </div>
              </motion.div>
            </div>
            
            {/* Background decoration */}
            <div className="absolute -top-4 -right-4 w-full h-full bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl -z-10"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
