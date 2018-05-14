import React, { Component } from 'react';
import classes from './Performer.css';
import Card from '../UI/Card/Card';
import ProfileIcon from '../../images/profile-icon.svg';

class Performer extends Component {
   render() {
      return(
         <div className={classes.performerContainer} >
            <Card>
               <img src={ProfileIcon} alt="performer-profile-icon" className={classes.profileIcon} />
               <span>Hassunhauska</span>
            </Card>
         </div>
      );
   }
}

export default Performer;