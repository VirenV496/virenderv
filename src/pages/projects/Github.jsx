import React from 'react'
import '../scss/style.scss'
import github from '../assets/github image.gif'

const Github = () => {
    return (
        <div className = "project-card">
            <img src={github} 
                alt="project" 
                className="project-image" 
            />
        </div>
    )
}

export default Github
