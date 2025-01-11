import {  DocumentCheckIcon, LockClosedIcon, PlayCircleIcon, ServerIcon  } from '@heroicons/react/20/solid'

const features = [
  {
    name: 'Fill Out the Contact Form',
    description: 'Once we receive your form, we’ll reach out to schedule a complimentary discovery meeting to understand your vision, goals, and challenges.',
    icon: DocumentCheckIcon,
  },
  {
    name: 'Solution Execute',
    description: 'With expert execution, we turn your vision into reality. Our expert team efficiently transforms your vision into high-performance solutions using the latest technology and best practices.',
    icon: LockClosedIcon,
  },
  {
    name: 'Project Plan',
    description: 'A detailed roadmap is crafted to ensure smooth project progression, with clear milestones and strategies defined by our project & product managers to transform ideas into scalable products.',
    icon: PlayCircleIcon,
  },
  {
    name: 'Delivery & Support',
    description: 'Nemca Tech’s professional team delivers secure, reliable, and user-friendly solutions on time, ensuring your product is ready to perform from day one with a seamless user experience.',
    icon: ServerIcon,
  }
]

export default function HowToStart() {
  return (
    <div className="bg-gray-900 py-12">
      <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="relative isolate overflow-hidden bg-gray-900 px-6 py-20 sm:rounded-3xl sm:px-10 sm:py-24 lg:py-24 xl:px-24">
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-center lg:gap-y-0">
            <div className="lg:row-start-2 lg:max-w-md">
              <h2 className="text-balance text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                        How to Start?
              </h2>
              <p className="mt-6 text-lg/8 text-gray-300">
                Ready to bring your digital ideas to life? Follow our simple process to get started.
              </p>
            </div>
            <img
              alt="Product screenshot"
              src="https://images.unsplash.com/photo-1525130413817-d45c1d127c42?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1920&q=60&blend=6366F1&sat=-100&blend-mode=multiply"
              width={2432}
              height={1442}
              className="relative -z-20 min-w-full max-w-xl rounded-xl shadow-xl ring-1 ring-white/10 lg:row-span-4 lg:w-[64rem] lg:max-w-none"
            />
            <div className="max-w-xl lg:row-start-3 lg:mt-10 lg:max-w-md lg:border-t lg:border-white/10 lg:pt-10">
              <dl className="max-w-xl space-y-8 text-base/7 text-gray-300 lg:max-w-none">
                {features.map((feature) => (
                  <div key={feature.name} className="relative">
                    <dt className="ml-9 inline-block font-semibold text-white">
                      <feature.icon aria-hidden="true" className="absolute left-1 top-1 size-5 text-indigo-500" />
                      {feature.name}
                    </dt>{' '}
                    <br></br>
                    <dd className="inline">{feature.description}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
          <div
            aria-hidden="true"
            className="pointer-events-none absolute left-12 top-1/2 -z-10 -translate-y-1/2 transform-gpu blur-3xl lg:bottom-[-12rem] lg:top-auto lg:translate-y-0 lg:transform-gpu"
          >
            <div
              style={{
                clipPath:
                  'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
              }}
              className="aspect-[1155/678] w-[72.1875rem] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-25"
            />
          </div>
        </div>
      </div>
    </div>
  )
}
