import HomeFeature from "../components/home/HomeFeature"
import HomeCTA from "../components/home/HomeCTA"
import HomeContact from "../components/home/HomeContact"
import HomeHero from "../components/home/HomeHero"
import { Helmet } from "react-helmet";


const metaKeywords = "Northern Cyprus Nemca Tech, KKTC NemcaTech, nemcatech kktc, nemca tech, nemcatech, nemca, custom software, web development, mobile app development, project management, marketing solutions, CRM solutions, AI content generation, SEO services, Northern Cyprus, nemcatech, nemca tech, nemca, home nemcatech, Home nemcaTech, Nemca Tech Home";
const headerTitle = "NemcaTech";
const metaTitle = "NemcaTech: Customized Tech Solutions";
const metaDescription = "NemcaTech offers custom web & mobile app development, project management, SEO optimization, and AI-driven content creation, delivering tailored tech solutions for businesses.";

export default function Home() {

  return (
    <div>
      <Helmet>
        <meta name="title" content={metaTitle} />
        <meta name="description" content={metaDescription} />
        <meta name="keywords" content={metaKeywords} />
        <title>{headerTitle}</title>
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=AW-16917800526"
        />
        {/* Initialize the dataLayer and gtag config */}
        <script>
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-16917800526');
          `}
        </script>
      </Helmet>

      <div className="relative isolate pt-14">
        <div
          aria-hidden="true"
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
        >
          <div
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
          />
        </div>

        <div className="py-24 sm:py-32 lg:pb-40">

          <div className="mx-auto max-w-7xl px-6 lg:px-8">

            <HomeHero />

          </div>

          <HomeFeature />

          <HomeCTA />

          <HomeContact />

        </div>



        <div
          aria-hidden="true"
          className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
        >
          <div
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
            className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-20 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
          />
        </div>
      </div>
    </div>
  )
}
