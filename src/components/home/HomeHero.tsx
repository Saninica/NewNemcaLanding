import { ROUTES } from "../../constants/routes";

export default function HomeHero() {

    return (

        <div className="mx-auto max-w-2xl text-center">
                      <h1 className="text-balance text-5xl font-semibold tracking-tight text-white sm:text-7xl">
                          Your Vision, Our Innovative Solutions
                      </h1>
                      <p className="mt-8 text-pretty text-lg font-medium text-gray-400 sm:text-xl/8">
                      At Nemca Tech, we turn your ideas into digital solutions. From custom websites and mobile apps to project management, we provide everything you need to succeed. Let’s build your digital roadmap together.
                      </p>
                      <div className="mt-10 flex items-center justify-center gap-x-6">
                        <a
                          href={ROUTES.PROJECTS}
                          className="rounded-md bg-indigo-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-400"
                        >
                          Explore
                        </a>
                        <a href={ROUTES.ABOUTUS} className="text-sm/6 font-semibold text-white">
                          Learn more <span aria-hidden="true">→</span>
                        </a>
                      </div>
                    </div>
                    
    );

}