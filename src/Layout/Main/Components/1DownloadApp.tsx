import { useShowMenu } from "@Contexts/useShowMenu";

import Styles from "../Styles/1DownloadApp.module.css";

import Phones from "@MainAssets/DownloadApp/Phones.png";
import Menu from "@MainAssets/DownloadApp/Menu.svg";

export default function DownloadApp() {
  return (
    <section className={Styles.DownloadApp}>
      <MenuButton />

      <div className={Styles.PhoneImageContainer}>
        <h2>Educação financeira na palma da sua mão</h2>
        <img
          className={Styles.PhoneImage}
          src={Phones}
          alt="Dois celulares com o aplicativo PiggyXp aberto"
        />
      </div>

      <DownloadButton />
    </section>
  );
}

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
  const DOWNLOAD_LINK = import.meta.env.VITE_DOWNLOAD_LINK;
  return (
    <a
      className={Styles.DownloadButton}
      href={DOWNLOAD_LINK}
      download={true}
      rel="noopener noreferrer"
    >
      Download App
    </a>
  );
}
