import Link from 'next/link';

const Project = ({project, i}) => (
  <div className="flex">
    <span className="text-2xl mt-1">{i}</span>
    <div className="ml-3">
      <div className="text-2xl font-semibold items-center flex content-between">
        {project.title}
        {project.stack.map(skill => (
          <span className="stack-tag">{skill}</span>
        ))}
        </div>
      <p>{project.description}</p>
      <div className="flex justify-between">
        <ul className="flex space-x-3">
          <li><a className="hover:text-primary underline" href={project.website}>Website</a></li>
          <li><a className="hover:text-primary underline" href={project.repo}>Code</a></li>
        </ul>
        <div className="flex items-center group">
        <Link href={`/projects/${project.id}`}>
          <a className="group-hover:text-primary transition-all">
            Quick view 
          </a>
        </Link>
        <svg className="w-4 ml-2 group-hover:text-primary transform group-hover:translate-x-1 transition-all" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 5l7 7-7 7M5 5l7 7-7 7" />
        </svg>
        </div>
      </div>
    </div>
  </div>
);

export default Project;
