import {
    AcademicCapIcon,
    HandRaisedIcon,
    RocketLaunchIcon,
    SparklesIcon,
    SunIcon,
    UserGroupIcon,
} from '@heroicons/react/24/solid'
import OurMisson from '../components/about/OurMission'
import { ROUTES } from '../constants/routes'
import { Helmet } from "react-helmet";


const values = [
    {
        name: 'Accessible Solutions',
        description: 'Custom software and digital services designed for your business, with easy access and user-friendly interfaces.',
        icon: RocketLaunchIcon,
    },
    {
        name: 'Efficient Project Management',
        description: 'Streamlined processes from concept to completion, ensuring timely delivery and quality outcomes.',
        icon: HandRaisedIcon,
    },
    {
        name: 'Scalable Technology',
        description: 'Future-proof solutions designed to grow with your business, built on robust and scalable technology.',
        icon: UserGroupIcon,
    },
    {
        name: 'Always learning',
        description: 'We are always learning and adapting to new technologies and trends to provide the best solutions for our clients.',
        icon: AcademicCapIcon,
    },
    {
        name: 'Cost and Time Efficiency',
        description: 'Save time and reduce costs with streamlined processes and optimized digital solutions tailored to your business needs.',
        icon: SparklesIcon,
    },
    {
        name: 'Client-Centered Approach',
        description: 'We put our clients first, ensuring that their needs are met and their expectations are exceeded.',
        icon: SunIcon,
    }
]
const team = [
    {
        name: 'Sofware Engineers',

    },
    {
        name: 'Project Managers',
    },
    {
        name: 'Test & QA Engineers',
    },
    {
        name: 'Product Managers'
    }
]


const metaTitle = "NemcaTech: About Us";
const metaDescription = "Discover NemcaTech, a Northern Cyprus-based firm providing custom software, digital marketing, project management, and AI content creation tailored to your business.";
const metaKeywords = "about NemcaTech, custom software development, Northern Cyprus tech company, business technology solutions, project management, AI based solutions";
const headerTitle = "About Us";


