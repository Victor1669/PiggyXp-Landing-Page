import TitleImage from "./TitleImage/TitleImage";
import DownloadButton from "./DownloadButton/DownloadButton";

import Styles from "./BaixarApp.module.css";

import Menu from "./assets/Menu.svg";

export default function BaixarApp() {
  return (
    <section className={Styles.BaixarApp}>
      <MenuButton />

      <TitleImage />

      <DownloadButton />
    </section>
  );
}

function MenuButton() {
  function handleClick() {
    document
      .getElementsByTagName("header")[0]
      .setAttribute("data-menu-open", "true");
  }

  return (
    <img
      onClick={handleClick}
      style={{ zIndex: 998 }}
      src={Menu}
      className={Styles.MenuButton}
    />
  );
}
