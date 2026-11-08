import styles from "./productCard.module.css";

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
    <div className={styles.card}>
      <figure className={styles.fig}>
        <img className={styles.image} src={imagem} alt={nameImagem} />
      </figure>

      <div className={styles.titles}>
        <h3 className={styles.nameCake}>{cakeType}</h3>
        <p className={styles.CakeIngredients}>{CakeIngredients}</p>

        <div className={styles.cardFooter}>
          <p className={styles.price}>
            R$ {price}
          </p>
          <button type="button" className={styles.addButton}>
            Adicionar
          </button>
        </div>
      </div>
    </div>
  );
}
