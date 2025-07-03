import React from 'react';
import styles from '../ProductCard/productcard.module.css';

const ProductCard = ({ image, name, price }) => {
  // Formata o preço para o padrão brasileiro (ex: 20,00)
  const formattedPrice = `R$ ${price.toFixed(2).replace('.', ',')}`;

  return (
    <div className={styles.card}>
      <img src={image} alt={`Foto da planta ${name}`} className={styles.cardImage} />
      <div className={styles.cardContent}>
        <h3>{name}</h3>
        <p>{formattedPrice}</p>
        <a href="##">Comprar →</a>
      </div>
    </div>
  );
};

export default ProductCard;