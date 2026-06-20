import Styles from "./TitleImage.module.css";

import Phones from "../assets/Phones.png";

export default function TitleImage() {
  return (
    <div className={Styles.TitleImage}>
      <h2>Educação financeira na palma da sua mão</h2>
      <h3>
        Transforme a forma como você gerencia seu dinheiro — aprendendo de
        maneira divertida e descontraída.
      </h3>
      <img
        className={Styles.PhoneImage}
        src={Phones}
        alt="Dois celulares com o aplicativo PiggyXp aberto"
      />
    </div>
  );
}
