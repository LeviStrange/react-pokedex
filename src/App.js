import React, { Component } from 'react';
import './App.css';

import { CardList } from './components/card-list/card-list.component'  

class App extends Component {
  constructor() {
    super();
    // If online - grabs jsonplaceholder api
    // this.state = {
    //   ninjas: []
    // }

    // If offline application still works
    // as i have made it fail gracefully
    this.state = {
      ninjas:[
        {
          name: 'Shia Affaed',
          id: 1
        },
        {
          name: 'Leroy Jenkins',
          id: 2
        },
        {
          name: 'Kurtis Weissnax',
          id: 3
        },
        {
          name: 'Ninja Mcgee',
          id: 4
        },
      ]
    }
    
   
  }

  componentDidMount() {
    let api = 'https://jsonplaceholder.typicode.com/users'
    fetch(api)
    .then(response => response.json())
    .then(users => this.setState({ninjas: users}) )
  }

  render() {
    return (
      <div className="App">
        <CardList ninjas={this.state.ninjas}/>
      </div>
    );
  }
}

export default App;
