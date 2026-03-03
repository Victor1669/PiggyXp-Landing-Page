import Styles from "../../Styles/2Project.module.css";

import BrowserSearch from "@MainAssets/Project/BrowserSearch.png";

interface BrowserSearchContainerProps {
  ref: React.RefObject<null>;
  children: string;
}

export default function BrowserSearchContainer({
  ref,
  children,
}: BrowserSearchContainerProps) {
  return (
    <div ref={ref} className={Styles.BrowserSearchContainer}>
      <img
        src={BrowserSearch}
        alt="Uma imagem semelhante à um navegador, fazendo uma pesquisa sobre o PiggyXp"
      />
      <div className={Styles.TextContainer}>
        <p>{children}</p>
      </div>
    </div>
  );
}
