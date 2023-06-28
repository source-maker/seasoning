import { createContext, Dispatch, SetStateAction, useState } from 'react';

export interface IDrawerProviderProps {
  children: React.ReactNode;
}

const DrawerContext = createContext<{
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
}>({
  open: false,
  setOpen: () => {},
});

function DrawerProvider({ children }: IDrawerProviderProps) {
  const [open, setOpen] = useState(false);

  return (
    <DrawerContext.Provider
      value={{
        open,
        setOpen,
      }}
    >
      {children}
    </DrawerContext.Provider>
  );
}

export { DrawerContext, DrawerProvider };
