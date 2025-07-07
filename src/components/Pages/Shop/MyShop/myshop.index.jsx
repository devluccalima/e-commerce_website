import React from "react";
import styles from './myshop.module.css';
import { FaTools } from 'react-icons/fa';

export default function Myshop() {
    return (
        <div className={styles.maintenanceContainer}>
            <FaTools className={styles.icon} />
            <h1 className={styles.title}>
                Página em Construção
            </h1>
            <p className={styles.message}>
                Nossa loja está ganhando um novo espaço! Estamos trabalhando duro para trazer uma experiência incrível para você. Volte em breve para conferir as novidades.
            </p>
            <a href="/" className={styles.backLink}>
                Voltar para a Página Inicial
            </a>
        </div>
    )
}