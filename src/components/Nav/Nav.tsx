import style from "./Nav.module.css";
import logo from '../../assets/cake-icon.svg'
import cartShopping from '../../assets/cart-shopping-icon.svg'

export function Nav() {
  return (
      <header className={style.mainHeader}>

        <div className={style.logo}>
          <img className={style.imgLogo} src={logo} alt="Logo do site" />
          <span className={style.logoText}>
              <strong className={style.titleLogo}>Doce Encanto</strong>
              <span className={style.secondTitleLogo}>Confeitaria Artesanal</span>
          </span>
        </div>

        {/*<div className="mobile"></div>*/}

        <nav className={style.navbar}>
          <ul className={style.navList}>
            <li><a href="#">Inicio</a></li>
            <li><a href="#">Bolos</a></li>
            <li><a href="#">Sobre</a></li>
            <li><a href="#">Contato</a></li>
          </ul>
        </nav>

        <span className={style.spanCartShopping}>
            <img className={style.imgcartShopping} src={cartShopping} alt="" />
        </span>

      </header>
  );
}
