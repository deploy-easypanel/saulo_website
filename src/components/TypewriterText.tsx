'use client';

import { useEffect, useState } from 'react';

const phrases = [
  'Software Developer',
  'Freelancer',
  'Especialista em React',
  'Amante de UI',
  'Next.js Developer',
];

export default function TypewriterText() {
  const [text, setText] = useState('');
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;

    const phrase = phrases[phraseIndex];

    if (!deleting && charIndex < phrase.length) {
      const t = setTimeout(() => setCharIndex((c) => c + 1), 75);
      return () => clearTimeout(t);
    }

    if (!deleting && charIndex === phrase.length) {
      setPaused(true);
      const t = setTimeout(() => {
        setPaused(false);
        setDeleting(true);
      }, 2200);
      return () => clearTimeout(t);
    }

    if (deleting && charIndex > 0) {
      const t = setTimeout(() => setCharIndex((c) => c - 1), 35);
      return () => clearTimeout(t);
    }

    if (deleting && charIndex === 0) {
      setDeleting(false);
      setPhraseIndex((i) => (i + 1) % phrases.length);
    }
  }, [charIndex, deleting, paused, phraseIndex]);

  useEffect(() => {
    setText(phrases[phraseIndex].slice(0, charIndex));
  }, [charIndex, phraseIndex]);

  return (
    <span className="font-mono text-sm tracking-wide text-blue-500/80">
      {text}
      <span className="animate-blink-cursor ml-0.5 text-blue-600">|</span>
    </span>
  );
}
