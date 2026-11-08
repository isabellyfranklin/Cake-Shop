import styles from './testimonials.module.css'
import TestimonialCard from "../../interface/TestimonialCard/TestimonialCard";
import Section from "../../interface/Section/Section";

import imageOne from '../../assets/feedback/feedback-one.jpg'
import imageTwo from '../../assets/feedback/feedback-two.jpg'
import imageThree from '../../assets/feedback/feedback-three.jpg'

export default function Testimonials(){

    const feedBacks = [
        {
            image: imageOne,
            name: "Mariana Silva",
            text: "Além de lindo, o bolo estava delicioso. Deixou meu aniversário ainda mais especial!",
            type: "Aniversário",
        },

        {
            image: imageTwo,
            name: "Camila Rocha",
            text: "O bolo do nosso casamento foi um sonho. Cuidado e carinho em cada detalhe.",
            type: "Casamento"
        },

        {
            image: imageThree,
            name: "Rafael Costa",
            text: "A caixa de doces fez o maior sucesso. Já virou tradição aqui em casa!",
            type: "Caixa de doces",
        }
    ]

    return(
        <section className={styles.Testimonials}>
            <Section
            topTitle="CARINHO QUE VOLTA" 
            mainTitle="Quem prova, se encanta"/>
            <div className={styles.cards}>    
                {feedBacks.map( (item) => (
                <TestimonialCard
                key={item.name}
                userName={item.name}
                userText={item.text}
                userImage={item.image}
                userTypeCake={item.type}
                />
                ))}
    
            </div>
        </section>
    )
}