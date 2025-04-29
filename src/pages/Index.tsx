
import React, { useState, useEffect } from 'react';
import Hero from '../components/Hero';
import CountdownTimer from '../components/CountdownTimer';
import MemoryTimeline from '../components/MemoryTimeline';
import InsideJokes from '../components/InsideJokes';
import LoveLetter from '../components/LoveLetter';
import Footer from '../components/Footer';

const Index = () => {
  const [musicPlaying, setMusicPlaying] = useState(false);
  const [audioElement, setAudioElement] = useState<HTMLAudioElement | null>(null);

  useEffect(() => {
    // Create an audio element for background music
    const audio = new Audio("https://samplelib.com/lib/preview/mp3/sample-15s.mp3");
    audio.loop = true;
    audio.volume = 0.3;
    setAudioElement(audio);

    return () => {
      if (audio) {
        audio.pause();
        audio.src = '';
      }
    };
  }, []);

  const toggleMusic = () => {
    if (audioElement) {
      if (musicPlaying) {
        audioElement.pause();
      } else {
        audioElement.play();
      }
      setMusicPlaying(!musicPlaying);
    }
  };

  return (
    <div className="min-h-screen">
      {/* Music control button */}
      <button 
        className="fixed bottom-4 right-4 z-50 bg-white bg-opacity-80 rounded-full p-3 shadow-md"
        onClick={toggleMusic}
        aria-label={musicPlaying ? "Pause music" : "Play music"}
      >
        {musicPlaying ? (
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zM7 8a1 1 0 012 0v4a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v4a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd"></path>
          </svg>
        ) : (
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd"></path>
          </svg>
        )}
      </button>

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
