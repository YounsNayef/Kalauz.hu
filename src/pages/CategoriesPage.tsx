import React from 'react';
import { Utensils, Phone, Landmark, ShoppingBag, Heart, Bus, Home, Briefcase, Wifi } from 'lucide-react';

const allCategories = [
  { icon: Utensils, name: 'Restaurants', count: '2,500+', description: 'Find the best Hungarian and international cuisine' },
  { icon: Phone, name: 'Emergency', count: 'Available 24/7', description: 'Quick access to emergency services' },
  { icon: Landmark, name: 'Tourism', count: '1,000+ Places', description: 'Explore Hungary\'s rich cultural heritage' },
  { icon: ShoppingBag, name: 'Shopping', count: '5,000+ Stores', description: 'From local markets to shopping malls' },
  { icon: Heart, name: 'Healthcare', count: '800+ Facilities', description: 'Hospitals, clinics, and pharmacies' },
  { icon: Bus, name: 'Transport', count: 'All Routes', description: 'Public transportation and travel info' },
  { icon: Home, name: 'Accommodation', count: '3,000+ Places', description: 'Hotels, hostels, and apartments' },
  { icon: Briefcase, name: 'Business', count: '10,000+ Listings', description: 'Local businesses and services' },
  { icon: Wifi, name: 'Internet', count: 'Nationwide', description: 'WiFi spots and internet cafes' }
];

export default function CategoriesPage() {
  return (
    <div className="pt-20">
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-center mb-8">All Categories</h1>
          <p className="text-center text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto">
            Explore our comprehensive directory of services and attractions across Hungary
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {allCategories.map((category) => (
              <div
                key={category.name}
                className="group relative bg-white/50 dark:bg-gray-800/50 backdrop-blur-lg rounded-xl p-6 hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl border border-gray-200 dark:border-gray-700"
              >
                <div className="flex items-center space-x-4 mb-4">
                  <div className="p-3 rounded-lg bg-gradient-to-br from-red-500/10 to-green-500/10 group-hover:from-red-500/20 group-hover:to-green-500/20">
                    <category.icon className="w-6 h-6 text-gray-700 dark:text-gray-300" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">{category.name}</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">{category.count}</p>
                  </div>
                </div>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  {category.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}