import React from 'react';
import ProductCard from '../UI/ProductCard/ProductCard';
import classes from './Product.css';
import ProductImage from '../../images/product-image.jpg';
import ProfileIcon from '../../images/profile-icon.svg';

const Product = (props) => {
   return(
      <ProductCard>
         <div className={classes.imageContainer} >
            <img src={ProductImage} alt="product-img" className={classes.productImage} />
            <div className={classes.priceRow}>
               <span className={classes.price} >Price</span>
               <div>
                  <img src={ProfileIcon} alt="profile-icon" className={classes.profileIcon} />
                  <span>Hassunhauska</span>
               </div>
            </div>
         </div>
         Here is product information
      </ProductCard>
   );
}

export default Product;