import Image from "next/image";
import styles from "./page.module.css";
import Header from "@/app/header/Header";
import AboutMe from "@/app/about-me/AboutMe ";
import WorkExperience from "@/app/work-experience/WorkExperience";
import Education from "@/app/education/Education";
import Skills from "@/app/skills/Skills";

export default function Home() {
  return (
    <div>
      <div className="container">
        <section className="main-content">
          <Header />
          <div className="info-content">
            <AboutMe />
            <WorkExperience />
            <Education />
            <Skills />
          </div>
        </section>
      </div>
    </div>
  );
}
