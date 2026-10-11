import style from "./Hero.module.css";
import cakeImagem from '../../assets/cake-img.png'

export function Hero() {
  return (
    <section className={style.hero}>
      <div className={style.contentHero}>

        <p className={style.topTitle}>Feito à mão, com amor</p>

        <h1 className={style.mainTitle}>Momento mais doce começam <br />aqui</h1>

        <p className={style.bottomTitle}>
          Bolos artesanais para celebrar a vida.
        </p>

        <div className={style.actions}>
            <button 
            style={{backgroundColor: "#5A3A2E", border: 'none', padding: '10px'}}
            className={style.buttons}
            >
            Ver tudo
            </button>
            <button className={style.buttons}
            style={{ border: 'solid 1px #5A3A2E ', padding: '10px',backgroundColor: 'white', color: '#5A3A2E' }}
            >
            Encomenda personalizada
            </button>
        </div>
      </div>

      <figure className={style.media}>

        <img
          src={cakeImagem}
          alt="Bolo confeitado com morangos frescos sobre um suporte de cerâmica"
          className={style.image}
        />

        <figcaption className={style.caption}>
          Um carinho em cada fatia.
        </figcaption>
        

      </figure>
    </section>
  );
}
