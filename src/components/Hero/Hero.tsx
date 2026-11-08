import styles from "./hero.module.css";
import cakeImagem from '../../assets/cakes/cake-img.png'

export function Hero() {
  return (
    <section id="inicio" className={styles.hero}>
      <div className={styles.contentHero}>

        <p className={styles.topTitle}>Feito à mão, com amor</p>

        <h1 className={styles.mainTitle}>Momentos mais doces começam <br />aqui</h1>

        <p className={styles.bottomTitle}>
          Bolos artesanais para celebrar a vida.
        </p>

        <div className={styles.actions}>
            <button type="button" className={`${styles.buttons} ${styles.primary}`}>
              Ver tudo
            </button>
            <button type="button" className={`${styles.buttons} ${styles.secondary}`}>
              Encomenda personalizada
            </button>
        </div>
      </div>

      <figure className={styles.media}>

        <img
          src={cakeImagem}
          alt="Bolo confeitado com morangos frescos sobre um suporte de cerâmica"
          className={styles.image}
        />

        <figcaption className={styles.caption}>
          Um carinho em cada fatia.
        </figcaption>
        

      </figure>
    </section>
  );
}
