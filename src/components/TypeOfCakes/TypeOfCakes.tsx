import TypeCake from "../../interface/TypeCake/TypeCake";
import style from "./TypeOfCakes.module.css";

import birthdayCake from "../../assets/cakes/image-birthday-cake.svg";
import cupCake from "../../assets/cakes/image-cupCake.png";
import personalizados from "../../assets/cakes/image-persolizados-cake.svg";
import sweets from "../../assets/cakes/image-box-of-sweets.svg";
import wedding from "../../assets/cakes/image-marrige-cake.svg";

export default function TypeOfCakes() {
  const categorias = [
    {
      type: "Aniversário",
      imagem: birthdayCake,
      alt: "Bolo de aniversário com velas",
    },
    {
      type: "Casamento",
      imagem: wedding,
      alt: "Bolo de casamento com flores",
    },
    {
      type: "Cupcakes",
      imagem: cupCake,
      alt: "Cupcakes com cobertura rosa",
    },
    {
      type: "Personalizado",
      imagem: personalizados,
      alt: "Bolo personalizado",
    },
    {
      type: "Caixa de doces",
      imagem: sweets,
      alt: "Caixa de chocolate",
    },
  ];

  return (
    <section className={style.typeOfCakes}>
      <div className={style.contentTypeOfCakes}>
        <p className={style.topTitle}>PARA CADA CELEBRAÇÃO</p>
        <h2 className={style.mainTitle}>Qual é o seu momento?</h2>

        <div className={style.cards}>
          {categorias.map((item) => {
            return (
              <TypeCake
                cakeType={item.type}
                imagem={item.imagem}
                nameImagem={item.alt}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}
