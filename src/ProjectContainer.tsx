import React from 'react'
import ProjectCard from './ProjectCard'
import './ProjectContainer.css'

const project_list = [
    { card_title: "a342 r32432432", card_text: "dsadsa 32 ewfe few", card_img: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fthumb%2F8%2F8a%2FTest_image_landscape_NO_TEXT.svg%2F1280px-Test_image_landscape_NO_TEXT.svg.png&f=1&nofb=1" },
    { card_title: "a342 r32432432", card_text: "dsadsa 32 ewfe few", card_img: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftodaysmama.com%2F.image%2Fc_limit%252Ccs_srgb%252Cfl_progressive%252Cq_auto%3Agood%252Cw_700%2FMTU5OTA5MTcyNTEzNjc4ODgw%2Fimage-placeholder-title.jpg&f=1&nofb=1" },
    { card_title: "a342 r32432432", card_text: "dsadsa 32 ewfe few", card_img: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fthumb%2F8%2F8a%2FTest_image_landscape_NO_TEXT.svg%2F1280px-Test_image_landscape_NO_TEXT.svg.png&f=1&nofb=1" },
    { card_title: "a342 r32432432", card_text: "dsadsa 32 ewfe few", card_img: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fthumb%2F8%2F8a%2FTest_image_landscape_NO_TEXT.svg%2F1280px-Test_image_landscape_NO_TEXT.svg.png&f=1&nofb=1" },
]

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
        <h2>My Projects</h2>
        <br />
        {rows}
    </div>
  )
}

export default ProjectContainer
