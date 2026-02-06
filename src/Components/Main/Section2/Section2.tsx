import { forwardRef } from "react";

import Section2Content from "./Section2Content/Section2Content";

import Styles from "./Section2.module.css";

const Section2 = forwardRef<HTMLDivElement>((_, ref) => (
  <section ref={ref} className={Styles.Section2}>
    <Section2Content />
  </section>
));

export default Section2;
