
import React, { useState } from 'react';

interface Joke {
  id: number;
  title: string;
  content: string;
}

const jokes: Joke[] = [
  {
    id: 1,
    title: '"The Pasta Incident"',
    content: 'Remember when you tried to impress me with your cooking skills and ended up with pasta all over the ceiling? I still don\'t understand how that happened! 🍝'
  },
  {
    id: 2,
    title: 'Our Secret Language',
    content: 'Bloop blip = I love you. Blip bloop = I\'m hungry. Our code that confuses everyone else.'
  },
  {
    id: 3,
    title: 'The Wrong Turn',
    content: 'That time we got "slightly lost" on our road trip and ended up three towns over. "I know exactly where we are" - you, definitely not knowing where we were.'
  },
  {
    id: 4,
    title: 'Dance Moves',
    content: 'Your signature move at every party: The awkward shuffle followed by that little spin you think is smooth. Never change it, I love it too much! 💃'
  }
];

const InsideJokes = () => {
  const [revealedJokes, setRevealedJokes] = useState<number[]>([]);

  const toggleReveal = (id: number) => {
    if (revealedJokes.includes(id)) {
      setRevealedJokes(revealedJokes.filter(jokeId => jokeId !== id));
    } else {
      setRevealedJokes([...revealedJokes, id]);
    }
  };

  return (
    <div className="py-16 bg-romantic-blue bg-opacity-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl text-center mb-12">Inside Jokes</h2>
        <p className="text-center mx-auto max-w-2xl mb-10 text-lg">
          These silly moments are just for us. Tap to reveal!
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {jokes.map(joke => (
            <div 
              key={joke.id}
              className="bg-white rounded-lg shadow-md p-6 cursor-pointer memory-card"
              onClick={() => toggleReveal(joke.id)}
            >
              <h3 className="text-2xl mb-4 font-handwritten">{joke.title}</h3>
              <div className={`transition-all duration-500 ${
                revealedJokes.includes(joke.id) 
                  ? 'opacity-100 max-h-40' 
                  : 'opacity-0 max-h-0 overflow-hidden'
              }`}>
                <p>{joke.content}</p>
              </div>
              <p className={`text-romantic-pink text-center mt-4 ${
                revealedJokes.includes(joke.id) ? 'hidden' : 'block'
              }`}>
                Tap to reveal
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default InsideJokes;
