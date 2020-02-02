import React, { Fragment } from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from '../components/Sushi'

const SushiContainer = (props) => {

const everySushi = () => {
  return props.allSushis.slice(props.sushiCounter, props.sushiCounter+4).map((sushi, index) => {
    return <Sushi eatSushi={props.eatSushi} sushi={sushi} key={index} blankPlate={this.blankPlate} />
  })
}



  return (
    <Fragment>
      <div className="belt">
      {everySushi()}
        <MoreButton moreSushi={props.moreSushi}/>
      </div>
    </Fragment>
  )
}

export default SushiContainer