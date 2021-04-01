import Link from 'next/link';
import {server} from '../../config/index';
import Image from 'next/image'

export async function getStaticPaths(context) {
  let res = await fetch(`${server}/projects`)
  res = await res.json()
  
  const paths = res.projects.map(project => {
    return {
      params: {id: project.id.toString()}
    }
  })

  return {
    paths,
    fallback: false
  }
}

export async function getStaticProps(context) {
  let projects = await fetch(`${server}/projects/${context.params.id}`)
  projects = await projects.json()

  return {
    props: {
      res: projects
    }
  }
}

export default function Post({res}) {
  return (
    <>
      <Link href='/projects'><a className="inline-flex group transition">
      <svg className="w-4 mr-2 transform transition group-hover:-translate-x-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 19l-7-7 7-7m8 14l-7-7 7-7" />
      </svg>
        Go back</a></Link>
      <br/>
      <div className="w-full text-center">
      {res.project.imageUrl 
      ? <Image src={res.project.imageUrl} width="1000" height="500" objectFit="contain"></Image>
      : null}
      </div>
      <div className="items-center mt-2">
        <div className="stack">
          {res.project.stack.map((skill, i) => (
            <span className="stack-tag stack-no-ml ml-0" key={i}>#{skill}</span>
            ))}
        </div>
        {/* <div className="text-2xl">Project: <span className="font-bold">{res.project.title}</span></div> */}
        <div className=" mt-2 project-info md:grid md:grid-cols-6 lg:grid-cols-12 gap-y-2 xl:gap-x-24">
            <h3 className="proj-title">Project</h3>
            <p className="proj-desc mb-2 md:mb-0">{res.project.title}</p>

            <h3 className="proj-title">Description</h3>
            <p className="proj-desc mb-2 md:mb-0">{res.project.description}</p>

            <h3 className="proj-title">Summary</h3>
            {res.project.summary
            ? <p className="proj-desc">{res.project.summary}</p>
            : null}
        </div>
        <div className="">
          {res.project.repo
          ? <a href={res.project.repo} target="_blank" className="underline">Code</a>
          : null}
          <br/>
          <a href={res.project.website} target="_blank" className="underline">Live version</a>
        </div>
      </div>
    </>
  )
}