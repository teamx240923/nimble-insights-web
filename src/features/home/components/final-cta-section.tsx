'use client';

import { motion } from 'framer-motion';
import { Phone, MessageSquare, Calendar, Shield, Zap } from 'lucide-react';

export default function FinalCTASection() {
  const features = [
    {
      icon: Zap,
      title: "Instant Setup",
      description: "Get started in under 24 hours with our guided onboarding process."
    },
    {
      icon: Shield,
      title: "Enterprise Security",
      description: "SOC 2 compliant with role-based access and data encryption."
    },
    {
      icon: Phone,
      title: "Expert Support",
      description: "Dedicated success team to ensure you get maximum value from day one."
    }
  ];

  return (
    <section className="py-20 px-6 sm:px-8 lg:px-12 bg-gray-900">
      <div className="max-w-6xl mx-auto text-center">
        {/* Main CTA Content */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">
            Ready to{' '}
            <span className="text-white">Unlock Your Data?</span>
          </h2>
          
          <p className="text-xl sm:text-2xl text-gray-300 leading-relaxed max-w-4xl mx-auto">
            Ask, get answers, and act — without waiting for reports.
          </p>
          
          {/* CTA Button */}
          <div className="pt-8">
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="bg-white hover:bg-gray-100 text-gray-900 font-bold py-6 px-12 rounded-xl text-xl shadow-2xl hover:shadow-3xl transition-all duration-300 inline-flex items-center gap-3"
            >
              <Phone className="w-6 h-6" />
              Talk to Sales
            </motion.button>
          </div>
        </motion.div>
        
        {/* Supporting Information */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-16 pt-16 border-t border-gray-700"
        >
          <div className="grid md:grid-cols-3 gap-8 text-center">
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -4 }}
                  className="bg-gray-800 border border-gray-700 p-6 rounded-xl hover:border-gray-600 transition-all duration-300"
                >
                  <div className="bg-gray-700 w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="font-semibold text-white mb-2">{feature.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
        
        {/* Social Proof */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <p className="text-gray-400 text-lg mb-8">
            Trusted by forward-thinking companies worldwide
          </p>
          
          {/* Placeholder for company logos */}
          <div className="flex justify-center items-center space-x-8 opacity-60">
            <div className="bg-gray-800 border border-gray-700 px-6 py-3 rounded-lg text-gray-300 font-semibold">
              Company A
            </div>
            <div className="bg-gray-800 border border-gray-700 px-6 py-3 rounded-lg text-gray-300 font-semibold">
              Company B
            </div>
            <div className="bg-gray-800 border border-gray-700 px-6 py-3 rounded-lg text-gray-300 font-semibold">
              Company C
            </div>
          </div>
        </motion.div>
        
        {/* Final Urgency */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          viewport={{ once: true }}
          className="mt-16 bg-gray-800 border border-gray-700 p-8 rounded-2xl max-w-4xl mx-auto"
        >
          <h3 className="text-2xl font-bold text-white mb-4">
            Don't let another day pass making decisions in the dark
          </h3>
          <p className="text-gray-300 mb-8 leading-relaxed">
            While you wait, your competitors are already leveraging AI to make faster, 
            smarter business decisions. Join them today.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button 
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="bg-white text-gray-900 hover:bg-gray-100 font-semibold py-3 px-8 rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl inline-flex items-center justify-center gap-2"
            >
              <Calendar className="w-5 h-5" />
              Book Demo Now
            </motion.button>
            <motion.button 
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="border border-gray-600 text-gray-300 hover:border-gray-500 hover:text-white font-semibold py-3 px-8 rounded-lg transition-all duration-200 bg-gray-800 hover:bg-gray-700 inline-flex items-center justify-center gap-2"
            >
              <MessageSquare className="w-5 h-5" />
              Chat with Expert
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
