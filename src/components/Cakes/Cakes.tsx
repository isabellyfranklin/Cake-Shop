import ProductCard from "../../interface/ProductCard/ProductCard";
import Section from "../../interface/Section/Section";
import style from "./cakes.module.css";

import cakeStrawberry from '../../assets/CakeFlavors/Strawberrycake.svg'
import cakeChocolate from '../../assets/CakeFlavors/ChocolateCake.svg'
import limonCake from '../../assets/CakeFlavors/LimonCake.svg'
import redVelvet from '../../assets/CakeFlavors/RedVelvetCake.svg'

export default function Cakes() {
  const listCakes = [
    {
      image: cakeStrawberry,
      name: "Encanto de morango",
      description: "Baunilha, creme e morangos frescos.",
      price: "149,00",
    },
    {
      image: cakeChocolate,
      name: "Chocolate dos sonhos",
      description: "Cacau intenso e ganache cremosa.",
      price: "159,00",
    },
    {
      image: limonCake,
      name: "Nuvem de limão",
      description: "Limão-siciliano e merengue leve.",
      price: "139,00",
    },
    {
      image: redVelvet,
      name: "Red velvet especial",
      description: "Massa aveludada e cream cheese.",
      price: "169,00",
    },
  ];

  return (
    <section className={style.cakes}>
      <Section
        topTitle="OS QUERIDINHOS DA CASA"
        mainTitle="Amor à primeira fatia"
        description="Nossos mais vendidos, feitos para encantar.">
        <div className={style.cards}>
          {listCakes.map((item) => (
            <ProductCard
              key={item.name}
              imagem={item.image}
              nameImagem={item.name}
              cakeType={item.name}
              price={item.price}
              CakeIngredients={item.description}
            ></ProductCard>
          ))}
        </div>
      </Section>
    </section>
  );
}
