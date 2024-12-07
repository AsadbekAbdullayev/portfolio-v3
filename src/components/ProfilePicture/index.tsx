import Image from "next/image";
import profilePic from "../../../public/images/asadbek2.png";
import styles from "./ProfilePicture.module.css";

export function ProfilePicture() {
  return (
    <div className={styles.profilePictureContainer}>
      <Image src={profilePic} alt="asadbek" width={96} />
    </div>
  );
}
