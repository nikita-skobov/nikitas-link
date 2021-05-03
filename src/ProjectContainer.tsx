import React from 'react'
import ProjectCard from './ProjectCard'
import './ProjectContainer.css'
import project_list from './projects'

function ProjectRow(props: any) {
    return (
        <div className="row cardrow">
            {props.card_list.map((card: any) => (
                <ProjectCard card_data={card} />
            ))}
        </div>
    )
}

function ProjectContainer() {
    const rows = []
    let i = 0
    while (i < project_list.length) {
        const row_data = []
        let proj_left = project_list[i]
        row_data.push(proj_left)
        i += 1
        if (i >= project_list.length) {
            rows.push(<ProjectRow card_list={row_data} />)
            break
        }
        let proj_right = project_list[i]
        row_data.push(proj_right)
        rows.push(<ProjectRow card_list={row_data} />)
        i += 1
    }

    return (
    <div className="project-container">
        <h1>Highlights</h1>
        <br />
        {rows}
    </div>
  )
}

export default ProjectContainer
