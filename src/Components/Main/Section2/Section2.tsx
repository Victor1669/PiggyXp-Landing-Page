import Section2Part1 from "./Part1/Part1";
import Section2Part2 from "./Part2/Part2";

import Styles from "./Section2.module.css";

export default function Section2() {
  return (
    <section className={Styles.Section2}>
      <Section2Part1 />
      <Section2Part2 />
    </section>
  );
}
