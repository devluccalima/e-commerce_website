import styles from './howto.module.css'
import planta from '../../assets/img/planta.png'

export default function HowTo(){
    return(
    <section id='howto'>
        <div className={styles.container}>
            <div className={styles.left}>
                <img src={planta} alt="Planta" />
            </div>
            <div className={styles.right}>
                <strong>
                <h4>Como conseguir</h4>
                <h1>minha planta</h1>
                </strong>
            

                <ul className={styles.steps}>
                    <li><span className={styles.dot}></span>Escolha suas plantas</li>
                    <li><span className={styles.dot}></span>Faça seu pedido</li>
                    <li><span className={styles.dot}></span>Aguarde na sua casa</li>
                </ul>
            </div>
        </div>
    </section>
    )
}