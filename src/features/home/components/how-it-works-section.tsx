'use client';

import { motion } from 'framer-motion';
import { Database, Settings, MessageCircle } from 'lucide-react';

export default function HowItWorksSection() {
  const steps = [
    {
      number: "01",
      icon: Database,
      title: "Connect Your Data",
      description: "Plug in ERP, CRM, or spreadsheets.",
      details: "Seamlessly integrate with your existing systems in minutes, not months. Our pre-built connectors support major platforms.",
      bgColor: "bg-blue-50",
      iconColor: "text-blue-600",
      borderColor: "border-blue-200"
    },
    {
      number: "02",
      icon: Settings,
      title: "Train Your Agent",
      description: "Add business description, business terms, and rules.",
      details: "Customize the AI to understand your unique business context and terminology. Define your data relationships and business logic.",
      bgColor: "bg-green-50",
      iconColor: "text-green-600",
      borderColor: "border-green-200"
    },
    {
      number: "03",
      icon: MessageCircle,
      title: "Ask & Decide",
      description: "Get instant answers anytime.",
      details: "Start asking questions in plain English and make data-driven decisions immediately. No SQL knowledge required.",
      bgColor: "bg-indigo-50",
      iconColor: "text-indigo-600",
      borderColor: "border-indigo-200"
    }
  ];

  return (
    <section id="how-it-works" className="py-20 px-6 sm:px-8 lg:px-12 bg-gray-50">
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
            Go Live in{' '}
            <span className="text-gray-900">3 Simple Steps</span>
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
            From setup to insights in under an hour. No technical expertise required.
          </p>
        </motion.div>
        
        {/* Steps */}
        <div className="space-y-16">
          {steps.map((step, index) => {
            const IconComponent = step.icon;
            return (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="relative"
              >
                {/* Connector Line (except for last item) */}
                {index < steps.length - 1 && (
                  <div className="absolute left-1/2 transform -translate-x-1/2 -bottom-8 w-px h-16 bg-gradient-to-b from-gray-300 to-transparent hidden lg:block"></div>
                )}
                
                <div className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                  {/* Content */}
                  <div className={`space-y-6 ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                    <div className="flex items-start space-x-6">
                      <div className="flex-shrink-0">
                        <div className="text-sm font-bold text-gray-400 mb-2">STEP {step.number}</div>
                        <div className={`${step.bgColor} w-16 h-16 rounded-xl flex items-center justify-center ${step.borderColor} border`}>
                          <IconComponent className={`w-8 h-8 ${step.iconColor}`} />
                        </div>
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-2">
                          {step.title}
                        </h3>
                        <p className="text-lg text-gray-600 mb-4">
                          {step.description}
                        </p>
                        <p className="text-gray-600 leading-relaxed">
                          {step.details}
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  {/* Visual */}
                  <motion.div 
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                    className={`${index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}`}
                  >
                    <div className={`bg-white p-8 rounded-2xl ${step.borderColor} border-2 h-64 flex items-center justify-center shadow-sm`}>
                      <div className="text-center">
                        <div className={`${step.bgColor} w-24 h-24 rounded-2xl flex items-center justify-center mx-auto mb-4`}>
                          <IconComponent className={`w-12 h-12 ${step.iconColor}`} />
                        </div>
                        <div className="text-xl font-semibold text-gray-900">
                          {step.title}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            );
          })}
        </div>
        
        {/* Bottom CTA */}
        {/* <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-20"
        >
          <div className="bg-white p-8 rounded-2xl shadow-lg max-w-4xl mx-auto border border-gray-200">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Ready to get started?
            </h3>
            <p className="text-gray-600 mb-8 text-lg leading-relaxed">
              Most customers are up and running within 24 hours. Let&apos;s get your data working for you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button 
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="bg-gray-900 hover:bg-gray-800 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl"
              >
                Schedule Implementation Call
              </motion.button>
              <motion.button 
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="border border-gray-300 hover:border-gray-900 text-gray-700 hover:text-gray-900 font-semibold py-3 px-8 rounded-lg transition-all duration-200 bg-white hover:bg-gray-50"
              >
                View Setup Checklist
              </motion.button>
            </div>
          </div>
        </motion.div> */}
      </div>
    </section>
  );
}
