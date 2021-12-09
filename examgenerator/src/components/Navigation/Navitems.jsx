import React from 'react'

export const Navitems = (props) => {
    return (
        <div className="navItem">
        <a href={props.link}>{props.title}</a>
      </div>
    )
}
