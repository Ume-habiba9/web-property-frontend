import { Button } from "antd"
import { FaArrowRight } from "react-icons/fa6"
function SignupSection() {
    return (
        <div className="flex flex-col gap-3">
        <h2 className="font-semibold text-xl">Let our experts guide you.</h2>
        <p className="opacity-[60%]">Signup to receive the latest articles</p>
        <input
            className="py-4 px-4 max-w-[420px] text-left bg-white border border-[#363636] rounded-xl"
            placeholder="Your email address"
            type="text"
        />
        <Button
            type="primary"
            htmlType="submit"
            className="px-11 max-w-[420px] py-6 bg-primary border-none text-white font-semibold rounded-xl"
        >
            Submit{' '}
            <span className="text-white">
                <FaArrowRight />
            </span>
        </Button>
    </div>
    )
}

export default SignupSection
