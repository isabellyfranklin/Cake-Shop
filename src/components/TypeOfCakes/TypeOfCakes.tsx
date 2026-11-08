import TypeCake from "../../interface/TypeCake/TypeCake";
import styles from "./typeOfCakes.module.css";

import birthdayCake from "../../assets/cakes/image-birthday-cake.svg";
import cupCake from "../../assets/cakes/image-cupCake.svg";
import personalizados from "../../assets/cakes/image-persolizados-cake.svg";
import sweets from "../../assets/cakes/image-box-of-sweets.svg";
import wedding from "../../assets/cakes/image-marrige-cake.svg";
import Section from "../../interface/Section/Section";

const categorias = [
  {
    type: "Aniversário",
    imagem: birthdayCake,
    alt: "Bolo de aniversário com velas",
  },
  { type: "Casamento", 
    imagem: wedding,
     alt: "Bolo de casamento com flores"
  },
  { type: "Cupcakes",
    imagem: cupCake,
    alt: "Cupcakes com cobertura rosa"
  },
  { type: "Personalizado", 
    imagem: personalizados, 
    alt: "Bolo personalizado" 
  },
  { type: "Caixa de doces", 
    imagem: sweets, 
    alt: "Caixa de chocolate" 
  },
  
];

export default function TypeOfCakes() {
  return (
    <section className={styles.typeOfCakes}>
      <Section
        topTitle="PARA CADA CELEBRAÇÃO"
        mainTitle="Qual é o seu momento?"
      >
        <div className={styles.cards}>
          {categorias.map((item) => (
            <TypeCake
              key={item.type}
              cakeType={item.type}
              imagem={item.imagem}
              nameImagem={item.alt}
            />
          ))}
        </div>
      </Section>
    </section>
  );
}
