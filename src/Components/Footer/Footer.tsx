import Styles from "./Footer.module.css";

import Email from "../../assets/contato.png";
import GitHub from "./GitHub.svg";

export default function Footer() {
  return (
    <footer className={Styles.Footer}>
      <span>
        <img
          width={45}
          src={Email}
          alt="Imagem de uma carta representando um e-mail."
        />
        <a href="mailto:piggyxp.oficial@gmail.com">piggyxp.oficial@gmail.com</a>
      </span>
      <span>
        <img width={60} src={GitHub} alt="Logo da GitHub" />
        <p>code</p>
      </span>
      <small>&copy; 2025–2027 VSS. Todos os direitos reservados.</small>
    </footer>
  );
}
