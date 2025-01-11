import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react'
import { MinusSmallIcon, PlusSmallIcon } from '@heroicons/react/24/outline'
import { ROUTES } from '../../constants/routes'

const faqs = [
  {
    question: "What is the process for starting a new project with Nemca Tech?",
    answer: "To start a new project, simply fill out the form on our Contact page. Our team will review your requirements and reach out to discuss your project in detail, including timelines and next steps.",
  },
  {
    question:  'Can I share my project idea with you from scratch, including all processes?',
    name: 'Yes, Nemca Tech works with clients from the very beginning stages, assisting in refining your ideas and guiding through all processes.'
  },
  {
    question: 'Can I make changes to the project scope once it has started?',
    answer: 'Yes, changes can be made to the project scope. However, these may affect the project timeline and cost. We’ll work with you to understand the impact of any changes.'

  },

  {
    question: 'Can I combine different solutions from Nemca Tech based on my needs without following a set plan?',
    answer: 'Yes, our solutions are flexible, and we can customize our services to your unique requirements without following a predefined package.'

  }
]

export default function PricingFaq() {
  return (
    <div className="bg-gray-900">
      <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8 lg:py-40">
        <div className="mx-auto max-w-4xl divide-y divide-white/10">
          <h2 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl">How can we Help you? </h2>
          <dl className="mt-10 space-y-6 divide-y divide-white/10">
            {faqs.map((faq) => (
              <Disclosure key={faq.question} as="div" className="pt-6">
                <dt>
                  <DisclosureButton className="group flex w-full items-start justify-between text-left text-white">
                    <span className="text-base/7 font-semibold">{faq.question}</span>
                    <span className="ml-6 flex h-7 items-center">
                      <PlusSmallIcon aria-hidden="true" className="size-6 group-data-[open]:hidden" />
                      <MinusSmallIcon aria-hidden="true" className="size-6 group-[&:not([data-open])]:hidden" />
                    </span>
                  </DisclosureButton>
                </dt>
                <DisclosurePanel as="dd" className="mt-2 pr-12">
                  <p className="text-base/7 text-gray-300">{faq.answer}</p>
                </DisclosurePanel>
              </Disclosure>
            ))}
          </dl>
        </div>
        <div className="mt-12 flex items-center justify-center gap-x-6">
                                <a
                                  href={ROUTES.CONTACT}
                                  className="rounded-md bg-indigo-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-400"
                                >
                                  Let's Contact
                                </a>
                                
                              </div>
      </div>
    </div>
  )
}
