import Link from 'next/link';


const Nav = (props) => {
  
  
  return (
    <div className="border-t-8 border-primary mb-14 text-text dark:text-gray-200">
    <nav className="container m-auto flex justify-between mt-6 px-6">
      <div className="logo text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-br from-primary to-orange-200">Mario.</div>
      <ul className="links flex md:space-x-4 items-center">
        <li>
          <Link href="/">
            {/* <a className="border-b-2 border-primary p-2">Home</a> */}
            <a className="border-b-2 border-none p-2">Home</a>
          </Link>
        </li>
        <li>
          <Link href="/projects">
            <a className="border-b-2 border-none p-2">Projects</a>
          </Link>
        </li>
        <li>
          <Link href="/about">
            <a className="border-b-2 border-none p-2">About</a>
          </Link>
        </li>
        <li className="ml-2 md:ml-0">
          <span className="border-b-2 border-none cursor-pointer" onClick={()=>props.switchDarkMode()}>
            {props.isDarkMode 
            ? <svg className="w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg> 
            : <svg className="w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
              </svg>}
          </span>
        </li>
      </ul>
    </nav>
  </div>
  )
};

export default Nav;
