import Stats from "components/layout/components/stats"
import AllBlogsSection from "./components/allblogs-section"
import QueriesSection from "components/layout/components/queriesSection"
import ConsultantsSection from "components/layout/components/consultants-section"
import NewsletterSection from "components/layout/components/newsletter-section"

function Blogs() {
    return (
        <div>
            <AllBlogsSection />
            <Stats/>
            <QueriesSection/>
            <ConsultantsSection/>
            <NewsletterSection/>
        </div>
    )
}
export default Blogs