import Link from 'next/link';
import Tag from './tag';

const Project = ({project, i}) => (
  <div className="flex mb-1">
    <span className="text-2xl mt-px">{i}</span>
    <div className="ml-3">
      <div className="text-2xl font-semibold lg:flex lg:justify-between lg:items-center">
        <Link href={`/projects/${project.id}`}><a className="mb-2">{project.title}</a></Link>
        <div className="flex flex-wrap mb-1 mt-2 lg:mt-0">
          {project.stack.map((skill, i) => (
            <Tag i={i} skill={skill} />
          ))}
        </div>
      </div>
      <p>{project.description}</p>
      <div className="flex justify-between mt-2">
        <ul className="flex space-x-3">
          {project.website ? <li><a className="underline" href={project.website}>Website</a></li> : null}
          {project.repo ? <li><a className="underline" href={project.repo}>Code</a></li> : null}
        </ul>
        <div className="flex items-center group">

        <Link href={`/projects/${project.id}`}><a className="section-header inline-flex group transition-all">
        Quick view
        <svg className="w-4 ml-2 transform group-hover:translate-x-1 transition-all" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 5l7 7-7 7M5 5l7 7-7 7" />
        </svg>
        </a></Link>
        </div>
      </div>
    </div>
  </div>
);

export default Project;
