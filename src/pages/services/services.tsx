import QueriesSection from "components/layout/components/queriesSection"
import HeroSection from "./components/hero-section"
import SectorsSection from "./components/sectors-section"
import ServicesSection from "./components/services-section"
import ConsultantsSection from "components/layout/components/consultants-section"
import Blogs from "pages/blogs/blogs"
import BlogSection from "components/layout/components/blog-section"
import NewsletterSection from "components/layout/components/newsletter-section"
import ServiceDetails from "./components/service-details"

function Services() {
    return (
        <div> 
            <HeroSection/>
            <ServicesSection/>
            <SectorsSection/>
            {/* <ServiceDetails/> */}
            <QueriesSection/>
            <ConsultantsSection/>
            <BlogSection limit={3}/>
            <NewsletterSection/>
        </div>
    )
}
export default Services