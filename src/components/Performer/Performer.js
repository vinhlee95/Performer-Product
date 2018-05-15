import React, { Component } from 'react';
import classes from './Performer.css';
import NameCard from '../UI/NameCard/NameCard';
import Product from '../Product/Product';

class Performer extends Component {

   render() {
      console.log(this.props.data);
      const { data, products } = this.props.data;    
      let renderProducts = products.map(({ description, audienceSize, duration, id, price, productImage }) => {
         return (
            <Product 
               key={id}
               description={description}
               audienceSize={audienceSize}
               duration={duration}
               price={price}
               productImage={productImage}
               profileThumb={data.profileThumb}
               name={data.name} />
         );
      });  
      return(
         <div className={classes.performerContainer} >
            <NameCard>
               <img src={data.profileThumb} alt="performer-profile-icon" className={classes.profileIcon} />
               <span>{data.name}</span>
            </NameCard>
            <div className={classes.productList}>
               {renderProducts}
            </div>
         </div>
      );
   }
}

export default Performer;