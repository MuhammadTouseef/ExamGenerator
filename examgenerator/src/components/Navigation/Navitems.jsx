import React from 'react'
import { Link} from 'react-router-dom';
export const Navitems = (props) => {
    return (
        <div className="navItem">
        {/* <a href={props.link}>{props.title}</a> */}
        <Link to={props.link}>{props.title}</Link>
      </div>
    )
}
