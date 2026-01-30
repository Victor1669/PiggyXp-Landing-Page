import { forwardRef } from "react";
import { motion } from "framer-motion";

import Styles from "./Card.module.css";

import Linkedin from "./Linkedin.svg";

interface CardProps {
  cardType: "people" | "information";
  children: string;
  img: {
    width: number;
    src: string;
    alt: string;
  };

  ref?: React.ForwardedRef<HTMLDivElement>;
  peopleName?: string;
  peopleSocialMedia?: string;
  peopleStack?: string;
  enableAnimation?: boolean;
  style?: React.CSSProperties;
}

const Card = forwardRef<HTMLDivElement, CardProps>(
  (
    {
      cardType,
      children,
      img,
      peopleName,
      peopleSocialMedia,
      peopleStack,
      enableAnimation = false,
      style,
    },
    ref,
  ) => {
    function PeopleCardContent() {
      return (
        <div className={Styles.PeopleCardContainer} style={style}>
          <img
            className={Styles.Image}
            width={img.width}
            src={img.src}
            alt={img.alt}
          />
          <p className={Styles.Name}>{children}</p>
          <p className={Styles.Stack}>{peopleStack}</p>
          <span
            className={Styles.LinkedInLogo}
            onClick={() => {
              window.location.href = peopleSocialMedia ?? "#";
            }}
          >
            <img src={Linkedin} alt={`LinkedIn do ${peopleName}`} />
          </span>
        </div>
      );
    }
    function InformationCardContent() {
      return (
        <div className={Styles.InformationCardContent}>
          <img width={img.width} src={img.src} alt={img.alt} />
          <p>{children}</p>
        </div>
      );
    }
    return (
      <motion.div
        ref={ref}
        initial={enableAnimation ? { opacity: 0, y: 60 } : {}}
        whileInView={enableAnimation ? { opacity: 1, y: -30 } : {}}
        viewport={enableAnimation ? { once: true } : {}}
        className={Styles.Card}
      >
        {cardType === "information" && <InformationCardContent />}

        {cardType === "people" && <PeopleCardContent />}
      </motion.div>
    );
  },
);

export { Card };
