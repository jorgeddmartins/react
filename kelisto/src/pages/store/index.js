import React from 'react';
import Layout from '../../components/Layout';

import ProductsGrid from './ProductsGrid';

const Store = () => {
    
    return ( 
        <Layout title="Product List" description="This is the Product List" >
            <div >
                <div className="text-center mt-5">
                    <h1>Product List</h1>
                </div>
                <ProductsGrid/>
            </div>
        </Layout>
    );
}
 
export default Store;