export default function AboutUs() {

    return (
        <div className="bg-gray-900">
            
            <Helmet> 
            <meta name="title" content={metaTitle} />
            <meta name="description" content={metaDescription} />
            <meta name="keywords" content={metaKeywords} />
            <title>{headerTitle}</title>
            </Helmet>

            <main className="relative isolate">
                {/* Background */}
                <div
                    aria-hidden="true"
                    className="absolute inset-x-0 top-4 -z-10 flex transform-gpu justify-center overflow-hidden blur-3xl"
                >
                    <div
                        style={{
                            clipPath:
                                'polygon(73.6% 51.7%, 91.7% 11.8%, 100% 46.4%, 97.4% 82.2%, 92.5% 84.9%, 75.7% 64%, 55.3% 47.5%, 46.5% 49.4%, 45% 62.9%, 50.3% 87.2%, 21.3% 64.1%, 0.1% 100%, 5.4% 51.1%, 21.4% 63.9%, 58.9% 0.2%, 73.6% 51.7%)',
                        }}
                        className="aspect-[1108/632] w-[69.25rem] flex-none bg-gradient-to-r from-[#80caff] to-[#4f46e5] opacity-25"
                    />
                </div>

                {/* Header section */}
                <div className="px-6 pt-14 lg:px-8">
                    <div className="mx-auto max-w-2xl pt-24 text-center sm:pt-40">
                        <h1 className="text-5xl font-semibold tracking-tight text-white sm:text-7xl">About Nemca Tech </h1>
                        <p className="mt-8 text-pretty text-lg font-medium text-gray-400 sm:text-xl/8">
                            Nemca Tech delivers custom digital solutions in software development, project management, and digital transformation.
                        </p>
                    </div>
                </div>



                {/* Image section */}
                <div className="mt-32 sm:mt-40 xl:mx-auto xl:max-w-7xl xl:px-8">
                    <img
                        alt=""
                        src="https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2894&q=80"
                        className="aspect-[9/4] w-full object-cover xl:rounded-3xl"
                    />
                </div>

                <OurMisson />

                {/* Values section */}
                <div className="mx-auto mt-32 max-w-7xl px-6 sm:mt-40 lg:px-8">
                    <div className="mx-auto max-w-2xl lg:mx-0">
                        <h2 className="text-pretty text-4xl font-semibold tracking-tight text-white sm:text-5xl">Key Benefits of Nemca Tech            </h2>
                        <p className="mt-6 text-lg/8 text-gray-300">
                            We’re a dynamic group of individuals who are passionate about what we do and dedicated to delivering the
                            best results for our clients.
                        </p>
                    </div>
                    <dl className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 text-base/7 text-gray-300 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-x-16">
                        {values.map((value) => (
                            <div key={value.name} className="relative pl-9">
                                <dt className="inline font-semibold text-white">
                                    <value.icon aria-hidden="true" className="absolute left-1 top-1 size-5 text-indigo-500" />
                                    {value.name}
                                </dt>{' '}
                                <p>{value.description}</p>
                            </div>
                        ))}
                    </dl>
                </div>

                {/* Team section */}
                <div className="mx-auto mt-32 max-w-7xl px-6 sm:mt-40 lg:px-8">
                    <div className="mx-auto max-w-2xl lg:mx-0">
                        <h2 className="text-pretty text-4xl font-semibold tracking-tight text-white sm:text-5xl">Who we are?
                        </h2>
                        <p className="mt-6 text-lg/8 text-gray-300">
                            Delivering secure, scalable digital solutions and meeting clients' unique needs with innovation and excellence, we are a skilled tech startup.


                        </p>
                    </div>
                    <ul
                        role="list"
                        className="mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-14 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3 xl:grid-cols-4"
                    >
                        {team.map((person) => (
                            <li key={person.name}>
                                <p className='text-white font-medium'>{person.name}</p>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* CTA section */}
                <div className="relative isolate -z-10 mt-32 sm:mt-40">
                    <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                        <div className="mx-auto flex max-w-2xl flex-col gap-16 bg-white/5 px-6 py-16 ring-1 ring-white/10 sm:rounded-3xl sm:p-8 lg:mx-0 lg:max-w-none lg:flex-row lg:items-center lg:py-20 xl:gap-x-20 xl:px-20">
                            <img
                                alt=""
                                src="https://images.unsplash.com/photo-1519338381761-c7523edc1f46?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
                                className="h-96 w-full flex-none rounded-2xl object-cover shadow-xl lg:aspect-square lg:h-auto lg:max-w-sm"
                            />
                            <div className="w-full flex-auto">
                                <h2 className="text-pretty text-4xl font-semibold tracking-tight text-white sm:text-5xl">
                                    Start your journey with us today!
                                </h2>
                                <p className="mt-6 text-pretty text-lg/8 text-gray-300">
                                    We’re here to help you design a product that truly makes you happy.

                                    Let’s build your digital vision together.
                                </p>
                               
                                <div className="mt-8 flex items-center justify-center gap-x-6">
                                    <a
                                        href={ROUTES.CONTACT}
                                        className="rounded-md bg-indigo-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-400"
                                    >
                                        Let's Contact
                                    </a>

                                </div>
                            </div>
                        </div>
                    </div>
                    <div
                        aria-hidden="true"
                        className="absolute inset-x-0 -top-16 -z-10 flex transform-gpu justify-center overflow-hidden blur-3xl"
                    >
                        <div
                            style={{
                                clipPath:
                                    'polygon(73.6% 51.7%, 91.7% 11.8%, 100% 46.4%, 97.4% 82.2%, 92.5% 84.9%, 75.7% 64%, 55.3% 47.5%, 46.5% 49.4%, 45% 62.9%, 50.3% 87.2%, 21.3% 64.1%, 0.1% 100%, 5.4% 51.1%, 21.4% 63.9%, 58.9% 0.2%, 73.6% 51.7%)',
                            }}
                            className="aspect-[1318/752] w-[82.375rem] flex-none bg-gradient-to-r from-[#80caff] to-[#4f46e5] opacity-25"
                        />
                    </div>
                </div>

            </main>


        </div>
    )
}
