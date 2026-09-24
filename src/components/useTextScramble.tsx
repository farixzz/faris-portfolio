import React, { useState, useEffect, useRef } from 'react';

const GLYPHS = '01#%&*+=-~_/<>[{}]';

export function useTextScramble(targetText: string, durationMs: number = 600, delayMs: number = 0) {
  const [displayText, setDisplayText] = useState(targetText);
  const frameRef = useRef<number | null>(null);

  useEffect(() => {
    let startTime: number | null = null;
    let timeoutId: ReturnType<typeof setTimeout> | null = null;

    const startAnimation = () => {
      const step = (timestamp: number) => {
        if (!startTime) startTime = timestamp;
        const elapsed = timestamp - startTime;
        const progress = Math.min(elapsed / durationMs, 1);

        // Calculate how many characters are locked in place
        const lockedLength = Math.floor(progress * targetText.length);

        let result = '';
        for (let i = 0; i < targetText.length; i++) {
          if (targetText[i] === ' ') {
            result += ' ';
          } else if (i < lockedLength) {
            result += targetText[i];
          } else {
            result += GLYPHS[Math.floor(Math.random() * GLYPHS.length)];
          }
        }

        setDisplayText(result);

        if (progress < 1) {
          frameRef.current = requestAnimationFrame(step);
        } else {
          setDisplayText(targetText);
        }
      };

      frameRef.current = requestAnimationFrame(step);
    };

    if (delayMs > 0) {
      timeoutId = setTimeout(startAnimation, delayMs);
    } else {
      startAnimation();
    }

    return () => {
      if (frameRef.current) cancelAnimationFrame(frameRef.current);
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, [targetText, durationMs, delayMs]);

  return displayText;
}

export function ScrambleText({
  text,
  className = '',
  duration = 600,
  delay = 0,
}: {
  text: string;
  className?: string;
  duration?: number;
  delay?: number;
}) {
  const scrambled = useTextScramble(text, duration, delay);
  return <span className={className}>{scrambled}</span>;
}
