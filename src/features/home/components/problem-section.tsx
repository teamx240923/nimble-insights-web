'use client';

import { motion } from 'framer-motion';
import { Clock, TrendingDown, Ban, Dice6 } from 'lucide-react';

export default function ProblemSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8
      }
    }
  };

  const problems = [
    {
      icon: Clock,
      title: "Reports Take Days",
      description: "Critical business data sits locked in complex systems",
      impact: "Missed opportunities",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: TrendingDown,
      title: "Analysts Overwhelmed",
      description: "Teams drowning in repetitive data requests",
      impact: "Bottlenecks everywhere",
      color: "from-purple-500 to-indigo-500"
    },
    {
      icon: Ban,
      title: "No Self-Service",
      description: "Business teams can't access data independently",
      impact: "Dependency chains",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: Dice6,
      title: "Gut-Based Decisions",
      description: "Critical choices made without data insights",
      impact: "Risky outcomes",
      color: "from-orange-500 to-yellow-500"
    }
  ];

  return (
    <section className="py-20 px-6 sm:px-8 lg:px-12 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-6xl mx-auto">
        {/* Main Heading */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-8">
            When Data Gets{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600">
              Stuck in Silos
            </span>
          </h2>
          
          {/* Highlighted Quote/Stat */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-blue-50 to-purple-50 p-8 rounded-2xl shadow-lg max-w-4xl mx-auto mb-12 border border-blue-100"
          >
            <blockquote className="text-2xl sm:text-3xl font-bold text-gray-800 text-center relative">
              <div className="absolute -top-4 -left-4 text-6xl text-blue-200 opacity-50">&ldquo;</div>
              60% of business leaders say they can&apos;t access data fast enough to make decisions.
              <div className="absolute -bottom-8 -right-4 text-6xl text-blue-200 opacity-50">&rdquo;</div>
            </blockquote>
          </motion.div>
        </motion.div>
        
        {/* Problem Description */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-xl text-gray-600 leading-relaxed max-w-4xl mx-auto mb-12">
            Businesses collect massive amounts of data inside ERP, CRM, and spreadsheets. 
            But making sense of it is slow and technical. Reports take days, analysts are overloaded, 
            and teams are forced to make decisions without clarity.
          </p>
        </motion.div>
        
        {/* Problem Cards Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {problems.map((problem, index) => {
            const IconComponent = problem.icon;
            
            return (
              <motion.div 
                key={index}
                variants={itemVariants}
                className="flex justify-center"
              >
                <motion.div 
                  whileHover={{ 
                    scale: 1.05,
                    transition: { duration: 0.3 }
                  }}
                  className="group bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 relative overflow-hidden w-full aspect-square flex flex-col"
                >
                  {/* Background gradient */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${problem.color} opacity-5 group-hover:opacity-10 transition-opacity duration-300`}></div>
                  
                  <div className="relative z-10 flex flex-col h-full">
                    {/* Icon */}
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${problem.color} p-4 group-hover:scale-110 transition-transform duration-300 flex-shrink-0 mb-4`}>
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    
                    {/* Content */}
                    <div className="flex-1 flex flex-col">
                      <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-gray-700 transition-colors">
                        {problem.title}
                      </h3>
                      <p className="text-sm text-gray-600 mb-4 group-hover:text-gray-500 transition-colors flex-1">
                        {problem.description}
                      </p>
                      <div className="inline-flex items-center gap-2 px-3 py-2 bg-gray-100 rounded-full self-start">
                        <span className="text-xs font-semibold text-gray-700">Impact:</span>
                        <span className="text-xs text-gray-600">{problem.impact}</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
