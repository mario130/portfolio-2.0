import Link from 'next/link';
import {server} from '../config/index';

export default (props) => {

  return(

  <div className="bg-muted-bg py-16 text-text  dark:bg-dark-bgSecondary dark:text-gray-200">
    <footer className="px-6 container mx-auto grid grid-cols-2 md:grid-cols-5">
      <ul className="leading-8">
        <li className="section-header mb-4">site</li>
        <li>
          <Link href="/">
            <a>Home</a>
          </Link>
        </li>
        <li>
          <Link href="/projects">
            <a>Projects</a>
          </Link>
        </li>
        <li>
          <Link href="/about">
            <a>About</a>
          </Link>
        </li>
      </ul>

      <ul className="leading-8">
        <li className="section-header mb-4">Links</li>
        <li>
          <Link href="https://github.com/mario130"><a>Github</a></Link>
        </li>
        <li>
          <Link href="https://linkedin.com/in/mario130/"><a>LinkedIn</a></Link>
        </li>
        <li>Resume</li>
      </ul>

      <div className="hidden md:block col-span-3">
        <p className="section-header mb-4">My latest project</p>
        <Link href="/projects/1"><a className="text-2xl font-bold">Portfolio</a></Link>
        <p>My second portfolio website, but this time with a library and Static Site Generation which I'm starting to get the hang of. Built using mobile first approach, had a lot of fun building it with dynamic routes in Next & I'll try to update it as often with new imporvements.</p>
      </div>
    </footer>
  </div>
  )
}