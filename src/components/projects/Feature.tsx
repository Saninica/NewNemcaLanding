import { ArrowPathIcon, CloudArrowUpIcon, LockClosedIcon, DevicePhoneMobileIcon, AcademicCapIcon, BeakerIcon } from '@heroicons/react/24/solid'

const features = [
    {
        name: 'Website Development',
        description: 'Delivering reliable and scalable software solutions tailored to your needs. Our team ensures secure, high-performance digital products.',
        icon: CloudArrowUpIcon,
    },
    {
        name: 'Custom Development',
        description: 'Seamlessly manage customer relationships with secure and intuitive CRM panel solutions tailored for your business needs.',
        icon: LockClosedIcon,
    },
    {
        name: "Project Management",
        description: 'Ensure smooth project execution with expert management that saves time and delivers exceptional outcomes.',
        icon: ArrowPathIcon,
    },
    {
        name: 'Mobile App Development',
        description: 'Create cutting-edge mobile applications with robust security and high performance, tailored to meet user expectations and business goals.',
        icon: DevicePhoneMobileIcon,
    },
    {
        name: 'Digital Marketing',
        description: 'Enhance your brand visibility with tailored strategies and data-driven roadmaps to reach your audience effectively.',
        icon: BeakerIcon,
    },
    {
        name: 'Digital Consultancy',
        description: 'Get expert advice on digital transformation, software development, and project management to drive your business forward.',
        icon:  AcademicCapIcon
    }
]

export default function ProjectFeatures() {
    return (
        <div className="bg-gray-900 py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl lg:text-center">
                    <p className="mt-2 text-pretty text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-balance">
                        Top Features
                    </p>
                    <p className="mt-6 text-lg/8 text-gray-300">
                        Nemca Tech delivers reliable, scalable software solutions meticulously tailored to meet your organization’s unique requirements. Our forward-thinking development team leverages cutting-edge technologies and industry best practices to create secure, high-performing digital products.
                    </p>
                </div>
                <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
                    <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
                        {features.map((feature) => (
                            <div key={feature.name} className="flex flex-col">
                                <dt className="flex items-center gap-x-3 text-base/7 font-semibold text-white">
                                    <feature.icon aria-hidden="true" className="size-5 flex-none text-indigo-400" />
                                    {feature.name}
                                </dt>
                                <dd className="mt-4 flex flex-auto flex-col text-base/7 text-gray-300">
                                    <p className="flex-auto">{feature.description}</p>
                                    
                                </dd>
                            </div>
                        ))}
                    </dl>
                </div>
            </div>
        </div>
    )
}
