import arrowIcon from "../../assets/icons/arrow-icon.svg"
import styles from "./typeCake.module.css";

interface Props {
  imagem?: string;
  nameImagem?: string;
  cakeType?: string;
}

export default function TypeCake({ imagem, cakeType, nameImagem }: Props) {
  return (
      <div className={styles.card}>

        <figure className={styles.fig}>
          <img className={styles.image} src={imagem} alt={nameImagem} />
        </figure>

        <div className={styles.titles}>
          <h3 className={styles.nameCake}>{cakeType}</h3>

          <span className={styles.icon} aria-hidden="true">
            <img className={styles.arrowIcon} src={arrowIcon} alt="" />
          </span>
        </div>

      </div>
  );
}
