import * as S from "./styles";
import { IconJP } from "common/assets/svg";
import { NavbarProps } from "./interfaces";
import { Link } from "react-router-dom";


export const Navbar = ({ items }: NavbarProps) => {
  const url = window.location.pathname;

  return (
    <S.Content>
      <S.Brand>
        <IconJP />
      </S.Brand>

      <S.Items>
        {items.map((item, key) => (
          <S.Item isGreen={url === item.link} key={key}>
            <Link to={item.link}> {item.name} </Link>
          </S.Item>
        ))}
      </S.Items>
    </S.Content>
  );
};
