// PlayContext.tsx
import React, { createContext, useState, ReactNode } from 'react';

interface ScoreContextProps {
  score: number ;
  setScore: React.Dispatch<React.SetStateAction<number>>;
}

const ScoreContext = createContext<ScoreContextProps | undefined>(undefined);

const ScoreProvider = ({ children }: { children: ReactNode }) => {
  const [score, setScore] = useState<number>(0);

  return (
    <ScoreContext.Provider value={{ score, setScore}}>
      {children}
    </ScoreContext.Provider>
  );
};

export { ScoreContext, ScoreProvider };
