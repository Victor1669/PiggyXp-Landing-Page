import { useOutsideClick } from "@Hooks/useOutsideClick";

import Styles from "./Header.module.css";

import NavigationContainer from "@UI/Header/NavigationContainer/NavigationContainer";

import Logo from "@UI/Header/Logo/Logo";

export default function Header() {
  function handleOutsideClick() {
    document
      .getElementsByTagName("header")[0]
      .setAttribute("data-menu-open", "false");
  }

  const menuRef = useOutsideClick(handleOutsideClick, true);

  return (
    <>
      <header ref={menuRef} data-menu-open={false} className={Styles.Header}>
        <Logo />
        <NavigationContainer />
      </header>
    </>
  );
}
