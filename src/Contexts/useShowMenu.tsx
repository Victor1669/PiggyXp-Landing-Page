import { createContext, useContext, useState } from "react";

interface ShowMenuProviderProps {
  children: React.ReactNode;
}

type ShowMenuProviderValue = {
  showMenu: boolean;
  setShowMenu: React.Dispatch<React.SetStateAction<boolean>>;
};

const ShowMenuContext = createContext<ShowMenuProviderValue | undefined>(
  undefined,
);

function ShowMenuProvider({ children }: ShowMenuProviderProps) {
  const [showMenu, setShowMenu] = useState<boolean>(false);

  const value: ShowMenuProviderValue = { showMenu, setShowMenu };
  return (
    <ShowMenuContext.Provider value={value}>
      {children}
    </ShowMenuContext.Provider>
  );
}

function useShowMenu() {
  const context = useContext(ShowMenuContext);

  if (context === undefined)
    throw new Error("ShowMenuContext usado fora do ShowMenuProvider!");

  return context;
}

export { ShowMenuProvider, useShowMenu };
