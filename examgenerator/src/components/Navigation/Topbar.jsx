import React from 'react'

export const Topbar = () => {
    return (
        <div className="topbar">
            <div className="sbox f-center">
               <input type="text" className="search" placeholder="Search" style={{"display":"none"}} />
            </div>
        <div className="avatar-box">
            <div className="avatar-text">
                Muhammad Touseef <br />
                Student
            </div>
            <div className="avatar-img">
                <img width="60px" src="data:image/png;base64,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" alt="" />
            </div>
        </div>
     </div>
    )
}
