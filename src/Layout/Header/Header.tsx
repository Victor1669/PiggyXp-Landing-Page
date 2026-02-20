import { useShowMenu } from "../../Contexts/useShowMenu";

import Styles from "./Header.module.css";

import NavigationContainer from "./NavigationContainer";

import Logo from "./Logo";

export default function Header() {
  const { showMenu } = useShowMenu();

  return (
    <>
      <header
        className={`${Styles.Header} ${showMenu ? Styles.MenuOpen : Styles.MenuClosed}`}
      >
        <Logo />
        <NavigationContainer />
      </header>
    </>
  );
}
