import { ROUTES } from "../constants/routes"

const navigation = {
    main: [
      { name: 'About', href: '#' },
      { name: 'Pricing', href: '#' },
      { name: 'Projects', href: '#' },
      { name: 'Contact', href: ROUTES.CONTACT },
    ],
    social: [
      {
        name: 'LinkedIn',
        href: 'https://www.linkedin.com/company/nemca-tech',
        icon: (props: any) => (
            <span className="[&>svg]:h-5 [&>svg]:w-5">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 448 512" {...props}>
              <path
                d="M100.3 448H7.4V148.9h92.9zM53.8 108.1C24.1 108.1 0 83.5 0 53.8a53.8 53.8 0 0 1 107.6 0c0 29.7-24.1 54.3-53.8 54.3zM447.9 448h-92.7V302.4c0-34.7-.7-79.2-48.3-79.2-48.3 0-55.7 37.7-55.7 76.7V448h-92.8V148.9h89.1v40.8h1.3c12.4-23.5 42.7-48.3 87.9-48.3 94 0 111.3 61.9 111.3 142.3V448z" />
            </svg>
          </span>
        ),
      },
    ],
  }
  
  export default function Footer() {
    return (
      <footer className="bg-gray-900 relative z-10">
        <div className="mx-auto max-w-7xl overflow-hidden px-6 py-20 sm:py-24 lg:px-8">
          <nav aria-label="Footer" className="-mb-6 flex flex-wrap justify-center gap-x-12 gap-y-3 text-sm/6">
            {navigation.main.map((item) => (
              <a key={item.name} href={item.href} className="text-sm/6 font-semibold text-white">
                {item.name}
              </a>
            ))}
          </nav>
          <div className="mt-16 flex justify-center gap-x-10">
            {navigation.social.map((item) => (
              <a key={item.name} href={item.href} className="text-sm/6 font-semibold text-white">
                <span className="sr-only">{item.name}</span>
                <item.icon aria-hidden="true" className="size-6" />
              </a>
            ))}
          </div>
          <p className="mt-10 text-center text-sm/6 text-gray-400">&copy; {new Date().getFullYear()} Nemca Tech, Inc. All rights reserved.</p>
        </div>
      </footer>
    )
  }
  