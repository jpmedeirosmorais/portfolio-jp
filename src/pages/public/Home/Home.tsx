
import { Contact } from "components";
import { Layout } from "containers/Layout/Layout";
import { items } from "common/utils/itemsContact";
import * as S from "./styles";
import { Apresentation } from "./components";


export const Home = () => {
  return <Layout>
    <S.Content>
      <S.BannerContent>
        <img src="banner.png" alt="banner" />
      </S.BannerContent>
      <Apresentation />
      <Contact items={items} />
    </S.Content>
  </Layout>;
};
