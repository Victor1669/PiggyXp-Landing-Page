import { useShowMenu } from "../../Contexts/useShowMenu";

import Styles from "./Header.module.css";

import { TabBarImages } from "../../assets/TabBar/TabBarImages";

const { contato, projeto, sobreNos, time } = TabBarImages;

export default function NavigationContainer() {
  return (
    <nav className={Styles.NavigationContainer}>
      <NavigationButton imgSrc={projeto} text="Projeto" id="projeto" />
      <NavigationButton imgSrc={sobreNos} text="Sobre nós" id="sobreNos" />
      <NavigationButton imgSrc={time} text="Equipe" id="equipe" />
      <NavigationButton imgSrc={contato} text="Contato" id="contatos" />
    </nav>
  );
}

interface NavigationButtonProps {
  text: string;
  imgSrc: string;
  id: string;
}

function NavigationButton({ text, imgSrc, id }: NavigationButtonProps) {
  const { setShowMenu } = useShowMenu();

  function handleNavigation() {
    setShowMenu(false);
    window.location.href = `#${id}`;
  }
  return (
    <button className={Styles.NavigationButton} onClick={handleNavigation}>
      <img width={25} src={imgSrc} alt={text} />
      <p>{text}</p>
    </button>
  );
}
