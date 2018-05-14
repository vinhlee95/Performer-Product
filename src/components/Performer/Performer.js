import React, { Component } from 'react';
import classes from './Performer.css';
import Card from '../UI/Card/Card';

class Performer extends Component {
   render() {
      return(
         <div className={classes.performerContainer} >
            <Card>
               Hassunhauska
            </Card>
         </div>
      );
   }
}

export default Performer;