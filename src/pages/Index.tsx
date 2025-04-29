
import React from 'react';
import Hero from '../components/Hero';
import CountdownTimer from '../components/CountdownTimer';
import MemoryTimeline from '../components/MemoryTimeline';
import InsideJokes from '../components/InsideJokes';
import LoveLetter from '../components/LoveLetter';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <CountdownTimer />
      <MemoryTimeline />
      <InsideJokes />
      <LoveLetter />
      <Footer />
    </div>
  );
};

export default Index;
