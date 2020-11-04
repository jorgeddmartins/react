import React, { useContext } from 'react';
import ProductItem from './ProductItem';
import { ProductsContext } from '../../contexts/ProductsContext';
import styles from './ProductsGrid.module.scss';

const ProductsGrid = () => {

    const { products} = useContext(ProductsContext)

    return ( 
        <div className={styles.p__container}>
            
            <div className={styles.p__grid}>

                {
                    products.map(product => (
                        <ProductItem key={product.id} product={product}/>
                    ))
                }

            </div>
            <div className={styles.p__footer}>

            </div>
        </div>
     );
}
 
export default ProductsGrid;