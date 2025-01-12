import { COLOR } from "../../constants/colors";
import { ROUTES } from "../../constants/routes";

export default function HomeCTA() {
    return (
      <div className="">
        <div className="mx-auto max-w-7xl  sm:px-6 sm:py-32 lg:px-8 sm:mt-12">
          <div className="relative isolate overflow-hidden bg-gray-900 px-6  shadow-2xl sm:rounded-3xl sm:px-16 md:pt-24 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0">
            
            <div className="mx-auto max-w-md text-center lg:mx-0 lg:flex-auto lg:py-32 lg:text-left">
              <h2 className="text-balance text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                Why Nemca Tech?
              </h2>
              <p className="mt-6 text-pretty text-lg/8 text-gray-300">
              Nemca Tech offers easy and accessible digital solutions for businesses of all sizes.
              Our expert team and simple process ensure each solution fits your needs. 
              </p>

              <p className="mt-6 text-pretty text-lg/8 text-gray-300">
              From digital strategies to custom technology, we deliver results that keep you ahead. 
              With user-friendly tools and expert guidance, Nemca Tech helps you confidently navigate the digital world.
              </p>
              <div className="mt-10 flex items-center justify-center gap-x-6 lg:justify-start">
                <a
                  href={ROUTES.CONTACT}
                  className={`rounded-md  ${COLOR.BUTTONINDIGO} px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white`}
                >
                  Get Started
                </a>
                
              </div>
            </div>
            <div className="relative mt-16 h-80 lg:mt-8">
              <img
                alt="App screenshot"
                src="https://images.unsplash.com/photo-1606857521015-7f9fcf423740?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1344&h=1104&q=80"
                width={1824}
                height={1080}
                className="absolute left-0 top-0 w-[57rem] max-w-none rounded-md bg-white/5 ring-1 ring-white/10"
              />
            </div>
          </div>
        </div>
      </div>
    )
  }
  