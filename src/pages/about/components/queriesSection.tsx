import querybg from 'assets/images/querybg.png'
import { Button, Form, Input } from 'antd';
function QueriesSection() {
  return (
    <section className='relative h-screen w-screen bg-cover bg-center flex flex-row   justify-center py-20 text-white gap-x-28'

      style={{ backgroundImage: `url(${querybg})` }}
    >
      <h1 className='font-medium text-7xl w-1/3'>Lorem ipsum
        dolor sit amet sit
        consectetur. </h1>
      <div className="bg-[#1C1C1EE8] text-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Have Questions?</h2>
        <Form
          layout="vertical"
          // onFinish={onFinish}
          className="space-y-4 text-white"
          requiredMark={false}
        >
          <Form.Item
            label={<span className="text-white">Full Name</span>}
            name="fullName"
          >
            <Input placeholder="John Doe"
              className="rounded-md border-[#C2C2C2] hover:bg-transparent focus:bg-transparent text-white placeholder-[#C2C2C2] bg-transparent" />
          </Form.Item>
          <Form.Item
            label={<span className="text-white">Phone Number</span>}
            name="phoneNumber"
            rules={[
              { pattern: /^\+?\d{1,4}[\d\s]+$/, message: 'Invalid phone number' },
            ]}
          >
            <Input  placeholder="+123 456 78910"   className="rounded-md border-[#C2C2C2] hover:bg-transparent focus:bg-transparent text-white placeholder-[#C2C2C2] bg-transparent" />
          </Form.Item>
          <Form.Item
            label={<span className="text-white">Email</span>}
            name="email"
            rules={[
              { required: true, message: 'Please enter your email' },
              { type: 'email', message: 'Invalid email address' },
            ]}
          >
            <Input placeholder="john@example.com"   className="rounded-md border-[#C2C2C2] hover:bg-transparent focus:bg-transparent text-white placeholder-[#C2C2C2] bg-transparent"/>
          </Form.Item>
          <Form.Item
            label={<span className="text-white">Query</span>}
            name="query"
            rules={[{ required: true, message: 'Please enter your query' }]}
          >
            <Input.TextArea
              placeholder="Enter your query here..."
              className="rounded-md border-[#C2C2C2] hover:bg-transparent focus:bg-transparent text-white placeholder-[#C2C2C2] bg-transparent"
                            rows={4}
            />
          </Form.Item>
          <Form.Item>
            <Button
              // type="primary"
              htmlType="submit"
              className="w-full bg-[#D81C26] border-none text-white font-semibold rounded-md"
            >
              Submit
            </Button>
          </Form.Item>
        </Form>
      </div>


    </section>
  );
}
export default QueriesSection