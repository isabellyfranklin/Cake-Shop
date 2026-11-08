import Section from "../../interface/Section/Section";
import styles from "./about.module.css"

export default function About() {
  return (
    <section id="sobre" className={styles.about}>
      
      <div className={styles.media}>
        <div className={styles.image}>
            {/* imagem fica aqui */}
        </div>
      </div>

       <div className={styles.title}>
           <Section
            topTitle="A DOÇURA MORA NOS DETALHES"
            mainTitle="Feito com afeto."
            secondTitle="Do começo ao fim."
            />
            <p className={styles.description}>Na Doce Encanto, cada receita tem um pouco da nossa história. Escolhemos bons ingredientes e cuidamos de cada detalhe para transformar suas celebrações em lembranças deliciosas.</p>
            <button className={styles.button}>
                Nossa história
            </button>
       </div>

    </section>
  );
}
