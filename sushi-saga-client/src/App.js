import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

// Endpoint!
const API = "http://localhost:3000/sushis"


class App extends Component {
  constructor() {
    super() 
    this.state = {
      sushi: []
    }
  }



componentDidMount() {
  fetch(API)
  .then(res=>res.json())
  .then(json => this.allSushi(json)
  )
}

allSushi = (sushis) => {
  this.setState({
    sushi: sushis.map((sushi) => ({
      ...sushi, isEaten: false}

      )

    )
  })
  
}


eatSushi= (clickedSushi) => {
  console.log("handleCllck fires")
  let newSushiArray = [...this.state.sushi]
  newSushiArray.map(sushi => {
    if (clickedSushi.id === sushi.id) {
    return  clickedSushi.isEaten = true;
    }

  })

  this.setState({
    sushi: newSushiArray
  })

}

  render() {
    return (
      <div className="app">
        {console.log(this.state)}
        <SushiContainer eatSushi={this.eatSushi} allSushis={this.state.sushi}/>
        <Table />
      </div>
    );
  }
}

export default App;