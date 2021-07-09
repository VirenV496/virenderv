import React from 'react'

import "../../assets/scss/style.scss";
const Skillcard = ({skillName, skillUrl}) => {
    return (
        <div className = "skill">
            <img  src = {skillUrl}/>
            {/* <p>{skillName}</p> */}
            
        </div>
    )
}

export default Skillcard
