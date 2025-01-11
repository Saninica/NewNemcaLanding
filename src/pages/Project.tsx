import ExperienceAndProjects from "../components/projects/ExperienceAndProjects";
import ProjectFeatures from "../components/projects/Feature";
import ProjectsHero from "../components/projects/Hero";
import HowToStart from "../components/projects/HowToStart";
import ProjectSolution from "../components/projects/Solutions";

export default function ProjectPage() {
    return (

        <>
            <ProjectsHero />

            <ProjectFeatures />

            <HowToStart />

            <ProjectSolution />

            <ExperienceAndProjects />
        </>

    );
}