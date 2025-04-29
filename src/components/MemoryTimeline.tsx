
import React from 'react';

interface Memory {
  id: number;
  title: string;
  caption: string;
  image: string;
}

const memories: Memory[] = [
  {
    id: 1,
    title: 'Our first date 🍕',
    caption: 'Yala unnav chudu cute ga.',
    image: 'https://images.unsplash.com/photo-1470813740244-df37b8c1edcb'
  },
  {
    id: 2,
    title: 'Movie night',
    caption: 'Gurtunda ni birthday ra turtle.',
    image: 'https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07'
  },
  {
    id: 3,
    title: 'Beach day 🌊',
    caption: 'Aroju gurtu unda dhiraym chesi intiki vachhesav.',
    image: 'https://images.unsplash.com/photo-1500375592092-40eb2168fd21'
  },
  {
    id: 4,
    title: 'Surprise picnic 🧺',
    caption: 'Appude yenta peddaga ipoyav chudu tiger ra nuvvu.',
    image: 'https://images.unsplash.com/photo-1582562124811-c09040d0a901'
  },
];

const MemoryTimeline = () => {
  return (
    <div id="timeline" className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl text-center mb-16">Konni Flashbacks Chuddam Da</h2>
        
        <div className="max-w-4xl mx-auto">
          {memories.map((memory, index) => (
            <div 
              key={memory.id} 
              className={`timeline-item mb-16 flex flex-col ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              } gap-6 animate-fade-in`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="md:w-1/2">
                <div className="rounded-lg overflow-hidden shadow-md memory-card">
                  <img 
                    src={memory.image} 
                    alt={memory.title} 
                    className="w-full h-64 object-cover"
                  />
                </div>
              </div>
              <div className="md:w-1/2 flex flex-col justify-center">
                <h3 className="text-2xl md:text-3xl my-2">{memory.title}</h3>
                <p className="text-muted-foreground">{memory.caption}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MemoryTimeline;
