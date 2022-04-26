import { ReactElement } from "react";

export interface AboutProps {
  items: Item[];
}

export interface CardProps {
  color?: string;
}

export interface Item {
  title: string;
  content: ReactElement;
  color: string;
}
