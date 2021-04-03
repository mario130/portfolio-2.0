import Link from "next/link";
import Head from "../components/head";
import Nav from "../components/nav";

export default () => (
  <>
    <p className="section-header mb-4">Introduction</p>

    <main className="text-2xl leading-normal">
      <p>
        <b>My name is Mario Yonan, and I make websites. </b>
        Being a self-taught developer, I've learned many skills that I use on daily basisand.
        I also have a lot of 
        <Link href="/projects"><a className="bg-primary bg-opacity-20 px-1 mx-2 rounded">personal projects</a></Link>
        to demonstrate that knowledge.

        Working hard is  very much a part of my personal identity, and I like exploring new technologies and practicing on them with projects in my free time
        
        </p>
        <p>
        — Currently studying Fullstack path at
        <Link href="http://iti.gov.eg/"><a className="bg-primary bg-opacity-20 px-1 mx-2 rounded">ITI</a></Link>
        in a 3 months internship in which I'm studying MEAN/MERN technologies
      </p>
    </main>
  </>
);
