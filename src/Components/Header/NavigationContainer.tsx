import { useShowMenu } from "../../Contexts/useShowMenu";

import Styles from "./Header.module.css";

import { TabBarImages } from "../../assets/TabBar/TabBarImages";

const { contato, projeto, sobreNos, time } = TabBarImages;

export default function NavigationContainer() {
  return (
    <nav className={Styles.NavigationContainer}>
      <NavigationButton imgSrc={projeto} text="Projeto" layer={2} />
      <NavigationButton imgSrc={sobreNos} text="Sobre nós" layer={3} />
      <NavigationButton imgSrc={time} text="Equipe" layer={4} />
      <NavigationButton imgSrc={contato} text="Contato" layer={6} />
    </nav>
  );
}

interface NavigationButtonProps {
  text: string;
  imgSrc: string;
  layer: 1 | 2 | 3 | 4 | 5 | 6;
}

function NavigationButton({ text, imgSrc, layer }: NavigationButtonProps) {
  const { setShowMenu } = useShowMenu();
  return (
    <div className={Styles.NavigationButton}>
      <img width={25} src={imgSrc} alt={text} />
      <button
        onClick={() => {
          setShowMenu(false);
          scrollTo({
            behavior: "smooth",
            top: window.innerHeight * (layer - 1),
          });
        }}
      >
        {text}
      </button>
    </div>
  );
}
