import { Button, Input, Space } from 'antd'
function NewsletterSection() {
    return (
        <section className=" p-9 flex flex-col items-center gap-7 justify-center">
            <h2 className="text-5xl font-semibold">Subscribe to Our News Letter</h2>
            <p className=" text-[#9EA3AE]">Join 10,000+ other landlords in our estatery community.</p>
            <Space className='text-center align-center' direction="horizontal" size="large">
                <Space.Compact style={{ width: '100%' }}>
                    <Input placeholder='Enter your email address'
                        className="rounded-md border-gray-400  bg-white  text-gray-700"
                    />
                    <Button type="primary"
                        className="bg-red-500 hover:bg-red-600 active:bg-red-700 border-red-500 hover:border-red-600 text-white font-semibold px-4 py-2 rounded-md"
                    >Submit</Button>
                </Space.Compact>
            </Space>
        </section>
    )
}
export default NewsletterSection