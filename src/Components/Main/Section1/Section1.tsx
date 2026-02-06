import { forwardRef } from "react";
import { useScreenVerifier } from "../../../Contexts/useScreenVerifier";
import { useShowMenu } from "../../../Contexts/useShowMenu";

import Styles from "./Section1.module.css";

import Phones from "./assets/Phones.png";
import Menu from "./assets/Menu.svg";

const Section1 = forwardRef<HTMLDivElement>((_, ref) => {
  return (
    <section ref={ref} className={Styles.Section1}>
      <MenuButton />

      <img
        className={Styles.PhoneImage}
        src={Phones}
        alt="Dois celulares com o aplicativo PiggyXp aberto"
      />

      <DownloadButton />
    </section>
  );
});

export default Section1;

function MenuButton() {
  const { screenType } = useScreenVerifier();
  const { setShowMenu } = useShowMenu();

  function handleClick() {
    setShowMenu((sm) => !sm);
  }

  if (screenType === "mobile")
    return (
      <img
        style={{ zIndex: 998 }}
        src={Menu}
        className={Styles.MenuButton}
        onClick={(e) => {
          e.stopPropagation();
          handleClick();
        }}
      />
    );
}

function DownloadButton() {
  return (
    <a
      className={Styles.DownloadButton}
      href="https://expo.dev/artifacts/eas/pgbhuTqbxU27hEHEnH9QDw.apk"
      download={true}
      rel="noopener noreferrer"
    >
      Download App
    </a>
  );
}
