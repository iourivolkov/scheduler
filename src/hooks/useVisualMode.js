import React, { useState } from "react";

export default function useVisualMode(initial) {
  const [mode, setMode] = useState(initial)
  const [history, setHistory] = useState([initial]);


  const transition = (newMode, replace = false) => {
    setMode(newMode);
    
    if (replace) {
      setHistory(prev => {
        const newItem = [...prev];
        newItem.splice(-1, 1, newMode);
        return newItem;
      })
    } else {
      setHistory(prev => [...prev, newMode]);
    }
  }

  const back = () => {
    setHistory(prev => {
      const newItem = prev.length > 1 ? [...prev].slice(0,-1) : [...prev];
      setMode(newItem[newItem.length - 1]);
      return newItem;
    })
  }
return {mode, transition, back}
}

