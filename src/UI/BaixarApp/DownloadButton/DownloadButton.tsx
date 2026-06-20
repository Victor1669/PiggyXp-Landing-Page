import Styles from "./DownloadButton.module.css";

export default function DownloadButton() {
  const DOWNLOAD_LINK = import.meta.env.VITE_DOWNLOAD_LINK;
  return (
    <a
      className={Styles.DownloadButton}
      href={DOWNLOAD_LINK}
      download={true}
      rel="noopener noreferrer"
    >
      Download App
    </a>
  );
}
