import React from 'react';
import { MapPin, Clock, Ticket, Info } from 'lucide-react';

const attractions = [
  {
    name: 'Buda Castle',
    image: 'https://images.unsplash.com/photo-1516550893923-42d28e5677af?auto=format&fit=crop&w=1200&q=80',
    description: 'Historic castle and palace complex of the Hungarian kings in Budapest',
    location: 'Budapest, Szent György tér',
    hours: '10:00 - 18:00',
    price: '3000 HUF'
  },
  {
    name: 'Parliament Building',
    image: 'https://images.unsplash.com/photo-1565426873118-a17ed65d74b9?auto=format&fit=crop&w=1200&q=80',
    description: 'Iconic neo-Gothic parliament building on the Danube River',
    location: 'Budapest, Kossuth Lajos tér 1-3',
    hours: '8:00 - 18:00',
    price: '6000 HUF'
  },
  {
    name: 'Széchenyi Thermal Bath',
    image: 'https://images.unsplash.com/photo-1515408320194-59643816c5b2?auto=format&fit=crop&w=1200&q=80',
    description: 'Largest medicinal bath in Europe',
    location: 'Budapest, Állatkerti krt. 9-11',
    hours: '6:00 - 22:00',
    price: '7200 HUF'
  }
];

export default function TourismPage() {
  return (
    <div className="pt-20">
      <section className="py-20 bg-gradient-to-br from-green-50 to-green-100 dark:from-gray-900 dark:to-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">Discover Hungary</h1>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Explore the rich cultural heritage, stunning architecture, and natural beauty of Hungary
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {attractions.map((attraction) => (
              <div
                key={attraction.name}
                className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-lg rounded-xl overflow-hidden shadow-lg border border-gray-200 dark:border-gray-700 group hover:shadow-xl transition-shadow"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={attraction.image}
                    alt={attraction.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{attraction.name}</h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">
                    {attraction.description}
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-center text-sm">
                      <MapPin className="w-4 h-4 mr-2 text-green-600 dark:text-green-400" />
                      <span>{attraction.location}</span>
                    </div>
                    <div className="flex items-center text-sm">
                      <Clock className="w-4 h-4 mr-2 text-green-600 dark:text-green-400" />
                      <span>{attraction.hours}</span>
                    </div>
                    <div className="flex items-center text-sm">
                      <Ticket className="w-4 h-4 mr-2 text-green-600 dark:text-green-400" />
                      <span>{attraction.price}</span>
                    </div>
                  </div>
                  <button className="mt-6 w-full px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg transition-colors flex items-center justify-center">
                    <Info className="w-4 h-4 mr-2" />
                    More Details
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <button className="px-8 py-3 bg-green-600 hover:bg-green-700 text-white rounded-lg transition-colors">
              Load More Attractions
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}