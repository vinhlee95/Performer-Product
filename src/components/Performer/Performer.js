import React, { Component } from 'react';
import classes from './Performer.css';
import NameCard from '../UI/NameCard/NameCard';
import ProfileIcon from '../../images/profile-icon.svg';
import Product from '../Product/Product';

class Performer extends Component {
   render() {
      return(
         <div className={classes.performerContainer} >
            <NameCard>
               <img src={ProfileIcon} alt="performer-profile-icon" className={classes.profileIcon} />
               <span>Hassunhauska</span>
            </NameCard>
            <div className={classes.productList}>
               <Product />
               <Product />
            </div>
         </div>
      );
   }
}

export default Performer;