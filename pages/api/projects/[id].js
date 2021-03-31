import {projects} from '../../../projects';

export default function handler({query: {id}}, res) {

  const selectedProject = projects.filter(user => user.id == id)
  if(selectedProject.length > 0){
    res.status(200).json({project: selectedProject[0]})
  } else {
    res.json({message: "Not found"})
  }
}