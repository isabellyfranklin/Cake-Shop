import arrowIcon from "../../assets/arrow-icon.svg";
import style from "./TypeCake.module.css";

interface Props {
  imagem?: string;
  nameImagem?: string;
  cakeType?: string;
}

export default function TypeCake({ imagem, cakeType, nameImagem }: Props) {
  return (
      <div className={style.card}>

        <figure className={style.fig}>
          <img className={style.image} src={imagem} alt={nameImagem} />
        </figure>

        <div className={style.titles}>
          <h2 className={style.nameCake}>{cakeType}</h2>

          <span className={style.icon} aria-hidden="true">
            <img className={style.arrowIcon} src={arrowIcon} />
          </span>
        </div>

      </div>
  );
}
