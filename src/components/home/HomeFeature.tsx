import { COLOR } from "../../constants/colors";
import { ROUTES } from "../../constants/routes";
import { Content } from "../../types/home";

export default function HomeFeature({data}: { data: Content[] | null}) {
  const content: Content[] = data?.filter((content) => content.page === "Home") || [];


    return (
      <div className="relative mt-12">
        <div className="relative h-80 overflow-hidden bg-indigo-600 md:absolute md:left-0 md:h-full md:w-1/3 lg:w-1/2 mt-10 ml-2">
          <img
            alt=""
            src="/projectScreenShot.png"
            className="size-full object-fit"
          />
          <svg
            viewBox="0 0 926 676"
            aria-hidden="true"
            className="absolute -bottom-24 left-24 w-[57.875rem] transform-gpu blur-[118px]"
          >
            <path
              d="m254.325 516.708-90.89 158.331L0 436.427l254.325 80.281 163.691-285.15c1.048 131.759 36.144 345.144 168.149 144.613C751.171 125.508 707.17-93.823 826.603 41.15c95.546 107.978 104.766 294.048 97.432 373.585L685.481 297.694l16.974 360.474-448.13-141.46Z"
              fill="url(#60c3c621-93e0-4a09-a0e6-4c228a0116d8)"
              fillOpacity=".4"
            />
            <defs>
              <linearGradient
                id="60c3c621-93e0-4a09-a0e6-4c228a0116d8"
                x1="926.392"
                x2="-109.635"
                y1=".176"
                y2="321.024"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#776FFF" />
                <stop offset={1} stopColor="#FF4694" />
              </linearGradient>
            </defs>
          </svg>
        </div>
        <div className="relative mx-auto max-w-7xl py-24 sm:py-32 lg:px-8 lg:py-40">
          <div className="pl-6 pr-6 md:ml-auto md:w-2/3 md:pl-16 lg:w-1/2 lg:pl-24 lg:pr-0 xl:pl-32">
            <p className="mt-2 text-4xl font-semibold tracking-tight text-white sm:text-5xl"> {content[1].title} </p>
            <p className="mt-6 text-base/7 text-gray-300">
              {content[1].body}

            </p>
            <div className="mt-8">
              <a
                href={ROUTES.CONTACT}
                className={`inline-flex rounded-md ${COLOR.BUTTONINDIGO} px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-white/20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white`}
              >
                Get Started
              </a>
            </div>
          </div>
        </div>
      </div>
    )
  }
  