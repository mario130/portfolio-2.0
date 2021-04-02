import {projects} from '../../../projects';

export default function handler({query: {tag}}, res) {

  const selectedProjects = projects.filter(project => project.stack.includes(tag))
  if(selectedProjects.length > 0){
    res.status(200).json({filteredProjects: selectedProjects})
  } else {
    res.json({message: "Not found"})
  }
}