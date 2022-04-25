import { AppProviderProps } from "./interfaces";
import { Navbar } from "components/Navbar";
import { items } from "./utils";

export const AppProvider = ({ children }: AppProviderProps) => {
  return (
    <>
      <Navbar items={items} />
      {children}
    </>
  );
};
