import { Button, Col, Form, Input, Row } from 'antd';

import Container from 'components/core-ui/container/container';

import querybg from 'assets/images/form-lead.png';

function QueriesSection() {
  return (
    <section
      className='relative bg-cover bg-bottom pt-24 pb-10 text-white '
      style={{ backgroundImage: `url(${querybg})` }}
    >
      <Container>
        <div className='flex flex-row items-start justify-around mt-6'>
          <h1 className='font-medium text-7xl max-w-[450px] font-primary'>
            Lorem ipsum dolor sit amet sit consectetur.{' '}
          </h1>
          <div className='bg-form-general bg-[#1C1C1EE8] bg-opacity-5 text-white px-8 pt-14 pb-6 rounded-3xl shadow-lg w-full max-w-[400px] border border-primary'>
            <h2 className='text-2xl font-bold mb-6 text-center font-primary'>Have Questions?</h2>
            <Form
              layout='vertical'
              // onFinish={onFinish}
              className=' text-white'
              requiredMark={false}
            >
              <Row gutter={12}>
                <Col span={12}>
                  <Form.Item label={<span className='text-white font-primary'>Full Name</span>} name='fullName'>
                    <Input
                      placeholder='John Doe'
                      className='rounded-md border-[#C2C2C2] hover:bg-transparent focus:bg-transparent text-white placeholder-[#C2C2C2] bg-transparent'
                    />
                  </Form.Item>
                </Col>
                <Col span={12}>
                  <Form.Item
                    label={<span className='text-white font-primary'>Phone Number</span>}
                    name='phoneNumber'
                    rules={[{ pattern: /^\+?\d{1,4}[\d\s]+$/, message: 'Invalid phone number' }]}
                  >
                    <Input
                      placeholder='+123 456 78910'
                      className='rounded-md border-[#C2C2C2] hover:bg-transparent focus:bg-transparent text-white placeholder-[#C2C2C2] bg-transparent'
                    />
                  </Form.Item>
                </Col>
              </Row>
              <Form.Item
                label={<span className='text-white font-primary'>Email</span>}
                name='email'
                rules={[
                  { required: true, message: 'Please enter your email' },
                  { type: 'email', message: 'Invalid email address' },
                ]}
              >
                <Input
                  placeholder='john@example.com'
                  className='rounded-md border-[#C2C2C2] hover:bg-transparent focus:bg-transparent text-white placeholder-[#C2C2C2] bg-transparent'
                />
              </Form.Item>
              <Form.Item
                label={<span className='text-white font-primary'>Query</span>}
                name='query'
                rules={[{ required: true, message: 'Please enter your query' }]}
              >
                <Input.TextArea
                  placeholder='Enter your query here...'
                  className='rounded-md border-[#C2C2C2] hover:bg-transparent focus:bg-transparent text-white placeholder-[#C2C2C2] bg-transparent'
                  rows={4}
                />
              </Form.Item>
              <Form.Item>
                <Button
                  // type="primary"
                  htmlType='submit'
                  className='w-full py-6 bg-primary border-none text-white font-semibold rounded-md'
                >
                  Submit
                </Button>
              </Form.Item>
            </Form>
          </div>
        </div>
      </Container>
    </section>
  );
}
export default QueriesSection;
