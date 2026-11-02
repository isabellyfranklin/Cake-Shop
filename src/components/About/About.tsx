import Section from "../../interface/Section/Section";
import style from "./about.module.css"

export default function About() {
  return (
    <section className={style.about}>
      
      <div className={style.media}>
        <div className={style.image}>
            {/* imagem fica aqui */}
        </div>
      </div>

       <div className={style.title}>
           <Section
            topTitle="A DOÇURA MORA NOS DETALHES"
            mainTitle="Feito com afeto."
            secondTitle="Do começo ao fim."
            />
            <p className={style.description}>Na Doce Encanto, cada receita tem um pouco da nossa história. Escolhemos bons ingredientes e cuidamos de cada detalhe para transformar suas celebrações em lembranças deliciosas.</p>
            <button className={style.button}>
                Nossa história
            </button>
       </div>

    </section>
  );
}
