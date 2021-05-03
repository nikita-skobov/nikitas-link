import React from 'react'

function ProjectCard(props: any) {
    const { card_data } = props
  return (
    <div className="col">
        <img className="card" src={card_data} />
    </div>
  )
}

export default ProjectCard
