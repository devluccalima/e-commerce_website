import logo from '../../assets/img/logo.svg';
import styles from'./Menu.module.css';
import { Link } from 'react-router-dom';

export default function Menu(){
    return (
        <header className={styles.header}>
        <h1 className={styles.logo}><img src={logo} alt="Logo CasaVerde" /></h1>
        <nav className={styles.menu}>
            <ul>
                <li><Link to='/'>Página Inicial</Link></li>
                <li><span class="nav-separator">/</span></li>
                <li><a href="#howto">Como fazer</a></li>
                <li><span class="nav-separator">/</span></li>
                <li><a href="#offers">Ofertas</a></li>
                <li><span class="nav-separator">/</span></li>
                <li><a href="#footer">Sobre nós</a></li>
                <li><span class="nav-separator">/</span></li>
                <li><Link to='/MeuCarrinho'>Meu carrinho</Link></li>
            </ul>
        </nav>
        </header>
    )
}