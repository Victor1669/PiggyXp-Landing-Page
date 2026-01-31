import { useScreenVerifier } from "../../Contexts/useScreenVerifier";
import { useShowMenu } from "../../Contexts/useShowMenu";

import Styles from "./Header.module.css";

import { TabBarImages } from "../../assets/TabBar/TabBarImages";
const { VSSLogo } = TabBarImages;

export default function Logo() {
  const { setShowMenu } = useShowMenu();
  const { screenType } = useScreenVerifier();

  function handleClick() {
    if (screenType === "mobile") {
      setShowMenu((sm) => !sm);
      window.scrollTo({ behavior: "smooth", top: 0 });
    } else {
      window.scrollTo({ behavior: "smooth", top: 0 });
    }
  }
  return (
    <figure className={Styles.Logo} onClick={handleClick}>
      <h1>PiggyXp - VSS</h1>
      <img src={VSSLogo} alt="Imagem da logo do VSS" />
    </figure>
  );
}
