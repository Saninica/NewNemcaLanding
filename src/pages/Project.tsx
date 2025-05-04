import { Helmet } from "react-helmet";
import ExperienceAndProjects from "../components/projects/ExperienceAndProjects";
import ProjectFeatures from "../components/projects/Feature";
import ProjectsHero from "../components/projects/Hero";
import HowToStart from "../components/projects/HowToStart";
import ProjectSolution from "../components/projects/Solutions";

const metaKeywords = "Projects NemcaTech, tech company Northern Cyprus, custom software solutions, business inquiries, tech support, project consultations, software development, IT services, technology solutions";
const headerTitle = "Projects";
const metaTitle = "Projects - Nemca Tech";
const metaDescription = "Explore our diverse range of projects at Nemca Tech. Discover how we provide custom software solutions and tech support to businesses in Northern Cyprus and beyond.";

export default function ProjectPage() {
    return (
        <>
            <Helmet>
                <meta name="title" content={metaTitle} />
                <meta name="description" content={metaDescription} />
                <meta name="keywords" content={metaKeywords} />
                <title>{headerTitle}</title>
                <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=AW-16917800526"
        />
        {/* Initialize the dataLayer and gtag config */}
        <script>
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-16917800526');
          `}
        </script>
            </Helmet>

            <ProjectsHero />

            <ExperienceAndProjects />

            <ProjectFeatures />

            <HowToStart />

            <ProjectSolution />

           
        </>
    );
}
