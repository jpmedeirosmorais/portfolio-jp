import { Navbar } from "components";
import { items } from "./utils";
import { LayoutProps } from "./interfaces";
import * as S from "./styles";


export const Layout = ({ children }: LayoutProps) => {
    return (
        <S.Content>
            <Navbar items={items} />
            <S.Body>
                {children}
            </S.Body>
        </S.Content>
    );
};