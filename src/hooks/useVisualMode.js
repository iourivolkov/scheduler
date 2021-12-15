import React, { useState } from "react";

export default function useVisualMode(initial) {
  const [mode, setMode] = useState(initial)
  const [history, setHistory] = useState([initial]);


  const transition = (newMode, replace = false) => {
    setMode(newMode);
    
    if (replace) {
      setHistory(history => {
        const newItem = [...history];
        newItem.splice(-1, 1, newMode);
        return newItem;
      })
    } else {
      setHistory(history => [...history, newMode]);
    }
  }

  const back = () => {
    setHistory(history => {
      const newItem = history.length > 1 ? [...history].slice(0,-1) : [...history];
      setMode(newItem[newItem.length - 1]);
      return newItem;
    })
  }
return {mode, transition, back}
}

// when transition is called - need to add the new mode to our history
// when back is called, we should set the mode to the prev item in our history array 

