// PlayContext.tsx
import React, { createContext, useState, ReactNode } from 'react';

interface PlayContextProps {
  data: { player: string; machine: string };
  setData: React.Dispatch<React.SetStateAction<{ player: string; machine: string }>>;
}

const PlayContext = createContext<PlayContextProps | undefined>(undefined);

const PlayProvider = ({ children }: { children: ReactNode }) => {
  const [data, setData] = useState({ player: "", machine: "" });

  return (
    <PlayContext.Provider value={{ data, setData }}>
      {children}
    </PlayContext.Provider>
  );
};

export { PlayContext, PlayProvider };
