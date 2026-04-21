import { useState, useEffect, useRef } from "react";

/**
 * Custom hook — typing / deleting animation loop.
 * @param {string[]} words  - Array of words to cycle through
 * @param {number}   typeMs - Milliseconds per character typed
 * @param {number}   delMs  - Milliseconds per character deleted
 * @param {number}   pauseMs - Pause at end of word
 */
const useTyping = (words, typeMs = 65, delMs = 32, pauseMs = 1800) => {
  const [displayed, setDisplayed] = useState("");
  const indexRef = useRef(0);
  const charRef = useRef(0);
  const deletingRef = useRef(false);

  useEffect(() => {
    let timeout;

    const tick = () => {
      const word = words[indexRef.current];

      if (!deletingRef.current) {
        charRef.current += 1;
        setDisplayed(word.slice(0, charRef.current));

        if (charRef.current === word.length) {
          deletingRef.current = true;
          timeout = setTimeout(tick, pauseMs);
          return;
        }
        timeout = setTimeout(tick, typeMs);
      } else {
        charRef.current -= 1;
        setDisplayed(word.slice(0, charRef.current));

        if (charRef.current === 0) {
          deletingRef.current = false;
          indexRef.current = (indexRef.current + 1) % words.length;
          timeout = setTimeout(tick, 300);
          return;
        }
        timeout = setTimeout(tick, delMs);
      }
    };

    timeout = setTimeout(tick, typeMs);
    return () => clearTimeout(timeout);
  }, [words, typeMs, delMs, pauseMs]);

  return displayed;
};

export default useTyping;
