import Link from "next/link";
import { useEffect } from "react";
import Project from '../../components/project';
import { server } from '../../config/index';

export default (props) => {
  
  return (
    <>
    <header className="">
      <p className="section-header mb-4">Projects</p>
      <p className="capitalize text-4xl font-bold -mt-4">My latest projects</p>
    </header>

    <main className="grid md:grid-cols-2 mt-10 gap-8">
      {props.res.projects.map((project, i) => (
        <Project project={project} i={i+1} key={i} />
      ))}
    </main>
  </>
  )
};

export async function getStaticProps(context) {
  let projects = await fetch(`${server}/projects`)
  projects = await projects.json()

  return {
    props: {
      res: projects
    }
  }
}