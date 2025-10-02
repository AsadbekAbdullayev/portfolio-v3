import Link from "next/link";
import { ArrowRight } from "react-feather";

import styles from "@/styles/Work.module.css";
import { Button } from "@/components/Button";
import { WorkCard } from "@/components/WorkCard";
import works from "@/constants/works";
import { BouncyBox } from "@/components/BouncyBox";

function WorkPage() {
  return (
    <main>
      <BouncyBox>
        <h1>Work Experience</h1>
      </BouncyBox>
      <section className={styles.worksListContainer}>
        {works.map((work, i) => (
          <BouncyBox key={work.companyName} delay={Math.min(50 * i, 500)}>
            <WorkCard work={work} />
          </BouncyBox>
        ))}
      </section>
      <BouncyBox delay={50 * works.length}>
        <Link href="/projects">
          <Button icon={<ArrowRight />}>Learn about side projects</Button>
        </Link>
      </BouncyBox>
    </main>
  );
}

export default WorkPage;
