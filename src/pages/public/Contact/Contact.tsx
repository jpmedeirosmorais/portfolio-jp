import { Contact as ContactIcons } from "components";
import { items } from "common/utils/itemsContact";
import * as S from "./styles";
import { Layout } from "containers/Layout/Layout";

export const Contact = () => {
  return (
    <Layout>
      <S.Content>
        <ContactIcons items={items} />
      </S.Content>
    </Layout>
  );
};
