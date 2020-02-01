import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

// Endpoint!
const API = "http://localhost:3000/sushis"


class App extends Component {
  constructor() {
    super() 
    this.state = {
      sushi: [],
      counter: 0,
      emptyPlates: []
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
  console.log("i wanna add a plate")
  let newSushiArray = [...this.state.sushi]
  newSushiArray.map(sushi => {
    if (clickedSushi.id === sushi.id) {
    return  clickedSushi.isEaten = true;
    }

  })
  let plates= this.state.emptyPlates
  plates.push(1)
  this.setState({
    sushi: newSushiArray,
    emptyPlates: plates
  })

}

moreSushi=(getMoreSushi) => {
  console.log("More Sushi Click Fired")
  this.setState(previousState => {
    return {
      counter: previousState.counter +4
    }
  })
}



  render() {
    return (
      <div className="app">
        {console.log(this.state)}
        <SushiContainer eatSushi={this.eatSushi} allSushis={this.state.sushi} moreSushi={this.moreSushi} sushiCounter={this.state.counter} blankPlate={this.blankPlate}/>
        <Table emptyPlates={this.state.emptyPlates}/>
      </div>
    );
  }
}

export default App;