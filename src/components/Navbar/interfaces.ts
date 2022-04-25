export interface NavbarProps {
  items: Item[];
}

export interface ItemProps {
  isGreen?: boolean;
}

interface Item {
  name: string;
  link: string;
}
