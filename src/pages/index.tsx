import Link from "next/link";

import { ArrowRight } from "react-feather";

import { Button } from "@/components/Button";
import { ProfilePicture } from "@/components/ProfilePicture";
import { BouncyBox } from "@/components/BouncyBox";

export default function Home() {
  const yearsOfExperience = (() => {
    const startedYear = 2021;
    const currentYear = new Date().getFullYear();

    return currentYear - startedYear;
  })();
  return (
    <>
      <div>
        <BouncyBox>
          <ProfilePicture />
        </BouncyBox>
        <BouncyBox delay={25}>
          <h1>Asadbek Abdullayev</h1>
        </BouncyBox>
        <div>
          <BouncyBox delay={30}>
            <p>
              Hey 👋, I&apos;m Asadbek, a JavaScript/TypeScript software
              engineer based in Tashkent, Uzbekistan. I have over{" "}
              {yearsOfExperience} years of experience building high-quality
              software using various JavaScript technologies, with a focus on
              React and Vue.
            </p>
          </BouncyBox>
          <BouncyBox delay={100}>
            <p>
              I&apos;ve worked on a variety of projects, including delivering
              and architecting complex CRM systems leading frontend work on core
              features, internal tools. I actively lead decision-making
              processes and play a key role in setting team goals.
            </p>
          </BouncyBox>
          {/* <BouncyBox delay={120}>
            <p>
              I&apos;m always learning new technologies and looking for ways to
              improve my skills and workflow. In my free time, I enjoy spending
              time with my family, traveling, playing online games, and drinking
              coffee ☕️
            </p>
          </BouncyBox> */}
        </div>
        <BouncyBox delay={150} from={{ y: 50, opacity: 0 }}>
          <Link href="https://www.linkedin.com/in/asadbek-abdullayev-691827235/">
            <Button icon={<ArrowRight />}>Learn more about work</Button>
          </Link>
        </BouncyBox>
      </div>
    </>
  );
}
