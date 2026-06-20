import EmblaCarousel from "@UI/Carousel/EmblaCarousel";

import useGetUsersInfo from "@Hooks/useGetUsersInfo";

import MembroEquipe from "./MembroEquipe/MembroEquipe";

import Styles from "./Equipe.module.css";

export default function Equipe() {
  const { usersWithImageArray } = useGetUsersInfo();
  return (
    <section className={Styles.Equipe} id="equipe">
      <EmblaCarousel
        showButtons={true}
        data={usersWithImageArray}
        render={(desenvolvedor) => {
          return (
            <MembroEquipe membro={desenvolvedor} key={desenvolvedor.name} />
          );
        }}
      />
    </section>
  );
}
