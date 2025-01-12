import { Helmet } from "react-helmet";
import PricingFaq from "../components/pricing/Faq";
import PricePlans from "../components/pricing/PricePlans";
import TechStack from "../components/pricing/TechStack";


const metaKeywords = "Pricing NemcaTech, tech company Northern Cyprus, custom software solutions, business inquiries, tech support, project consultations";
const headerTitle = "Pricing";
const metaTitle = "Pricing - Nemca Tech";
const metaDescription = "Explore our pricing plans at Nemca Tech. Discover custom software solutions tailored to your business needs, with exceptional tech support and project consultations.";
export default function PricingPage() {

  return (
    <div className="bg-gray-900 py-24 sm:py-32">
      <Helmet>
        <meta name="title" content={metaTitle} />
        <meta name="description" content={metaDescription} />
        <meta name="keywords" content={metaKeywords} />
        <title>{headerTitle}</title>
      </Helmet>

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <p className="mt-2 text-balance text-5xl font-semibold tracking-tight text-white sm:text-6xl">
            Pricing That Grows with You
          </p>
        </div>
        <p className="mx-auto mt-6 max-w-2xl text-pretty text-center text-lg font-medium text-gray-400 sm:text-xl/8">
          Choose a plan designed to empower your business with cutting-edge software solutions, enhance customer engagement, and drive measurable growth
        </p>

        <PricePlans />

        <TechStack />

        <PricingFaq />

      </div>
    </div>
  );
}
