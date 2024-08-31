import { createContext, useContext, ReactNode } from "react";

type Props = {
  children: ReactNode;
  open: boolean;
};

type ThemeContextType = {
  open: boolean;
};

export const ThemeContext = createContext<ThemeContextType | null>(null);

export const useCurrentUser = () => {
  const currentUserContext = useContext(ThemeContext);

  if (!currentUserContext) {
    throw new Error(
      "useCurrentUser has to be used within <CurrentUserContext.Provider>"
    );
  }

  return currentUserContext;
};

export default function AboutProvider({ children, open }: Props) {
  const _value = {
    open,
  };

  return (
    <ThemeContext.Provider value={_value}>{children}</ThemeContext.Provider>
  );
}
