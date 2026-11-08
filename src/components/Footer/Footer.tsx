import styles from "./Footer.module.css";
import cakeIcon from "../../assets/icons/cake-icon.svg";
import instagramIcon from "../../assets/icons/icon-instagram.svg";
import facebookIcon from "../../assets/icons/icon-facebook.svg"

const explore = [
  { name: "Início", href: "#inicio" },
  { name: "Bolos", href: "#bolos" },
  { name: "Sobre", href: "#sobre" },
  { name: "Contato", href: "#contato" },
];

const acompanhe = [
  { name: "Instagram", href: "https://instagram.com/", icon: instagramIcon },
  { name: "Facebook", href: "https://facebook.com/", icon: facebookIcon },
];

export default function Footer() {
  return (
    <footer id="contato" className={styles.content}>
      <div className={styles.container}>
          <div className={styles.top}>
            <div className={styles.brand}>
              <a href="#inicio" className={styles.logo}>
                <img src={cakeIcon} alt="" className={styles.logoIcon} />
                <span className={styles.logoText}>
                  <strong className={styles.logoName}>Doce Encanto</strong>
                  <span className={styles.logoTagline}>Confeitaria Artesanal</span>
                </span>
              </a>
              <p className={styles.slogan}>
                Feito com carinho. Celebrado com você.
              </p>
            </div>
            <nav className={styles.group} aria-labelledby="footer-explore">
              <h2 id="footer-explore" className={styles.groupTitle}>
                Explore
              </h2>
              <ul className={styles.list}>
                {explore.map((item) => (
                  <li key={item.name}>
                    <a href={item.href} className={styles.link}>
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
            <nav className={styles.group} aria-labelledby="footer-social">
              <h2 id="footer-social" className={styles.groupTitle}>
                Acompanhe
              </h2>
              <ul className={styles.list}>
                {acompanhe.map((item) => (
                  <li key={item.name}>
                    <a
                      href={item.href}
                      className={styles.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img src={item.icon} alt="" className={styles.socialIcon} />
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
          <div className={styles.bottom}>
            <p>
              © {new Date().getFullYear()} Doce Encanto. Todos os direitos
              reservados.
            </p>
            <p>Feito com amor, sempre.</p>
          </div>
      </div>
    </footer>
  );
}
