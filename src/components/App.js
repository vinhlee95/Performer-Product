import React, { Component } from 'react';
import Button from './Button/Button';

class App extends Component {
   render() {
      return(
         <div>
            <h2>Performers & Products</h2>
            <Button name="+ Lisää esiintyjä" />
            <Button name="+ Lisää esitys" />
         </div>
      );
   }
}

export default App;