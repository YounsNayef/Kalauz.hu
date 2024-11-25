import React from 'react';
import { Phone, Siren, Stethoscope, Shield, Car } from 'lucide-react';

const emergencyContacts = [
  {
    icon: Phone,
    name: 'General Emergency',
    number: '112',
    description: 'European emergency number - Police, Ambulance, Fire'
  },
  {
    icon: Siren,
    name: 'Police',
    number: '107',
    description: 'Direct number for police services'
  },
  {
    icon: Stethoscope,
    name: 'Ambulance',
    number: '104',
    description: 'Medical emergencies and ambulance services'
  },
  {
    icon: Shield,
    name: 'Fire Department',
    number: '105',
    description: 'Fire and rescue services'
  },
  {
    icon: Car,
    name: 'Road Assistance',
    number: '188',
    description: 'Hungarian Auto Club emergency road service'
  }
];

export default function EmergencyPage() {
  return (
    <div className="pt-20">
      <section className="py-20 bg-gradient-to-br from-red-50 to-red-100 dark:from-gray-900 dark:to-gray-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">Emergency Contacts</h1>
            <p className="text-gray-600 dark:text-gray-400">
              Important emergency numbers in Hungary. All numbers are available 24/7.
            </p>
          </div>

          <div className="space-y-6">
            {emergencyContacts.map((contact) => (
              <div
                key={contact.name}
                className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-lg rounded-xl p-6 shadow-lg border border-gray-200 dark:border-gray-700"
              >
                <div className="flex items-start space-x-6">
                  <div className="p-3 rounded-lg bg-red-100 dark:bg-red-900/30">
                    <contact.icon className="w-6 h-6 text-red-600 dark:text-red-400" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold mb-1">{contact.name}</h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-3">
                      {contact.description}
                    </p>
                    <a
                      href={`tel:${contact.number}`}
                      className="inline-flex items-center px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg transition-colors"
                    >
                      <Phone className="w-4 h-4 mr-2" />
                      Call {contact.number}
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 p-6 bg-yellow-50 dark:bg-yellow-900/30 rounded-xl border border-yellow-200 dark:border-yellow-800">
            <h2 className="text-lg font-semibold mb-2">Important Note</h2>
            <div className="text-gray-600 dark:text-gray-400">
              <p className="mb-2">When calling emergency services in Hungary, try to provide:</p>
              <ul className="list-disc list-inside space-y-1">
                <li>Your exact location</li>
                <li>Nature of the emergency</li>
                <li>Your name and contact number</li>
                <li>If possible, have someone who speaks Hungarian assist you</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}