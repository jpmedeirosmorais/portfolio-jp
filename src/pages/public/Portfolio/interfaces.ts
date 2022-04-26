export interface PortfolioProps {
    projects: Project[];
}

export interface Project{
    srcImage: string;
    title: string;
    subtitle: string;
    description: string;
    link: string;
    backgroundColor: string;
}

export interface CardProps{
    color: string;
}