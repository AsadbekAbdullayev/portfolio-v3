import { GitHub, Linkedin } from "react-feather";

import styles from "./Footer.module.css";

export function Footer() {
  return (
    <div className={styles.footer}>
      <div className={styles.footerContent}>
        <div>
          <p>© Asadbek Abdullayev {new Date().getFullYear()}</p>
        </div>
        <div className="flex">
          <div style={{ marginRight: 10 }}>
            <a
              href="https://www.linkedin.com/in/asadbek-abdullayev-691827235"
              title="Learn more on LinkedIn"
              target="_blank"
              rel="noreferrer"
            >
              <Linkedin />
            </a>
          </div>
          <div>
            <a
              href="https://github.com/AsadbekAbdullayev"
              title="Edit this page on GitHub"
              target="_blank"
              rel="noreferrer"
            >
              <GitHub />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
