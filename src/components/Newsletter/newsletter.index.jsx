import styles from './newsletter.module.css';
import NewsletterForm from './newsletterForm.index'

export default function AssinaturaNewsletter() {
    return (
        <header>
        <div className={styles.assinaturaNewsletter}>
            <div className={styles.assinaturaNewsletter__container}>
                <div className={styles.assinaturaNewsletter__container__text}>
                    <h1>
                        Sua casa com as
                        <br />
                        <strong>
                            melhores <br /> plantas
                        </strong>
                    </h1>
                    <p>
                        Encontre aqui uma vasta seleção de plantas para decorar a sua casa e torná-lo uma pessoa mais feliz no seu dia a dia. Entre com seu e-mail e assine nossa newsletter para saber das novidades da marca.
                    </p>


                    <NewsletterForm />
                </div>
            </div>
        </div>
        </header>
    );
}