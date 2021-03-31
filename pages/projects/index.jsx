import Link from "next/link";
import Project from '../../components/project';

export default () => {
  const projects = [
    {
      title: "project 1",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores debitis delectus voluptatibus quasi cupiditate tenetur.",
    },
    {
      title: "project 2",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores debitis delectus voluptatibus quasi cupiditate tenetur.",
    },
    {
      title: "project 3",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores debitis delectus voluptatibus quasi cupiditate tenetur.",
    },
    {
      title: "project 4",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores debitis delectus voluptatibus quasi cupiditate tenetur.",
    },
  ]
  
  return (
    <>
    <header className="">
      <p className="section-header">Projects</p>
      <p className="capitalize text-4xl font-bold -mt-4">My latest projects</p>
    </header>

    <main className="grid md:grid-cols-2 mt-10 gap-8">
      {projects.map((project, i) => (
        <Project project={project} i={i+1} key={i} />
      ))}
    </main>
  </>
  )
};
