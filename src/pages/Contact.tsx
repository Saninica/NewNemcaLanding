import { Helmet } from "react-helmet"
import Contact from "../components/contact/Contact"

const metaTitle = "NemcaTech: Contact Us";
const metaDescription = "Contact NemcaTech for custom software solutions. Our team is here to help with web development, mobile apps, project management, and more.";
const metaKeywords = "contact NemcaTech, tech company Northern Cyprus, custom software solutions, business inquiries, tech support, project consultations";
const headerTitle = "Contact Us";

export default function ContactPage() {


  return (
    <>
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

        <Contact />
    </>

  )
}
