import { ContactProps } from "./interfaces";
import * as S from "./styles";

export const Contact = ({ items }: ContactProps) => {
  return (
    <S.Content>
      <S.Message>Contact me:</S.Message>
      <S.IconContainer>
        {items.map((item, key) => (
          <a key={key} href={item.link} target="_blank" rel="noreferrer" id={`icon-${key.toString()}`}>
            {item.icon}
          </a>
        ))}
      </S.IconContainer>
    </S.Content>
  );
};
