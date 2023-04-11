import React from 'react'
import { useParams } from 'react-router-dom'
const Client = () => {
    const params = useParams();
    const {name} = params;
  return (
    <div>
        <h1>This is {name} page</h1>
    </div>
  )
}

export default Client