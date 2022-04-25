import { ReactElement } from "react";

export interface ContactProps{
    items: Item[];
}

interface Item {
    icon: ReactElement;
    link: string;
}