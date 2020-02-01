import React from 'react'

const MoreButton = (props) => {

    return <button onClick={ () => props.moreSushi(props.sushi)}>
      More Sushi!!
          </button>
}

export default MoreButton