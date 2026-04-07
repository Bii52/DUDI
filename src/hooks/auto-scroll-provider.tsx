"use client";

import { createContext, useContext, useState, ReactNode, Dispatch, SetStateAction } from "react";

interface AutoScrollContextType {
  isAutoScrolling: boolean;
  setIsAutoScrolling: Dispatch<SetStateAction<boolean>>;
}

const AutoScrollContext = createContext<AutoScrollContextType | undefined>(
  undefined
);

export function AutoScrollProvider({ children }: { children: ReactNode }) {
  const [isAutoScrolling, setIsAutoScrolling] = useState(false);

  return (
    <AutoScrollContext.Provider value={{ isAutoScrolling, setIsAutoScrolling }}>
      {children}
    </AutoScrollContext.Provider>
  );
}

export function useAutoScroll() {
  const context = useContext(AutoScrollContext);
  if (context === undefined) {
    throw new Error("useAutoScroll must be used within an AutoScrollProvider");
  }
  return context;
}