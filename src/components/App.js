import React, { Component } from 'react';
import Button from './UI/Button/Button';
import classes from './App.css';

class App extends Component {
   render() {
      return(
         <div className={classes.App} >
            <h2>Performers & Products</h2>
            <div className={classes.buttonRow} >
               <Button name="+ Lisää esiintyjä" />
               <Button name="+ Lisää esitys" />
            </div>
         </div>
      );
   }
}

export default App;