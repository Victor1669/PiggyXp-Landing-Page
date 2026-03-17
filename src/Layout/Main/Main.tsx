import { useShowMenu } from "@Contexts/useShowMenu";

import { useOrientation } from "@Hooks/useOrientation";

import Styles from "./Styles/Main.module.css";

import DownloadApp from "./Components/1DownloadApp";
import Project from "./Components/2Project/2Project";
import AboutUs from "./Components/3AboutUs";
import Team from "./Components/4Team";
import CardsInfo from "./Components/5InfoCards";

export default function Main() {
  const { setShowMenu } = useShowMenu();
  const orientation = useOrientation();

  return (
    <main className={Styles.Main} onClick={() => setShowMenu(false)}>
      {orientation === "landscape" && <ScreenWarning />}
      <DownloadApp />
      <Project />
      <AboutUs />
      <figure className={Styles.BackgroundImage} />
      <Team />
      <CardsInfo />
    </main>
  );
}

function ScreenWarning() {
  return (
    <div className={Styles.ScreenWarning}>
      <p>
        Deixe seu celular/tablet em pé para poder ter o máximo da experiência
        desse site
      </p>
    </div>
  );
}
