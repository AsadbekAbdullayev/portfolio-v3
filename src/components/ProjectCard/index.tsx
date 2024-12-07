import Image from "next/image";
import { TechnologiesList } from "../TechnologiesList";
import styles from "./ProjectCard.module.css";

type Project = {
  imageSrc: any;
  link: string;
  title: string;
  usedTechnologies: string[];
};

type Props = {
  project: Project;
};

export function ProjectCard({ project }: Props) {
  return (
    <a className={styles.container} href={project.link} target="_blank">
      <div className={styles.thumbnailContainer}>
        <Image src={project.imageSrc} alt={project.title} />
      </div>
      <div className={styles.bodyContainer}>
        <h5 className={styles.title}>{project.title}</h5>
        <TechnologiesList techs={project.usedTechnologies} />
      </div>
    </a>
  );
}
