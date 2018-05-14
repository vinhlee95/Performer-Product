import React from 'react';
import ProductCard from '../UI/ProductCard/ProductCard';
import classes from './Product.css';
import ProductImage from '../../images/product-image.jpg';

const Product = (props) => {
   return(
      <ProductCard>
         <div className={classes.imageContainer} >
            <img src={ProductImage} alt="product-img" className={classes.productImage} />
            <span className={classes.price} >Price</span>
         </div>
         Here is product information
      </ProductCard>
   );
}

export default Product;