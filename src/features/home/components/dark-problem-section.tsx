'use client';

import { motion } from 'framer-motion';
import { Clock, TrendingDown, Ban, Dice6 } from 'lucide-react';

export default function DarkProblemSection() {
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
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut" as const
      }
    }
  };

  const problems = [
    {
      icon: Clock,
      title: "Delayed Reports",
      description: "Waiting days for reports = missed opportunities",
      color: "from-red-400 to-orange-400"
    },
    {
      icon: TrendingDown,
      title: "Overloaded Analysts",
      description: "Overloaded analysts running repetitive queries",
      color: "from-orange-400 to-yellow-400"
    },
    {
      icon: Ban,
      title: "No Self-Serve Access",
      description: "No easy self-serve access for business teams",
      color: "from-red-500 to-pink-400"
    },
    {
      icon: Dice6,
      title: "Gut Decisions",
      description: "Decisions often made on gut, not data",
      color: "from-purple-400 to-indigo-400"
    }
  ];

  return (
    <section className="py-20 px-6 sm:px-8 lg:px-12 bg-gradient-to-b from-gray-900 to-slate-900">
      <div className="max-w-6xl mx-auto">
        {/* Main Heading */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-8">
            Data Locked in Systems ={' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-pink-400">
              Decisions Delayed
            </span>
          </h2>
          
          {/* Highlighted Quote/Stat */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-xl shadow-2xl max-w-4xl mx-auto mb-12 border border-gray-700"
          >
            <blockquote className="text-2xl sm:text-3xl font-bold text-gray-100 text-center relative">
              <div className="absolute -top-4 -left-4 text-6xl text-red-400/30">&ldquo;</div>
              60% of business leaders say they can&apos;t access data fast enough to make decisions.
              <div className="absolute -bottom-8 -right-4 text-6xl text-red-400/30">&rdquo;</div>
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
          <p className="text-xl text-gray-300 leading-relaxed max-w-4xl mx-auto mb-12">
            Businesses collect massive amounts of data inside ERP, CRM, and spreadsheets. 
            But making sense of it is slow and technical. Reports take days, analysts are overloaded, 
            and teams are forced to make decisions without clarity.
          </p>
        </motion.div>
        
        {/* Problem Bullets */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {problems.map((problem, index) => {
            const IconComponent = problem.icon;
            return (
              <motion.div 
                key={index}
                variants={itemVariants}
                whileHover={{ 
                  y: -10,
                  scale: 1.05,
                  transition: { duration: 0.3 }
                }}
                className="group bg-gray-800/40 backdrop-blur-sm p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-700 hover:border-gray-600 relative overflow-hidden"
              >
                {/* Background gradient on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${problem.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
                
                {/* Icon */}
                <div className="relative z-10">
                  <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${problem.color} p-4 mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="font-semibold text-gray-100 mb-2 group-hover:text-white transition-colors">
                    {problem.title}
                  </h3>
                  <p className="text-gray-400 group-hover:text-gray-300 transition-colors">
                    {problem.description}
                  </p>
                </div>
                
                {/* Subtle glow effect */}
                <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-transparent via-gray-600/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
