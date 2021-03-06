import { Layout } from "containers/Layout/Layout";
import * as S from "./styles"
import { AboutProps } from "./interfaces";
import { Contact } from "components";
import { items as itemsContact } from "common/utils/utils";


export const About = ({ items }: AboutProps) => {
  return (
    <Layout>
      <S.Content>
        <S.ProfileContainer>
          <S.ProfileImage src="JP.jpg" />
        </S.ProfileContainer>
        {items.map((item, index) => (
          <S.Card key={index} color={item.color}>
            <S.Title>{item.title}</S.Title>
            <S.Text>{item.content}</S.Text>
          </S.Card>
        ))}
        <S.ContactContainer>
        <Contact items={itemsContact} />
        </S.ContactContainer>
      </S.Content>
    </Layout>
  );
};
