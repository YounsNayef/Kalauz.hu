import React from 'react';
import Hero from '../components/Hero';
import Categories from '../components/Categories';
import Map from '../components/Map';

export default function HomePage() {
  return (
    <main>
      <Hero />
      <Categories />
      <Map />
    </main>
  );
}