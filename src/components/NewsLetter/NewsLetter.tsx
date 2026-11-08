import Section from "../../interface/Section/Section";
import styles from "./newsLetter.module.css";

export default function NewsLetter() {
  return (
    <section className={styles.newsLetter}>
      <div className={styles.content}>
          <Section
            mainTitle="Uma dose de doçura no seu e-mail"
            description="Receba novidades e delícias em primeira mão."
          />
          <div className={styles.subscription}>
            <form className={styles.form} onSubmit={(e) => e.preventDefault()}>
              <input
                aria-label="Seu e-mail"
                className={styles.input}
                type="email"
                placeholder="Seu melhor e-mail"
                required
              />
              <button type="submit" className={styles.button}>
                Quero receber
              </button>
            </form>
            <p className={styles.note}>
              Só coisas boas. Você pode sair quando quiser.
            </p>
          </div>
      </div>
    </section>
  );
}
