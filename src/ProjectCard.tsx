import React from 'react'

function ProjectCard(props: any) {
  const { card_data } = props
  const {
    card_img,
    card_text,
    card_title,
  } = card_data
  return (
    <a className="col card" href="#">
        <img className="cardimg" src={card_img} />
        <div className="cardtitle">{card_title}</div>
        <div className="cardtext">{card_text}</div>
    </a>
  )
}

export default ProjectCard
