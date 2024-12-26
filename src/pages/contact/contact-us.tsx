import ContactForm from "./components/contact-form"
import FbIcon from 'assets/icons/fb-icon.svg?react';
import InstaIcon from 'assets/icons/insta-icon.svg?react';
import TwitterIcon from 'assets/icons/twitter-icon.svg?react';

function ContactUs() {
    return (
        <div className="p-7  border-b border-[#C2C2C2] mb-12">
            <div className="flex flex-row justify-around p-9">
                <div className="text-left max-w-[65%]">
                    <span className="font-medium text-xl">Have Question In mind?</span>
                    <h2 className="text-7xl font-semibold">Get in touch with us. We're here to assist you.</h2>
                </div>
                <div className="flex flex-col gap-9">
                    <span className="rounded-full border p-4"><FbIcon/></span>
                    <span className="rounded-full border p-4"><InstaIcon/></span>
                    <span className="rounded-full border p-4"><TwitterIcon/></span>
                </div>
            </div>
            <ContactForm />
        </div>
    )
}

export default ContactUs