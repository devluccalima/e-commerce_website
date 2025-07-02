import styles from './offers.module.css'


export default function Offers(){
    return(
        <section>
            <div className={styles.grid}>
                <div className={styles.card01}>
                    <img src="..." alt="" />
                    <h3>Ajuga reptans</h3>
                    <p>R$ 20,00</p>
                    <a href="#">Comprar</a>
                </div>
            </div>
        </section>
    )
}

