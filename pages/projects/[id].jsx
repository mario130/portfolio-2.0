import Link from 'next/link';
import {server} from '../../config/index';

export async function getStaticPaths(context) {
  let res = await fetch(`${server}/projects`)
  res = await res.json()
  
  console.log('RESS: ', res);
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
      <h3>Project id: {res.project.id}</h3>
      <h3>Project name: {res.project.title}</h3>
    </>
  )
}