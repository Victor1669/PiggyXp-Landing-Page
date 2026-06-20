import Styles from "./BrowserSearch.module.css";

import BrowserSearchBackground from "./BrowserSearchBackground.png";

export default function BrowserSearch({ children }: { children: string }) {
  return (
    <div className={Styles.BrowserSearch}>
      <img
        src={BrowserSearchBackground}
        alt="Uma imagem semelhante à um navegador, fazendo uma pesquisa sobre o PiggyXp"
      />
      <div className={Styles.TextContainer}>
        <p>{children}</p>
      </div>
    </div>
  );
}
