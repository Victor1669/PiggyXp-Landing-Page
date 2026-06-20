import Styles from "./CardComImagem.module.css";

export default function CardComImagem({
  src,
  alt,
  className,
  children,
}: {
  src: any;
  alt: string;
  children: string;
  className?: string;
}) {
  return (
    <div className={Styles.CardComImagem + " " + (className ?? "")}>
      <img src={src} alt={alt} />
      <p>{children}</p>
    </div>
  );
}
