import Footer from "./footer";
import Nav from "./nav";
import { useState } from 'react';

export default function Layout({ children }) {
  const [isDarkMode, setDarkMode] = useState(false);
  
  return (
    <div className={`${isDarkMode ? 'dark' : ''}`}>
      <div className="dark-wrapper dark:bg-dark-bgPrimary text-white">
        <Nav isDarkMode={isDarkMode} setDarkMode={setDarkMode} />
        <div className="container mx-auto px-6 text-text dark:text-gray-200 my-16">
          {children}
        </div>
        <Footer />
      </div>
    </div>
  );
}

//  