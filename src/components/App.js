import React, { Component } from 'react';
import Performer from './Performer/Performer';
import request from 'superagent';
import Button from './UI/Button/Button';
import classes from './App.css';

class App extends Component {
   constructor(props) {
      super(props);
      this.state = {};
   }

   componentDidMount() {
      request
         .post('https://nodedev.gigleapp.com/user')
         .send({
            action: 'getPerformersAndProducts',
            userId: 'ZuaqGwjNc6M47HchSJYVa2lunf03'
         })
         .end((err, res) => {
            res ? this.setState({ performers: res.body[0] }) : console.log('Error fetching')
         });
   }

   render() {
      let renderPerformers;
      if(this.state.performers) {
         renderPerformers = <Performer data={this.state.performers} />;
      } else {
         renderPerformers = <div>Loading...</div>;
      }

      return(
         <div className={classes.App} >
            <h2>Performers & Products</h2>
            <div className={classes.buttonRow} >
               <Button name="+ Lisää esiintyjä" />
               <Button name="+ Lisää esitys" />
            </div>
            {renderPerformers}           
         </div>
      );
   }
}

export default App;