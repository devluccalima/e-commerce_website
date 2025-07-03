import styles from './offers.module.css';
import ProductCard from './ProductCard/productcard.index'
import produto01 from '../../assets/img/produtos/produto01.png'
import produto02 from '../../assets/img/produtos/produto02.png'
import produto03 from '../../assets/img/produtos/produto03.png'
import produto04 from '../../assets/img/produtos/produto04.png'
import produto05 from '../../assets/img/produtos/produto05.png'
import produto06 from '../../assets/img/produtos/produto06.png'

// Você pode ter uma lista de produtos vinda de uma API ou de um arquivo de dados
const products = [
  { id: 1, name: 'Ajuga reptans', price: 20.00, image: produto01 },
  { id: 2, name: 'Cordyline fruticosa', price: 25.50, image: produto02 },
  { id: 3, name: 'Crassula ovata', price: 18.00, image: produto03 },
  { id: 4, name: 'Cyperus rotundus', price: 20.00, image: produto04 },
  { id: 5, name: 'Delairea odorata', price: 20.00, image: produto05 },
  { id: 6, name: 'Datura metel', price: 20.00, image: produto06 },
  // Adicione mais produtos aqui
];

export default function Offers() {
  return (
    
    <section id='offers'className={styles.ofertas}>
      <h2>Conheça nossas ofertas</h2>
      <div className={styles.grid}>
        {products.map(product => (
          <ProductCard 
            key={product.id}
            name={product.name}
            price={product.price}
            image={product.image}
          />
        ))}
      </div>
    </section>
  );
}
