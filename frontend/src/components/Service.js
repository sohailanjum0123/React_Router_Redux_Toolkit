import React from 'react'
import { Link} from 'react-router-dom';
const Service = () =>{
    return(
        <div>
        <Link to='/tech/website'>Webites</Link>
        <Link to='/tech/mobileapplication'>MobileApplication</Link>
        </div>
    )
}
export default Service;