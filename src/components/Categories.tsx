import React from 'react';
import { Utensils, Phone, Landmark, ShoppingBag, Heart, Bus } from 'lucide-react';

const categories = [
  { icon: Utensils, name: 'Restaurants', count: '2,500+' },
  { icon: Phone, name: 'Emergency', count: 'Available 24/7' },
  { icon: Landmark, name: 'Tourism', count: '1,000+ Places' },
  { icon: ShoppingBag, name: 'Shopping', count: '5,000+ Stores' },
  { icon: Heart, name: 'Healthcare', count: '800+ Facilities' },
  { icon: Bus, name: 'Transport', count: 'All Routes' },
];

export default function Categories() {
  return (
    <section id="categories" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">
          Explore Categories
        </h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category) => (
            <div
              key={category.name}
              className="group relative bg-white/50 dark:bg-gray-800/50 backdrop-blur-lg rounded-xl p-6 hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl border border-gray-200 dark:border-gray-700"
            >
              <div className="flex items-center space-x-4">
                <div className="p-3 rounded-lg bg-gradient-to-br from-red-500/10 to-green-500/10 group-hover:from-red-500/20 group-hover:to-green-500/20">
                  <category.icon className="w-6 h-6 text-gray-700 dark:text-gray-300" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold">{category.name}</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">{category.count}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}