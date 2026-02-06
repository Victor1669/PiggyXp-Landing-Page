import Styles from "./Footer.module.css";

import Email from "../../assets/contato.png";
import GitHub from "./GitHub.svg";

export default function Footer() {
  return (
    <footer className={Styles.Footer}>
      <div className={Styles.Content}>
        <LinkContainer1 />
        <LinkContainer2 />
        <small>&copy; 2025–2027 VSS. Todos os direitos reservados.</small>
      </div>
    </footer>
  );
}

function LinkContainer1() {
  return (
    <span>
      <img
        width={45}
        src={Email}
        alt="Imagem de uma carta representando um e-mail."
      />
      <a href="mailto:piggyxp.oficial@gmail.com">piggyxp.oficial@gmail.com</a>
    </span>
  );
}

function LinkContainer2() {
  return (
    <span>
      <img width={60} src={GitHub} alt="Logo da GitHub" />
      <a href="https://github.com/Victor1669/PiggyXp-FrontEnd">
        Repositório do Front-End
      </a>
      <a href="https://github.com/pietros133/Piggyxp---Backend">
        Repositório do Back-End
      </a>
      <a href="https://github.com/Victor1669/PiggyXp-Landing-Page">
        Repositório dessa página
      </a>
    </span>
  );
}
