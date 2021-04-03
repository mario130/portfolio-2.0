import Link from "next/link";
import Project from '../../components/project';
import { server } from '../../config/index';
import { useRouter } from 'next/router';
import Head from 'next/head';


export async function getStaticPaths(context) {
  let res = await fetch(`${server}/projects`)
  res = await res.json()

  let allTags = []
  res.projects.forEach(proj => {
    proj.stack.forEach(stk => {
      if (allTags.indexOf(stk) < 0) allTags.push(stk)
    })
  })

  const paths = allTags.map(tag => {
    return {
      params: {tag: tag}
    }
  })
  
  return {
    paths,
    fallback: false
  }
}

export async function getStaticProps(context) {
  let projects = await fetch(`${server}/tags/${context.params.tag}`)
  projects = await projects.json()

  return {
    props: {
      res: projects
    }
  }
}


export default ({ res }) => {
  const router = useRouter()
  const { tag } = router.query
  
  return (
    <>
    <Head>
      <title>#{tag} - Mario Yonan</title>
    </Head>
    <header className="">
      <p className="section-header mb-4">Projects</p>
      <p className="capitalize text-4xl font-bold -mt-4">Projects where I used <span className="text-primary">{tag}</span></p>
    </header>

    <div className="mt-8">
    <Link href='/projects'><a className="section-header mb-4 inline-flex group transition">
      <svg className="w-4 mr-2 transform transition group-hover:-translate-x-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 19l-7-7 7-7m8 14l-7-7 7-7" />
      </svg>
        All projects</a></Link>
    </div>

    <main className="grid md:grid-cols-2 mt-4 gap-8">
      {res.filteredProjects.map((project, i) => (
        <Project project={project} i={i+1} key={i} />
      ))}
    </main>
  </>
  )
};
