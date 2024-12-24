import Header from "./components/header"
import aboutImg from 'assets/images/about2.png'
import OurValues from "./components/ourvalues"
import Stats from "../../components/layout/components/stats"
import QueriesSection from "../../components/layout/components/queriesSection"
import ConsultantsSection from "components/layout/components/consultants-section"
import NewsletterSection from "components/layout/components/newsletter-section"
import BlogSection from "components/layout/components/blog-section"
function AboutUs() {
  return (
    <div>
      <Header />
      <div className="p-9 flex flex-row align-center justify-center gap-9">
        <div className="flex flex-col gap-4">
          <h3 className="text-primary font-normal ">~ WHO WE ARE</h3>
          <p className="font-bold text-2xl w-1/2 text-[#1C1C1E]">For over 20 years,
            the founding members of
            IVYHOLD</p>
          <img className="w-96" src={aboutImg} alt="" />
        </div>

        <div>
          <OurValues />
        </div>

      </div>
      <Stats />
      <QueriesSection />
      <ConsultantsSection />
      <BlogSection limit={3}/>
      <NewsletterSection />
    </div>
  )
}
export default AboutUs
