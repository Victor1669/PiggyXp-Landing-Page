import Styles from "./Main.module.css";

import BaixarApp from "@UI/BaixarApp/BaixarApp";
import Equipe from "@UI/Equipe/Equipe";
import ExplicacaoProjeto from "@UI/ExplicacaoProjeto/ExplicacaoProjeto";
import SobreNos from "@UI/SobreNos/SobreNos";
import CardsFinais from "@UI/CardsFinais/CardsFinais";

export default function Main() {
  return (
    <main className={Styles.Main}>
      <BaixarApp />
      <ExplicacaoProjeto />
      <SobreNos />
      <figure className={Styles.BackgroundImage} />
      <Equipe />
      <CardsFinais />
    </main>
  );
}
