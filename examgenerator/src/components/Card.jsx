import React from 'react'
import { Link} from 'react-router-dom';
export const Card = (props) => {
    return (
        <div className='card f-center'>
           {/* <h1 style={{"textAlign":"center"}} onClick={''}>
               Education Level
           </h1> */}
           
           {/* <a href={props.link}>{props.title}</a> */}
           <Link to={props.link}>{props.title}</Link>
         
        </div>
    )
}
