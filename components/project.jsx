import Link from 'next/link';

const Project = ({project, i}) => (
  <div className="flex">
    <span className="text-2xl">{i}</span>
    <div className="ml-3">
      <h2 className="text-2xl font-semibold">{project.title}</h2>
      <p>{project.description}</p>
      <ul className="flex space-x-3">
        <li><a className="hover:text-primary underline" href="#">Website</a></li>
        <li><a className="hover:text-primary underline" href="#">Code</a></li>
      </ul>
    </div>
  </div>
);

export default Project;
