'use client';

import { motion } from 'framer-motion';
import { MessageSquare, Zap, Link, Clock, Shield, Rocket, Star } from 'lucide-react';

export default function SolutionSection() {
  const coreFeatures = [
    {
      icon: MessageSquare,
      title: "Natural Language Queries",
      description: "Ask \"Show me vendor spend last month.\"",
      color: "from-blue-500 to-cyan-500",
      highlight: "Core Feature"
    },
    {
      icon: Zap,
      title: "Instant Insights",
      description: "Get summaries in seconds.",
      color: "from-yellow-500 to-orange-500",
      highlight: "Core Feature"
    },
    {
      icon: Link,
      title: "ERP/CRM Integrations",
      description: "Works with Navision, Salesforce, Google Sheets & more.",
      color: "from-green-500 to-emerald-500",
      highlight: "Core Feature"
    }
  ];

  const additionalFeatures = [
    {
      icon: Clock,
      title: "24×7 Availability",
      description: "Always ready to answer.",
      color: "from-purple-500 to-violet-500"
    },
    {
      icon: Shield,
      title: "Role-Based Access",
      description: "Secure insights tailored to user roles.",
      color: "from-indigo-500 to-blue-500"
    },
    {
      icon: Rocket,
      title: "Unlimited Scale",
      description: "Handle 10 or 10,000 queries with ease.",
      color: "from-emerald-500 to-teal-500"
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
    hidden: { opacity: 0, scale: 0.8, rotateY: -15 },
    visible: {
      opacity: 1,
      scale: 1,
      rotateY: 0,
      transition: {
        duration: 0.8
      }
    }
  };

  const floatingVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  };

  return (
    <section className="py-20 px-6 sm:px-8 lg:px-12 bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-100">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-3 mb-6 px-4 py-2 bg-gradient-to-r from-blue-50 to-purple-50 rounded-full border border-blue-200 shadow-sm">
            <Star className="w-5 h-5 text-blue-600" />
            <span className="text-blue-800 font-semibold">The Solution</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Your{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600">
              AI Data Assistant
            </span>
          </h2>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-xl text-gray-600 leading-relaxed max-w-4xl mx-auto"
          >
            NimbleInsights connects directly to your business systems and lets anyone ask questions 
            in plain English. No SQL, no dashboards, no bottlenecks — just instant answers.
          </motion.p>
        </motion.div>
        
        {/* Central Hub with Core Features */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="relative mb-20"
        >
          {/* Central Hub */}
          <motion.div 
            variants={itemVariants}
            className="relative mx-auto w-80 h-80 bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-600 rounded-full flex items-center justify-center shadow-2xl mb-12"
          >
            <div className="text-center text-white">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="w-24 h-24 mx-auto mb-4"
              >
                <Rocket className="w-24 h-24" />
              </motion.div>
              <h3 className="text-2xl font-bold mb-2">NimbleInsights</h3>
              <p className="text-blue-100">Your AI Data Assistant</p>
            </div>                      
          </motion.div>

          {/* Core Features - Radiating from center */}
        </motion.div>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {coreFeatures.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <motion.div 
                  key={index}
                  variants={itemVariants}
                  whileHover={{ 
                    y: -8,
                    scale: 1.02,
                    transition: { duration: 0.3, ease: "easeOut" }
                  }}
                  className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-gray-200 relative overflow-hidden"
                >
                  {/* Subtle background gradient */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-5 group-hover:opacity-10 transition-opacity duration-300`}></div>
                  
                  <div className="flex flex-col items-center text-center relative z-10">
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.color} group-hover:scale-110 transition-transform duration-300 flex items-center justify-center mb-6 shadow-lg`}>
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-gray-700 transition-colors">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed group-hover:text-gray-500 transition-colors">
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>

        {/* Additional Features - Horizontal Flow */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-16"
        >
          <motion.h3 
            variants={floatingVariants}
            className="text-2xl font-semibold text-center text-gray-900 my-12"
          >
            Built for Enterprise
          </motion.h3>
          
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {additionalFeatures.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <motion.div 
                  key={index}
                  variants={floatingVariants}
                  whileHover={{ 
                    y: -4,
                    scale: 1.02,
                    transition: { duration: 0.3, ease: "easeOut" }
                  }}
                  className="group bg-white p-6 rounded-xl border border-gray-100 hover:border-gray-200 hover:shadow-lg transition-all duration-300 relative overflow-hidden"
                >
                  {/* Subtle background gradient */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-3 group-hover:opacity-8 transition-opacity duration-300`}></div>
                  
                  <div className="flex items-start gap-4 relative z-10">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${feature.color} group-hover:scale-110 transition-transform duration-300 flex items-center justify-center flex-shrink-0 shadow-md`}>
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1 group-hover:text-gray-700 transition-colors">
                        {feature.title}
                      </h4>
                      <p className="text-sm text-gray-600 leading-relaxed group-hover:text-gray-500 transition-colors">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
        
        {/* Bottom CTA */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-slate-700 via-slate-600 to-slate-800 text-white p-10 rounded-3xl shadow-2xl max-w-5xl mx-auto relative overflow-hidden">
            {/* Animated background elements */}
            <div className="absolute top-0 left-0 w-full h-full">
              <motion.div 
                animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-6 left-12 w-4 h-4 bg-white bg-opacity-30 rounded-full"
              ></motion.div>
              <motion.div 
                animate={{ scale: [1, 1.3, 1], opacity: [0.2, 0.5, 0.2] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute bottom-8 right-16 w-3 h-3 bg-white bg-opacity-40 rounded-full"
              ></motion.div>
              <motion.div 
                animate={{ scale: [1, 1.1, 1], opacity: [0.4, 0.7, 0.4] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                className="absolute top-1/2 right-10 w-2 h-2 bg-white bg-opacity-50 rounded-full"
              ></motion.div>
            </div>
            
            <div className="relative z-10">
              <motion.h3 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="text-3xl font-bold mb-6"
              >
                Ready to unlock your data&apos;s potential?
              </motion.h3>
              <motion.p 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
                className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto"
              >
                Join hundreds of businesses already making faster, data-driven decisions with their AI assistant.
              </motion.p>
              <motion.button 
                whileHover={{ scale: 1.05, y: -3 }}
                whileTap={{ scale: 0.98 }}
                className="bg-white text-green-600 hover:bg-green-50 font-bold py-4 px-10 rounded-xl transition-all duration-200 shadow-xl hover:shadow-2xl text-lg"
              >
                Start Your Free Trial →
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
