import styles from './footer.module.css';
import { FaInstagram, FaFacebook, FaTwitter } from 'react-icons/fa';
import React from 'react';

export default function Footer() {
    return (
        <footer id='footer' className={styles.footer}>
      <div className={styles.footerContainer}>
        <div className={styles.footerSection}>
          <h3 className={styles.footerTitle}>Institucional</h3>
          <ul className={styles.footerLinks}>
            <li><a href="/sobre">Sobre Nós</a></li>
            <li><a href="/politicas">Políticas de Privacidade</a></li>
            <li><a href="/termos">Termos de Uso</a></li>
          </ul>
        </div>

        <div className={styles.footerSection}>
          <h3 className={styles.footerTitle}>Ajuda</h3>
          <ul className={styles.footerLinks}>
            <li><a href="/faq">FAQ</a></li>
            <li><a href="/contato">Contato</a></li>
            <li><a href="/entregas">Entregas e Frete</a></li>
          </ul>
        </div>

        <div className={styles.footerSection}>
          <h3 className={styles.footerTitle}>Redes Sociais</h3>
          <div className={styles.socialIcons}>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram"><FaInstagram /></a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook"><FaFacebook /></a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter"><FaTwitter /></a>
          </div>
        </div>
      </div>
      <div className={styles.footerCopyright}>
        <p>&copy; {new Date().getFullYear()} Seu E-commerce de Plantas. Todos os direitos reservados.</p>
      </div>
    </footer>
    )
}