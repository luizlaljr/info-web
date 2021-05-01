import React from 'react'

import './project.css'

function Project({ user }) {
  function handleProject(project) {
    let img
    switch (project) {
      case 'C-99':
        img = 'https://i.ibb.co/hCtdY3j/C-99.jpg'

        break
      case 'C-97':
        img = 'https://i.ibb.co/1QKSqdm/C-97.jpg'
        break
      default:
        img = 'https://i.ibb.co/PxBJZ6p/Both.jpg'
        break
    }
    return img
  }
  return (
    <div className="project">
      <img src={handleProject(user?.project)} alt="" />
    </div>
  )
}

export default Project
