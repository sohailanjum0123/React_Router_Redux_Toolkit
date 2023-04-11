import React, { Fragment } from 'react'
import {Link} from 'react-router-dom'

const About = () => {
  return (
    <Fragment>
    <div>Clients Review</div>
    <li><Link to='/client/bruice'>Bruice Page</Link></li>
    <li><Link to='/client/peter'>PeterPage</Link></li>
    </Fragment>
  )
}

export default About