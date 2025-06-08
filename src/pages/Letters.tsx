import { useState } from 'react';
import './Letters.css';

interface Letter {
  id: number;
  date: string;
  content: string;
}

const letters: Letter[] = [
  {
    id: 1,
    date: "To my dearest",
    content: `To the one who holds my heart,

It's been four beautiful years since we crossed paths — years filled with laughter, deep talks, quiet understanding, and shared moments that have slowly become my favorite memories.
But more than that… it's been one year and one month since I realized I didn't just care for you — I truly, deeply love you.

Every day I spend with you is a reminder of how beautiful life can be when shared with the right person.
You are not just my lover — you are my best friend, my safe place, my sunshine, and the heartbeat behind everything I do.

In this time, I've learned the way your eyes light up when you're excited, the way you softly smile when you're shy, and the way your presence can calm every storm in me.
I've found a home in your soul, and a future in your smile.

I want you to know something simple but true:
Loving you feels like breathing — natural, necessary, and impossible to live without.

So here's to every moment we've shared, and to all the memories yet to come.
To the little joys, the late-night talks, the gentle hugs, the silly jokes, and the quiet moments where we don't need to say anything at all.
To forever choosing you — every single day.

I love you, deeply and endlessly.
Thank you for being the reason I believe in love.

Forever yours,
Trần Xuân Trường`
  }
];

const Letters = () => {
  const [openLetterId, setOpenLetterId] = useState<number | null>(null);

  const toggleLetter = (id: number) => {
    setOpenLetterId(openLetterId === id ? null : id);
  };

  return (
    <div className="letters">
      <h1 className="letters-title">Love Letters</h1>
      <div className="letters-container">
        {letters.map((letter) => (
          <div
            key={letter.id}
            className={`letter ${openLetterId === letter.id ? 'open' : ''}`}
            onClick={() => toggleLetter(letter.id)}
          >
            <div className="letter-front">
              <div className="letter-seal">♥</div>
              <h3 className="letter-date">{letter.date}</h3>
              <p className="letter-preview">Click to read...</p>
            </div>
            <div className="letter-back">
              <div className="letter-content">
                {letter.content.split('\n\n').map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="letters-footer">
        <p className="letters-quote">
          "Words are the voice of the heart."
        </p>
      </div>
    </div>
  );
};

export default Letters; 