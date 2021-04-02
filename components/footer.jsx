import Link from 'next/link';
import {server} from '../config/index';

export default (props) => {

  return(

  <div className="bg-muted-bg py-16 text-text  dark:bg-dark-bgSecondary dark:text-gray-200">
    <footer className="px-6 container mx-auto grid grid-cols-2 md:grid-cols-5">
      <ul className="leading-8">
        <li className="section-header mb-4">site</li>
        <li>Home</li>
        <li>Projects</li>
        <li>Blog</li>
      </ul>

      <ul className="leading-8">
        <li className="section-header mb-4">Links</li>
        <li>Github</li>
        <li>LinkedIn</li>
        <li>Resume</li>
      </ul>

      <div className="hidden md:block col-span-3">
        <p className="section-header mb-4">My latest project</p>
        <Link href="/projects/1"><a className="text-2xl font-bold">Portfolio</a></Link>
        <p>My second portfolio website, but this time with a library and Static Site Generation which I'm starting to get the hang of, had a lot of fun building it with dynamic routes in Next & I'll try to update it as often with new imporvements.</p>
      </div>
    </footer>
  </div>
  )
}