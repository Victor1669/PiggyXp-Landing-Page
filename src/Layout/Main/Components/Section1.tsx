import { forwardRef } from "react";
import { useShowMenu } from "@Contexts/useShowMenu";

import Styles from "../Styles/Section1.module.css";

import Phones from "@MainAssets/section1/Phones.png";
import Menu from "@MainAssets/section1/Menu.svg";

const Section1 = forwardRef<HTMLDivElement>((_, ref) => {
  return (
    <section ref={ref} className={Styles.Section1}>
      <MenuButton />

      <div className={Styles.PhoneImageContainer}>
        <h2>Educação financeira na palma da sua mão</h2>
        <img
          src={Phones}
          alt="Dois celulares com o aplicativo PiggyXp aberto"
        />
      </div>

      <DownloadButton />
    </section>
  );
});

export default Section1;

function MenuButton() {
  const { setShowMenu } = useShowMenu();

  function handleClick() {
    setShowMenu((sm) => !sm);
  }

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
      href="https://expo.dev/artifacts/eas/5gmCK4Cy8rYvkPyrRtoFkL.apk"
      download={true}
      rel="noopener noreferrer"
    >
      Download App
    </a>
  );
}
