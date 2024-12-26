import ConsultantsSection from "components/layout/components/consultants-section"
import HeroSection from "./components/hero-section"
import MarketingServices from "./components/marketing-services"
import WhyUsSection from "./components/why-us-section"
import BlogSection from "components/layout/components/blog-section"
import NewsletterSection from "components/layout/components/newsletter-section"
import SellingInfoForm from "./components/selling-info-form"

function SellWithUs() {
    return (
        <div>
            <HeroSection />
            <MarketingServices />
            <WhyUsSection />
            <SellingInfoForm/>
            <ConsultantsSection/>
            <BlogSection limit={3}/>
            <NewsletterSection/>
        </div>
    )
}

export default SellWithUs
