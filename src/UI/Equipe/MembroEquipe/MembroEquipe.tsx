import type { UserWithImageType } from "Types/UserWithImageType";

import Styles from "./MembroEquipe.module.css";

import GithubIcon from "@Assets/GitHub.svg";
import LinkedinIcon from "@Assets/Linkedin.svg";

export default function MembroEquipe({
  membro,
}: {
  membro: UserWithImageType;
}) {
  const { avatar_url, github, linkedin, name, stack } = membro;
  return (
    <div className={Styles.MembroEquipe}>
      <img data-unique-name="pessoa" src={avatar_url} alt={name} />
      <p>{name}</p>
      <p>{stack}</p>
      <div>
        <a data-unique-name="github" href={github}>
          <img src={GithubIcon} alt="github" />
        </a>
        <a href={linkedin}>
          <img data-unique-name="linkedin" src={LinkedinIcon} alt="LinkedIn" />
        </a>
      </div>
    </div>
  );
}
