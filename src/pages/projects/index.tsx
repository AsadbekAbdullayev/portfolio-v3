import { ArrowRight } from "react-feather";
import styles from "@/styles/Projects.module.css";
import { Button } from "@/components/Button";
import { ProjectCard } from "@/components/ProjectCard";
import Cargo from "../../../public/images/cargo.jpeg";
import Kutubxona from "../../../public/images/kutubxona.png";
import Itskills from "../../../public/images/talent.jpeg";
import Gotix from "../../../public/images/gotix.jpeg";
import Lms from "../../../public/images/lms.png";
import Lux from "../../../public/images/lux.jpeg";
import Extra from "../../../public/images/extra.png";
import Game from "../../../public/images/game.jpeg";
import { BouncyBox } from "@/components/BouncyBox";





function ProjectsPage() {
  return (
    <div>
      <BouncyBox>
        <h1>Projects</h1>
      </BouncyBox>
      <div className={styles.container}>
        <div className={styles.projectsRow}>
          <BouncyBox delay={50}>
            <ProjectCard
              project={{
                imageSrc: Cargo,
                link: "https://dashboard.staging.nightwell-logistics.com",
                title: "Cargo Prime",
                usedTechnologies: [
                  "Javascript",
                  "Typescript",
                  "React js",
                  "Next js",
                  "Tailwind CSS",
                  "React Query",
                  "Redux",
                ],
              }}
            />
          </BouncyBox>
          <BouncyBox delay={150}>
            <ProjectCard
              project={{
                imageSrc: Kutubxona,
                link: "https://kutubxona.uzedu.uz",
                title: "Kutubxona",
                usedTechnologies: [
                  "Javascript",
                  "Typescript",
                  "React js",
                  "Next js",
                  "Tailwind CSS",
                  "React Query",
                  "Redux",
                ],
              }}
            />
          </BouncyBox>
        </div>
        <div className={styles.projectsRow}>
          <BouncyBox delay={250}>
            <ProjectCard
              project={{
                imageSrc: Itskills,
                link: "https://itskills.uz",
                title: "Itskills",
                usedTechnologies: [
                  "Javascript",
                  "Typescript",
                  "React js",
                  "Next js",
                  "Tailwind CSS",
                  "React Query",
                  "Redux",
                ],
              }}
            />
          </BouncyBox>
          <BouncyBox delay={350}>
            <ProjectCard
              project={{
                imageSrc: Lux,
                link: "https://luxcargo.uz",
                title: "Lux Cargo",
                usedTechnologies: [
                  "Javascript",
                  "Typescript",
                  "React js",
                  "Next js",
                  "Tailwind CSS",
                  "React Query",
                  "Redux",
                ],
              }}
            />
          </BouncyBox>
        </div>
        <div className={styles.projectsRow}>
          <BouncyBox delay={400}>
            <ProjectCard
              project={{
                imageSrc: Lms,
                link: "https://alkhorazmiy.uz",
                title: "LMS app",
                usedTechnologies: [
                  "Javascript",
                  "Typescript",
                  "React js",
                  "Next js",
                  "Tailwind CSS",
                  "React Query",
                  "Redux",
                ],
              }}
            />
          </BouncyBox>
          <BouncyBox delay={450}>
            <ProjectCard
              project={{
                imageSrc: Gotix,
                link: "https://goticket.uz",
                title: "Goticket",
                usedTechnologies: [
                  "Javascript",
                  "Typescript",
                  "React js",
                  "Next js",
                  "Tailwind CSS",
                  "React Query",
                  "Redux",
                ],
              }}
            />
          </BouncyBox>
        </div>
      </div>
      <BouncyBox delay={500}>
        <a target="_blank" href="https://t.me/Asadbek_2778" rel="noreferrer">
          <Button icon={<ArrowRight />}>Get in touch</Button>
        </a>
      </BouncyBox>
    </div>
  );
}

export default ProjectsPage;
