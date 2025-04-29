
import React, { useState } from 'react';

const LoveLetter = () => {
  const [envelopeOpen, setEnvelopeOpen] = useState(false);

  return (
    <div className="py-16 bg-romantic-pink bg-opacity-10">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl md:text-5xl mb-12">A Love Letter For You</h2>
        
        <div className="max-w-2xl mx-auto">
          <div 
            className={`bg-white rounded-lg shadow-lg p-8 transition-all duration-700 transform 
              ${envelopeOpen ? 'scale-100' : 'scale-95'} cursor-pointer`}
            onClick={() => setEnvelopeOpen(!envelopeOpen)}
          >
            <div className={`transition-opacity duration-500 ${envelopeOpen ? 'opacity-0 h-0 overflow-hidden' : 'opacity-100'}`}>
              <div className="flex flex-col items-center justify-center py-8">
                <svg className="w-16 h-16 text-romantic-pink mb-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                </svg>
                <p className="text-xl font-handwritten">Click to open my letter to you</p>
              </div>
            </div>
            
            <div className={`transition-opacity duration-500 delay-300 ${envelopeOpen ? 'opacity-100' : 'opacity-0 h-0 overflow-hidden'}`}>
              <div className="text-left font-handwritten">
                <p className="mb-4 text-xl">My Dearest,</p>
                <p className="mb-4">
                  From the moment we met, you've brought light and joy into my life in ways I never thought possible. Every day with you is an adventure, every moment a treasure.
                </p>
                <p className="mb-4">
                  I love your laugh, your kindness, the way you scrunch your nose when you're thinking hard about something. I love how passionate you are about the things you care about. I love your strength and your gentleness.
                </p>
                <p className="mb-4">
                  Thank you for being you, for choosing me, for building this beautiful story with me day by day. I'm so excited for all the chapters yet to come.
                </p>
                <p className="mb-4">
                  My heart is yours, always.
                </p>
                <p className="text-right">With all my love,</p>
                <p className="text-right">Me ❤️</p>
              </div>
              
              <div className="mt-8 text-center">
                <button 
                  className="text-sm text-romantic-pink hover:underline"
                  onClick={(e) => {
                    e.stopPropagation();
                    setEnvelopeOpen(false);
                  }}
                >
                  Close letter
                </button>
              </div>
            </div>
          </div>
          
          <div className="mt-8">
            <p className="text-lg">Listen to my message for you:</p>
            <div className="flex justify-center mt-4">
              <audio 
                controls 
                className="w-full max-w-md"
              >
                <source src="#" type="audio/mpeg" />
                Your browser does not support the audio element.
              </audio>
              <p className="text-sm text-muted-foreground mt-2">
                (Record and upload your voice message to replace this placeholder)
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoveLetter;
