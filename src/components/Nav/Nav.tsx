import { useEffect, useState } from "react";
import styles from "./nav.module.css";
import logo from '../../assets/icons/cake-icon.svg'
import cartShopping from '../../assets/icons/cart-shopping-icon.svg'

const links = [
  { name: "Início", href: "#inicio" },
  { name: "Bolos", href: "#bolos" },
  { name: "Sobre", href: "#sobre" },
  { name: "Contato", href: "#contato" },
];

export function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (!menuOpen) return;

    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") setMenuOpen(false);
    }

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [menuOpen]);

  return (
      <header className={styles.mainHeader}>
<div className={styles.content}>
  
          <div className={styles.logo}>
            <img className={styles.imgLogo} src={logo} alt="Logo do site" />
            <span className={styles.logoText}>
                <strong className={styles.titleLogo}>Doce Encanto</strong>
                <span className={styles.secondTitleLogo}>Confeitaria Artesanal</span>
            </span>
          </div>
  
          <nav
            id="menu-principal"
            className={`${styles.navbar} ${menuOpen ? styles.open : ""}`}
          >
            <ul className={styles.navList}>
              {links.map((link) => (
                <li key={link.href}>
                  <a href={link.href} onClick={() => setMenuOpen(false)}>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
  
          <div className={styles.actions}>
            <span className={styles.spanCartShopping}>
                <img className={styles.imgcartShopping} src={cartShopping} alt="Carrinho de compras" />
            </span>
  
            <button
              type="button"
              className={`${styles.menuButton} ${menuOpen ? styles.menuButtonOpen : ""}`}
              aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
              aria-expanded={menuOpen}
              aria-controls="menu-principal"
              onClick={() => setMenuOpen((open) => !open)}
            >
              <span className={styles.bar}></span>
              <span className={styles.bar}></span>
              <span className={styles.bar}></span>
            </button>
          </div>
</div>

      </header>
  );
}
