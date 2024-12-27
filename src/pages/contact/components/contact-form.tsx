import { FaArrowRight } from 'react-icons/fa6';

import { Button, Col, Form, Input, Row } from 'antd';

function ContactForm() {
  return (
    <div className='p-6'>
      <Form
        layout='vertical'
        className='text-black py-8 px-32'
        // onFinish={onFinish}
        requiredMark={false}
      >
        <Row gutter={38}>
          <Col span={6}>
            <Form.Item
              className='border-b border-[#C2C2C2]'
              label={<span className='font-semibold font-primary'>Your Name</span>}
              name='yourname'
            >
              <Input variant='borderless' placeholder='type here' required />
            </Form.Item>
          </Col>
          <Col span={6}>
            <Form.Item
              className='border-b border-[#C2C2C2]'
              label={<span className='font-semibold font-primary'>Email</span>}
              name='email'
              rules={[
                { required: true, message: 'Please enter your email' },
                { type: 'email', message: 'Invalid email address' },
              ]}
            >
              <Input variant='borderless' placeholder='type your email' />
            </Form.Item>
          </Col>
          <Col span={6}>
            <Form.Item
              className='border-b border-[#C2C2C2]'
              label={<span className='font-semibold font-primary'>Phone Number(optional)</span>}
              name='phoneNumber'
              rules={[{ pattern: /^\+?\d{1,4}[\d\s]+$/, message: 'Invalid phone number' }]}
            >
              <Input variant='borderless' placeholder='type your phone number' />
            </Form.Item>
          </Col>{' '}
          <Col span={6}>
            <Form.Item
              className='border-b border-[#C2C2C2]'
              label={<span className='font-semibold font-primary'>Query</span>}
              name='phoneNumber'
              rules={[{ pattern: /^\+?\d{1,4}[\d\s]+$/, message: 'Invalid phone number' }]}
            >
              <Input variant='borderless' placeholder='tell us what it is about!' />
            </Form.Item>
          </Col>
        </Row>
        <Form.Item
          className='border-b border-[#C2C2C2]'
          label={<span className='font-semibold font-primary'>Message</span>}
          name='query'
          rules={[{ required: true, message: 'Please enter your query' }]}
        >
          <Input.TextArea
            variant='borderless'
            placeholder='type your message here'
            // rows={1}
          />
        </Form.Item>
        <Form.Item>
          <Button
            type='primary'
            htmlType='submit'
            className='px-11 py-6 bg-primary border-none text-white font-semibold rounded-xl'
          >
            Submit{' '}
            <span className='text-white'>
              {' '}
              <FaArrowRight />
            </span>
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}

export default ContactForm;
