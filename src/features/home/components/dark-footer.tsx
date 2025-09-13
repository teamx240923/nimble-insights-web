export default function DarkFooter() {
  return (
    <footer className="bg-black text-gray-300 py-16 px-6 sm:px-8 lg:px-12 border-t border-gray-800">
      <div className="max-w-7xl mx-auto">
        {/* Main Footer Content */}
        <div className="grid lg:grid-cols-3 gap-12 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-1 space-y-6">
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="bg-gradient-to-r from-cyan-500 to-blue-500 w-10 h-10 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-lg">N</span>
                </div>
                <h3 className="text-2xl font-bold text-white">NimbleInsights</h3>
              </div>
              <p className="text-gray-400 leading-relaxed">
                AI agents that unlock data insights from ERP, CRM, and Spreadsheets — in plain English.
              </p>
            </div>
            
            {/* Social Links */}
            <div className="space-y-4">
              <h4 className="font-semibold text-lg text-white">Connect With Us</h4>
              <div className="flex space-x-4">
                <a 
                  href="#" 
                  className="bg-gray-900 hover:bg-cyan-500/20 border border-gray-700 hover:border-cyan-500/50 p-3 rounded-lg transition-all duration-200"
                  aria-label="LinkedIn"
                >
                  <svg className="w-5 h-5 text-cyan-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z" clipRule="evenodd" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
          
          {/* Quick Links */}
          <div className="lg:col-span-1">
            <h4 className="font-semibold text-lg mb-6 text-white">Quick Links</h4>
            <ul className="space-y-4">
              <li>
                <a href="#pricing" className="text-gray-400 hover:text-cyan-400 transition-colors duration-200">
                  Pricing
                </a>
              </li>
              <li>
                <a href="#about" className="text-gray-400 hover:text-cyan-400 transition-colors duration-200">
                  About Us
                </a>
              </li>
              <li>
                <a href="#demo" className="text-gray-400 hover:text-cyan-400 transition-colors duration-200">
                  Request a Demo
                </a>
              </li>
              <li>
                <a href="#blog" className="text-gray-400 hover:text-cyan-400 transition-colors duration-200">
                  Blog & Resources
                </a>
              </li>
              <li>
                <a href="#support" className="text-gray-400 hover:text-cyan-400 transition-colors duration-200">
                  Support Center
                </a>
              </li>
            </ul>
          </div>
          
          {/* Contact & Demo */}
          <div className="lg:col-span-1">
            <h4 className="font-semibold text-lg mb-6 text-white">Get Started</h4>
            <div className="space-y-6">
              <div>
                <p className="text-gray-400 mb-4">
                  Ready to transform your data into insights?
                </p>
                <button className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-200 w-full sm:w-auto shadow-lg hover:shadow-cyan-500/25">
                  Book a Demo
                </button>
              </div>
              
              <div className="pt-6 border-t border-gray-800">
                <h5 className="font-semibold mb-2 text-white">Contact Us</h5>
                <a 
                  href="mailto:help.nimbleinsights@gmail.com" 
                  className="text-gray-400 hover:text-cyan-400 transition-colors duration-200"
                >
                  help.nimbleinsights@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>
        
        {/* NimbleBiz Lead Generation Bot */}
        <div className="mb-12 p-6 bg-gray-900/50 backdrop-blur-sm rounded-lg border border-gray-800">
          <h4 className="font-semibold text-lg mb-4 text-white">Talk to Our AI Assistant</h4>
          <p className="text-gray-400 mb-4">
            Get instant answers about NimbleInsights and book a demo through our AI assistant.
          </p>
          {/* Placeholder for iframe - you'll need to replace with actual NimbleBiz iframe */}
          <div className="bg-gray-800/50 p-8 rounded-lg text-center border border-gray-700">
            <p className="text-gray-400 mb-4">NimbleBiz Lead Generation Bot</p>
            <p className="text-sm text-gray-500 mb-4">
              [Iframe placeholder - Replace with actual NimbleBiz iframe code]
            </p>
            <button className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-400 hover:to-pink-400 text-white py-2 px-4 rounded transition-all duration-200 shadow-lg hover:shadow-purple-500/25">
              Launch Chat Assistant
            </button>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-800">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
            <p className="text-gray-500 text-sm">
              © 2025 NimbleInsights.ai All rights reserved.
            </p>
            
            <div className="flex space-x-6 text-sm">
              <a href="#privacy" className="text-gray-500 hover:text-cyan-400 transition-colors duration-200">
                Privacy Policy
              </a>
              <a href="#terms" className="text-gray-500 hover:text-cyan-400 transition-colors duration-200">
                Terms of Service
              </a>
              <a href="#cookies" className="text-gray-500 hover:text-cyan-400 transition-colors duration-200">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
