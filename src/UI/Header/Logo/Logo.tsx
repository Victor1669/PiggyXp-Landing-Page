import Styles from "./Logo.module.css";

import { TabBarImages } from "@Assets/TabBar/TabBarImages";
const { VSSLogo } = TabBarImages;

export default function Logo() {
  function handleClick() {
    window.scrollTo({ behavior: "smooth", top: 0 });
  }
  return (
    <figure className={Styles.Logo} onClick={handleClick}>
      <h1>PiggyXp - VSS</h1>
      <img src={VSSLogo} alt="Imagem da logo do VSS" />
    </figure>
  );
}
