'use client';

import { motion } from 'framer-motion';
import { TrendingUp, Clock, DollarSign } from 'lucide-react';

export default function ResultsSection() {
  const stats = [
    {
      icon: TrendingUp,
      metric: "2×",
      description: "faster decision-making cycles",
      subtext: "Reduce time from question to insight",
      bgColor: "bg-blue-50",
      iconColor: "text-blue-600",
      accentColor: "text-blue-600"
    },
    {
      icon: Clock,
      metric: "70%",
      description: "less time spent on manual reporting",
      subtext: "Free up analysts for strategic work",
      bgColor: "bg-green-50",
      iconColor: "text-green-600",
      accentColor: "text-green-600"
    },
    {
      icon: DollarSign,
      metric: "30%",
      description: "more ROI from data-driven decisions",
      subtext: "Better outcomes through better insights",
      bgColor: "bg-indigo-50",
      iconColor: "text-indigo-600",
      accentColor: "text-indigo-600"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section className="py-20 px-6 sm:px-8 lg:px-12 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Decisions That{' '}
            <span className="text-gray-900">Drive Growth</span>
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
            Smarter, faster choices with data at your fingertips.
          </p>
        </motion.div>
        
        {/* Stats Cards */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-8"
        >
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <motion.div 
                key={index}
                variants={itemVariants}
                whileHover={{ 
                  y: -8,
                  transition: { duration: 0.3 }
                }}
                className="group bg-white p-8 rounded-2xl border border-gray-200 hover:border-gray-300 hover:shadow-xl transition-all duration-300 relative"
              >
                {/* Icon Background */}
                <div className={`${stat.bgColor} w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <IconComponent className={`w-8 h-8 ${stat.iconColor}`} />
                </div>
                
                {/* Metric */}
                <div className="mb-4">
                  <div className={`text-4xl font-bold ${stat.accentColor} mb-2`}>
                    {stat.metric}
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {stat.description}
                  </h3>
                  <p className="text-sm text-gray-500">
                    {stat.subtext}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
        
        {/* Bottom Section */}
        {/* <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-gray-50 p-8 rounded-2xl max-w-4xl mx-auto border border-gray-200">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Join the data-driven revolution
            </h3>
            <p className="text-gray-600 mb-8 text-lg leading-relaxed">
              Companies using NimbleInsights report significant improvements in decision speed, 
              team productivity, and overall business outcomes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button 
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="bg-gray-900 hover:bg-gray-800 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl"
              >
                See Results in Action
              </motion.button>
              <motion.button 
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="border border-gray-300 hover:border-gray-900 text-gray-700 hover:text-gray-900 font-semibold py-3 px-8 rounded-lg transition-all duration-200 bg-white hover:bg-gray-50"
              >
                Download Case Studies
              </motion.button>
            </div>
          </div>
        </motion.div> */}
      </div>
    </section>
  );
}
