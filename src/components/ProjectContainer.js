import Project from './Project';

export default function ProjectContainer(props) {
    let projects = props.map(project =>{
        return (
            <>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
            </>
        )
    })
}