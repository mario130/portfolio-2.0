import Footer from "./footer";
import Nav from "./nav";
import { useEffect, useState } from 'react';

export default function Layout({ children }) {
  const [isDarkMode, setDarkMode] = useState(false);

  useEffect(()=>{
    if (localStorage.getItem('theme') === 'dark') {
      setDarkMode(true)
    } else {
      setDarkMode(false)
    }
  }, [])

  const switchDarkMode = () => {
    if (isDarkMode) {
      setDarkMode(false);
      localStorage.setItem("theme", "light");
    } else {
      setDarkMode(true);
      localStorage.setItem("theme", "dark");
    }
  }
  
  return (
    <div className={`${isDarkMode ? 'dark' : ''}`}>
      <div className="dark-wrapper dark:bg-dark-bgPrimary text-white">
        <Nav isDarkMode={isDarkMode} switchDarkMode={switchDarkMode} />
        <div className="container mx-auto px-6 text-text dark:text-gray-200 my-16">
          {children}
        </div>
        <Footer />
      </div>
    </div>
  );
}

//  