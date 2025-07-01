import logo from '../../assets/img/logo.svg';
import styles from'./Menu.module.css';

export default function Menu(){
    return (
        <header className={styles.header}>
        <h1 className={styles.logo}><img src={logo} alt="Logo CasaVerde" /></h1>
        <nav className={styles.menu}>
            <ul>
                <li><a href="#HowTo">Como fazer</a></li>
                <li><span class="nav-separator">/</span></li>
                <li><a href="#Offers">Ofertas</a></li>
                <li><span class="nav-separator">/</span></li>
                <li><a href="#Depoiments">Depoimentos</a></li>
                <li><span class="nav-separator">/</span></li>
                <li><a href="#Videos">Videos</a></li>
                <li><span class="nav-separator">/</span></li>
                <li><a href="MyShop">Meu carrinho</a></li>
            </ul>
        </nav>
        </header>
    )
}