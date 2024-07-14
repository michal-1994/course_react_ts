/** @format */

import { type ReactNode } from "react";

export interface HeaderProps {
  image: {
    src: string;
    alt: string;
  };
  children: ReactNode;
}

const Header = ({ image, children }: HeaderProps) => {
  return (
    <header>
      <img {...image} />
      {children}
    </header>
  );
};

export default Header;
