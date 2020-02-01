import React, { Fragment } from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from '../components/Sushi'

const SushiContainer = (props) => {

const eachSushi = () => {
  return props.allSushis.slice(0,4).map((sushi, index) => {
    return <Sushi eatSushi={props.eatSushi} sushi={sushi} key={index}/>
  })
}

  return (
    <Fragment>
      <div className="belt">
      {eachSushi()}
        <MoreButton />
      </div>
    </Fragment>
  )
}

export default SushiContainer