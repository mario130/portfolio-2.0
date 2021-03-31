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
      <Link href='/projects'><a>Go back</a></Link>
      <br/>
      <div className="w-full text-center">
      {res.project.imageUrl 
      ? <Image src={res.project.imageUrl} width="1000" height="600" objectFit="contain"></Image>
      : null}
      </div>
      <div className="items-center flex content-between">
        <h3 className="text-2xl">Project: <span className="font-bold">{res.project.title}</span></h3>
        {res.project.stack.map(skill => (
          <span className="stack-tag">{skill}</span>
        ))}
      </div>
      <p>Description: {res.project.description}</p>
    </>
  )
}