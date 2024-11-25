import React from 'react';
import { Search, Download, ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-red-500/20 via-white/50 to-green-500/20 dark:from-red-900/20 dark:via-gray-900/50 dark:to-green-900/20 animate-gradient-xy bg-hero-pattern"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-8 bg-gradient-to-r from-red-600 to-green-600 bg-clip-text text-transparent animate-fade-in">
          Your Guide to Hungary
        </h1>
        <p className="text-xl md:text-2xl mb-12 text-gray-700 dark:text-gray-300 animate-fade-in delay-100">
          Explore Services, Attractions & More
        </p>

        {/* Search bar */}
        <div className="max-w-2xl mx-auto mb-12 animate-fade-in delay-200">
          <div className="relative group">
            <input
              type="text"
              placeholder="Search for services or places..."
              className="input-field group-hover:shadow-xl"
            />
            <Search className="absolute right-6 top-1/2 transform -translate-y-1/2 text-gray-400 group-hover:text-red-500 dark:group-hover:text-green-500 transition-colors" />
          </div>
        </div>

        {/* CTA buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-4 animate-fade-in delay-300">
          <button className="cta-button bg-gradient-to-r from-red-600 to-red-700 hover:from-red-500 hover:to-red-600">
            <Download className="w-5 h-5 mr-2" />
            Download App
          </button>
          <button className="cta-button bg-gradient-to-r from-green-600 to-green-700 hover:from-green-500 hover:to-green-600">
            Explore Now
            <ArrowRight className="w-5 h-5 ml-2" />
          </button>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-white/50 to-transparent dark:from-gray-900/50 pointer-events-none"></div>
    </div>
  );
}