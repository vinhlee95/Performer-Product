import React, { Component } from 'react';
import classes from './Performer.css';
import NameCard from '../UI/NameCard/NameCard';
import ProfileIcon from '../../images/profile-icon.svg';

class Performer extends Component {
   render() {
      return(
         <div className={classes.performerContainer} >
            <NameCard>
               <img src={ProfileIcon} alt="performer-profile-icon" className={classes.profileIcon} />
               <span>Hassunhauska</span>
            </NameCard>
         </div>
      );
   }
}

export default Performer;