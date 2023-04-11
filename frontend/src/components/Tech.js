import React, { Fragment } from 'react'
import { useParams } from 'react-router-dom'

const Tech = () => {
    const params = useParams();
    const {name} = params;
  return (
    <Fragment>
    <div>Technology</div>
    <h1>This is {name} page</h1>
    </Fragment>
  )
}

export default Tech