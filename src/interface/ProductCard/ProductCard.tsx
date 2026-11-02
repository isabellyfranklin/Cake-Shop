import style from "./ProductCard.module.css";

interface Props {
  imagem: string;
  nameImagem: string;
  cakeType: string;
  CakeIngredients: string;
  price: number | string;
}

export default function ProductCard({
  imagem,
  nameImagem,
  cakeType,
  CakeIngredients,
  price,
}: Props) {
  return (
    <div className={style.card}>
      <figure className={style.fig}>
        <img className={style.image} src={imagem} alt={nameImagem} />
      </figure>

      <div className={style.titles}>
        <h2 className={style.nameCake}>{cakeType}</h2>
        <p className={style.CakeIngredients}>{CakeIngredients}</p>

        <div className={style.cardFooter}>
          <p className={style.price}>
            R$ {price}
          </p>
          <button type="button" className={style.addButton}>
            Adicionar
          </button>
        </div>
      </div>
    </div>
  );
}
