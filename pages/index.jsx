import Link from "next/link";
import Head from "next/head";
import Nav from "../components/nav";

export default () => (
  <>
    <Head>
      <title>Home - Mario Yonan</title>
    </Head>
    <p className="section-header mb-4">Introduction</p>

    <main className="text-2xl leading-normal">
      <p>
        <b>My name is Mario Yonan, and I make websites. </b>
        Being a self-taught developer, I've learned many skills that I use on
        daily basis. I also have a lot of
        <Link href="/projects">
          <a className="bg-primary bg-opacity-20 px-1 mx-2 rounded">
            personal projects
          </a>
        </Link>
        to demonstrate that knowledge. I like exploring new technologies and
        practicing them with projects in my free time.
      </p>
      <p>
        Studied Fullstack path at
        <Link href="http://iti.gov.eg/">
          <a className="bg-primary bg-opacity-20 px-1 mx-2 rounded">ITI</a>
        </Link>
        in an internship in which I've learnt MEAN/MERN technologies.
      </p>
      <p>
        — Currently working on an Upwork clone project using React
      </p>
    </main>
  </>
);
