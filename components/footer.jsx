import Link from 'next/link';

const Footer = () => (
  <div className="bg-muted-bg py-16 text-text  dark:bg-dark-bgSecondary dark:text-gray-200">
    <footer className="px-6 container mx-auto grid grid-cols-2 md:grid-cols-5">
      <ul className="leading-8">
        <li className="section-header">site</li>
        <li>Home</li>
        <li>Projects</li>
        <li>Blog</li>
      </ul>

      <ul className="leading-8">
        <li className="section-header">Links</li>
        <li>Github</li>
        <li>LinkedIn</li>
        <li>Resume</li>
      </ul>

      <div className="hidden md:block col-span-3">
        <p className="section-header">My latest project</p>
        <p className="text-2xl font-bold">Portfolio website</p>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reiciendis distinctio, quod ipsam harum mollitia placeat libero sint amet aspernatur et in, cum maiores numquam tenetur soluta illum sit dolorum. Id.</p>
      </div>
    </footer>
  </div>
)

export default Footer