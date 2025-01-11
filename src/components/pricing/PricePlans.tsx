import { useState } from "react";
import { CheckIcon } from "@heroicons/react/24/solid";


export default function PricePlans () {

    const tiers = [
        {
          name: 'Micro Build',
          id: 'tier-freelancer',
          href: '#',
          price: { monthly: '£950', annually: '$199' },
          description: 'Quick, effective web development for personal sites and small businesses, with basic SEO and 1 year of hosting.',
          features: ['Dedicated Software Engineer', 'Part-time Tech Lead & Project Manager', 'Basic analytics', '48-hour support response time'],
          mostPopular: false,
          payment: '/monthly'
        },
        {
          name: 'Boost Build',
          id: 'tier-startup',
          href: '#',
          price: { monthly: '£1,750', annually: '$299' },
          description: 'Custom web and app development for growing businesses, including advanced features, SEO, and marketing roadmap.',
          features: [
            'Dedicated Software Engineer',
            'Dedicated Tech Lead & Project Manager',
            'Advanced analytics',
            'Part-time QA Tester',
            'Marketing Manager Evaluation at the End of the Project',
          ],
          mostPopular: true,
          payment: '/monthly'
        },
        {
          name: 'Pro Vision',
          id: 'tier-enterprise',
          href: '#',
          price: { monthly: '£2,500', annually: '$599' },
          description: 'Tailored solutions for enterprises, offering complex development, cloud services, and 24/7 support.',
          features: [
            'Dedicated Software Engineer',
            'Dedicated Tech Lead & Project Manager',
            'Dedicated QA Tester',
            'Marketing Manager Evaluation Conduct Twice',
            'Part-time SEO Content Strategist',
            'Custom reporting.',
          ],
          mostPopular: false,
          payment: '/monthly'
        },
      
        {
          name: 'Digital Blueprint',
          id: 'tier-enterprie1',
          href: '#',
          price: { monthly: '£150', annually: '$599' },
          description: 'Expert software engineers at Nemca Tech provide consulting to shape your digital vision and accelerate transformation with customized tech solutions.',
          features: [
            'Digital Vision Strategy',
            'Technology Integration',
            'Meetings with Tech Lead & Project Manager',
          ],
          mostPopular: false,
          payment: ' / for 60 minutes'
        },
      
        {
          name: 'Project Pulse',
          id: 'tier-enterprise2',
          href: '#',
          price: { monthly: '£950', annually: '$599' },
          description: 'Provides monthly website updates, feature implementation, and SEO-optimized AI-driven content creation to keep your digital presence at its best.',
          features: [
            'Dedicated Project Manager',
            'Dedicated SEO Content Strategist',
            'Marketing automations',
            'Part-time Software Engineer',
          ],
          mostPopular: false,
          payment: '/monthly'
        },
      
        {
          name: 'Code the Future',
          id: 'tier-enterprise3',
          href: '#',
          price: { monthly: '£1,150', annually: '$599' },
          description: 'Learn essential digital skills with individual or group sessions in Python, Django, Cyber Security, SQL, Project Management, and more.',
          features: [
            'Python, TypeScript, SQL, Flutter, React, Django',
            'Software Quality Assurance Testing and More',
            'Project Management',
            'Cyber Security'
          ],
          mostPopular: false,
          payment: '/monthly'
        },
      ]

    const [selectedTier, setSelectedTier] = useState(tiers[0].id); // Default selected card

    function classNames(...classes: any) {
        return classes.filter(Boolean).join(' ')
    }

    return (
        <div className="isolate mx-auto mt-10 grid max-w-md grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {tiers.map((tier) => (
            <div
              key={tier.id}
              className={classNames(
                tier.id === selectedTier ? 'bg-indigo-600 ring-2 ring-indigo-500' : 'bg-white/5 ring-1 ring-white/10',
                'rounded-3xl p-8 xl:p-10 cursor-pointer'
              )}
              onClick={() => setSelectedTier(tier.id)}
            >
              <div className="flex items-center justify-between gap-x-4">
                <h3 id={tier.id} className="text-lg/8 font-semibold text-white">
                  {tier.name}
                </h3>
                {tier.mostPopular ? (
                  <p className="rounded-full bg-indigo-500 px-2.5 py-1 text-xs/5 font-semibold text-white">
                    Most popular
                  </p>
                ) : null}
              </div>
              <p className="mt-4 text-sm/6 text-gray-300">{tier.description}</p>
              <p className="mt-6 flex items-baseline gap-x-1">
                <span className="text-4xl font-semibold tracking-tight text-white">{tier.price.monthly}</span>
                <span className="text-sm/6 font-semibold text-gray-300">{tier.payment }  </span>
              </p>
              <a
                href={tier.href}
                aria-describedby={tier.id}
                className={classNames(
                  tier.id === selectedTier
                    ? 'bg-indigo-500 text-white shadow-sm hover:bg-indigo-400 focus-visible:outline-indigo-500'
                    : 'bg-white/10 text-white hover:bg-white/20 focus-visible:outline-white',
                  'mt-6 block rounded-md px-3 py-2 text-center text-sm/6 font-semibold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2'
                )}
              >
                Buy plan
              </a>
              <ul role="list" className="mt-8 space-y-3 text-sm/6 text-gray-300 xl:mt-10">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex gap-x-3">
                    <CheckIcon aria-hidden="true" className="h-6 w-5 flex-none text-white" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
    );
}