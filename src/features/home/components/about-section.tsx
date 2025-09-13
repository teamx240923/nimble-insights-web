'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { Rocket, Zap } from 'lucide-react';

export default function AboutSection() {

  return (
    <section className="py-20 px-6 sm:px-8 lg:px-12 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="space-y-6">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900">
                Our{' '}
                <span className="text-gray-900">Mission</span>
              </h2>
              <h3 className="text-2xl font-semibold text-gray-600">
                Born from a need for simple, actionable insights
              </h3>
            </div>
            
            <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
              <p>
                NimbleInsights is a product of{' '}
                <span className="font-semibold text-gray-900">Jigsaw Networks</span>, 
                created to free businesses from slow, manual reporting. We saw how teams wasted 
                hours preparing reports instead of making decisions — and built NimbleInsights to change that.
              </p>
              
              <p>
                Our mission is simple: empower businesses to make faster, smarter choices by 
                unlocking their data with AI.
              </p>
            </div>
            
            {/* Mission Points */}
            <div className="grid sm:grid-cols-2 gap-6 mt-8">
              <motion.div 
                whileHover={{ y: -4 }}
                className="bg-gray-50 p-6 rounded-xl border border-gray-200"
              >
                <div className="bg-blue-50 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <Rocket className="w-6 h-6 text-blue-600" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Our Vision</h4>
                <p className="text-gray-600 text-sm">
                  Every business decision backed by instant, accessible data insights.
                </p>
              </motion.div>
              
              <motion.div 
                whileHover={{ y: -4 }}
                className="bg-gray-50 p-6 rounded-xl border border-gray-200"
              >
                <div className="bg-green-50 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <Zap className="w-6 h-6 text-green-600" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Our Promise</h4>
                <p className="text-gray-600 text-sm">
                  Transform weeks of reporting into seconds of insights.
                </p>
              </motion.div>
            </div>
            
            {/* CTA */}
            <div className="pt-6">
              <motion.button 
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="bg-gray-900 hover:bg-gray-800 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl"
              >
                Learn more about Jigsaw Networks →
              </motion.button>
            </div>
          </motion.div>
          
          {/* Visual */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative"
          >
            <motion.div 
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
              className="relative z-10"
            >
              <Image
                src="/hero_img2.png"
                alt="About NimbleInsights - Team and Mission"
                width={600}
                height={400}
                className="rounded-2xl shadow-xl border border-gray-200"
              />
            </motion.div>
            {/* Background decoration */}
            <div className="absolute -top-6 -left-6 w-full h-full bg-gray-100 rounded-2xl -z-10"></div>
            
            {/* Floating stats */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
              className="absolute -bottom-6 -right-6 bg-white p-6 rounded-xl shadow-xl border border-gray-200 z-20"
            >
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900">500+</div>
                <div className="text-sm text-gray-600">Hours Saved Daily</div>
                <div className="text-xs text-gray-500 mt-1">Across Our Customers</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
        
        {/* Company Values */}
        {/* <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-20 pt-16 border-t border-gray-200"
        >
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-12">
            What Drives Us
          </h3>
          
          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -4 }}
                  className="text-center group"
                >
                  <div className={`${value.bgColor} w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent className={`w-8 h-8 ${value.iconColor}`} />
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">{value.title}</h4>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {value.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </motion.div> */}
      </div>
    </section>
  );
}
