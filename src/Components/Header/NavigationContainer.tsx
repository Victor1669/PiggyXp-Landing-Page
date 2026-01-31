import { useShowMenu } from "../../Contexts/useShowMenu";

import Styles from "./Header.module.css";

import { TabBarImages } from "../../assets/TabBar/TabBarImages";

const { contato, projeto, sobreNos, time } = TabBarImages;

export default function NavigationContainer() {
  return (
    <nav className={Styles.NavigationContainer}>
      <NavigationButton imgSrc={projeto} text="Projeto" top={700} />
      <NavigationButton imgSrc={sobreNos} text="Sobre nós" top={1140} />
      <NavigationButton imgSrc={time} text="Equipe" top={1495} />
      <NavigationButton imgSrc={contato} text="Contato" top={2100} />
    </nav>
  );
}

interface NavigationButtonProps {
  text: string;
  imgSrc: string;
  top: number;
}

function NavigationButton({ text, imgSrc, top }: NavigationButtonProps) {
  const { setShowMenu } = useShowMenu();
  return (
    <div className={Styles.NavigationButton}>
      <img width={25} src={imgSrc} alt={text} />
      <button
        onClick={() => {
          setShowMenu(false);
          scrollTo({
            behavior: "smooth",
            top,
          });
        }}
      >
        {text}
      </button>
    </div>
  );
}
