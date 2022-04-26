import { Layout } from "containers/Layout/Layout";
import { PortfolioProps } from "./interfaces";
import * as S from "./styles";

export const Portfolio = ({ projects }: PortfolioProps) => {
    return <Layout>
        <S.Content>
            <S.TitlePage>Meus trabalhos</S.TitlePage>
            {projects.map((project, index) => (
                <S.Card key={index} color={project.backgroundColor}>
                    <S.ProjectPicture src={project.srcImage} />
                    <S.TextContent>
                        <S.Title>{project.title}</S.Title>
                        <S.Subtitle>{project.subtitle}</S.Subtitle>
                        <S.Description>{project.description}</S.Description>
                        <S.Link href={project.link}>Veja mais aqui...</S.Link>
                    </S.TextContent>
                </S.Card>
            ))}


        </S.Content>
    </Layout>;
};