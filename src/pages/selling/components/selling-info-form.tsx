/* eslint-disable @typescript-eslint/no-explicit-any */
import { useRef } from 'react';
import { FaArrowLeftLong } from 'react-icons/fa6';

import { Button, Carousel, Col, Form, Input, Row, Select } from 'antd';

import Container from 'components/core-ui/container/container';

import querybg from 'assets/images/form-lead.png';

const { Option } = Select;
function SellingInfoForm() {
  const carouselRef = useRef<any>(null);

  const handleNext = () => {
    if (carouselRef.current) {
      carouselRef.current.next();
    }
  };
  const handleBack = () => {
    if (carouselRef.current) {
      carouselRef.current.prev();
    }
  };
  return (
    <div
      className='relative h-[85vh] w-full'
      style={{
        backgroundImage: `url(${querybg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'bottom',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <Container>
        <div className='p-9 flex-centered text-center'>
          <div className='mt-9 max-w-[830px] text-white flex flex-col gap-5'>
            <h2 className='text-7xl font-semibold'>Sell With Us</h2>
            <p className='text-base leading-9'>
              Lorem ipsum dolor sit amet consectetur. Ridiculus at mauris diam ut. Cum ullamcorper urna quis vestibulum
              ut. Massa proin gravida arcu sed id. Dictum facilisi vel facilisis elementum augue. Id facilisis aliquam
              dolor aliquam.
            </p>
          </div>
        </div>

        <div className='mx-auto py-7 px-14 bg-white max-w-[710px]  rounded-3xl'>
          <span onClick={handleBack}>
            <FaArrowLeftLong />
          </span>
          <Carousel ref={carouselRef} dotPosition='top' infinite={false}>
            <div>
              <h2 className='py-7 font-medium  text-5xl'>Personal Information</h2>
              <Form
                layout='vertical'
                // onFinish={onFinish}
                className='font-normal '
                requiredMark={false}
              >
                <Row gutter={48}>
                  <Col span={10}>
                    <Form.Item
                      label={<span className='font-primary text-sm font-medium'>Full Name</span>}
                      name='fullName'
                    >
                      <Input
                        placeholder='John'
                        className='rounded-md border-[#C2C2C2] hover:bg-transparent focus:bg-transparent text-white placeholder-[#C2C2C2] bg-transparent'
                      />
                    </Form.Item>
                  </Col>
                  <Col span={10}>
                    <Form.Item
                      label={<span className='text-sm font-medium'>Email</span>}
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
                  </Col>
                </Row>
                <Form.Item
                  label={<span className='text-sm font-medium font-primary'>Phone Number</span>}
                  name='phoneNumber'
                  rules={[{ pattern: /^\+?\d{1,4}[\d\s]+$/, message: 'Invalid phone number' }]}
                >
                  <Input
                    placeholder='+123 456 78910'
                    className='w-[250px] rounded-md border-[#C2C2C2] hover:bg-transparent focus:bg-transparent text-white placeholder-[#C2C2C2] bg-transparent'
                  />
                </Form.Item>
              </Form>
              <div className='flex justify-end'>
                <Button
                  onClick={handleNext}
                  // type="primary"
                  htmlType='submit'
                  className='text-base px-11 py-6 bg-primary border-none text-white font-semibold rounded-xl'
                >
                  Next
                </Button>
              </div>
            </div>
            <div>
              <h2 className='py-7 font-medium text-5xl'>Property Details</h2>
              <Form
                layout='vertical'
                // onFinish={onFinish}
                className='font-normal'
                requiredMark={false}
              >
                <Row gutter={48}>
                  <Col span={10}>
                    <Form.Item
                      label={<span className='font-primary text-sm font-medium'>Country of Property</span>}
                      name='country'
                      rules={[{ required: true, message: 'Please select a country' }]}
                    >
                      <Select
                        defaultValue='USA'
                        className='rounded-md border-[#C2C2C2] hover:bg-transparent focus:bg-transparent text-white placeholder-[#C2C2C2] bg-transparent'
                      >
                        <Option value='USA'>USA</Option>
                        <Option value='Canada'>Canada</Option>
                        <Option value='UK'>UK</Option>
                        <Option value='Australia'>Australia</Option>
                      </Select>
                    </Form.Item>
                  </Col>

                  <Col span={10}>
                    <Form.Item
                      label={<span className='text-sm font-medium'>City</span>}
                      name='city'
                      rules={[{ required: true, message: 'Please select a city' }]}
                    >
                      <Select
                        defaultValue='NewYork'
                        className='rounded-md border-[#C2C2C2] hover:bg-transparent focus:bg-transparent placeholder-[#C2C2C2] bg-transparent'
                      >
                        <Option value='NewYork'>New York</Option>
                        <Option value='Toronto'>Toronto</Option>
                        <Option value='London'>London</Option>
                        <Option value='Sydney'>Sydney</Option>
                      </Select>
                    </Form.Item>
                  </Col>
                </Row>

                <Row gutter={48}>
                  {/* Property Type Dropdown */}
                  <Col span={10}>
                    <Form.Item
                      label={<span className='text-sm font-medium font-primary'>Property Type</span>}
                      name='propertyType'
                      rules={[{ required: true, message: 'Please select a property type' }]}
                    >
                      <Select
                        defaultValue='Mention'
                        className='rounded-md border-[#C2C2C2] hover:bg-transparent focus:bg-transparent placeholder-[#C2C2C2] bg-transparent'
                      >
                        <Option value='Industrial'>Mention</Option>
                        <Option value='Residential'>Residential</Option>
                        <Option value='Commercial'>Commercial</Option>
                        <Option value='Industrial'>Industrial</Option>
                      </Select>
                    </Form.Item>
                  </Col>

                  {/* Approximate Value Input */}
                  <Col span={10}>
                    <Form.Item
                      label={<span className='text-sm font-medium font-primary'>Approximate Value</span>}
                      name='approxValue'
                      rules={[{ required: true, message: 'Please enter the approximate value' }]}
                    >
                      <Input className='w-[250px] rounded-md border-[#C2C2C2] hover:bg-transparent focus:bg-transparent text-white placeholder-[#C2C2C2] bg-transparent' />
                    </Form.Item>
                  </Col>
                </Row>
              </Form>
              <div className='flex justify-end'>
                <Button
                  onClick={handleNext}
                  htmlType='submit'
                  className='text-base px-11 py-6 bg-primary border-none text-white font-semibold rounded-xl'
                >
                  Next
                </Button>
              </div>
            </div>

            <div>
              <h2 className='py-7 font-medium  text-5xl'>OwnerShip Details</h2>
              <Form
                layout='vertical'
                // onFinish={onFinish}
                className='font-normal '
                requiredMark={false}
              >
                <Row gutter={48}>
                  <Col span={10}>
                    <Form.Item
                      label={<span className='font-primary text-sm font-medium'>Full Name</span>}
                      name='fullName'
                    >
                      <Input
                        placeholder='John'
                        className='rounded-md border-[#C2C2C2] hover:bg-transparent focus:bg-transparent text-white placeholder-[#C2C2C2] bg-transparent'
                      />
                    </Form.Item>
                  </Col>
                  <Col span={10}>
                    <Form.Item
                      label={<span className='text-sm font-medium'>Email</span>}
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
                  </Col>
                </Row>
                <Form.Item
                  label={<span className='text-sm font-medium font-primary'>Phone Number</span>}
                  name='phoneNumber'
                  rules={[{ pattern: /^\+?\d{1,4}[\d\s]+$/, message: 'Invalid phone number' }]}
                >
                  <Input
                    placeholder='+123 456 78910'
                    className='w-[250px] rounded-md border-[#C2C2C2] hover:bg-transparent focus:bg-transparent text-white placeholder-[#C2C2C2] bg-transparent'
                  />
                </Form.Item>
              </Form>
              <div className='flex justify-end'>
                <Button
                  onClick={handleNext}
                  htmlType='submit'
                  className='text-base px-11 py-6 bg-primary border-none text-white font-semibold rounded-xl'
                >
                  Next
                </Button>
              </div>
            </div>
            <div>
              <h2 className='py-7 font-medium opacity-[80%] text-5xl'>Personal Information</h2>
              <Form
                layout='vertical'
                // onFinish={onFinish}
                className='font-normal '
                requiredMark={false}
              >
                <Row gutter={48}>
                  <Col span={10}>
                    <Form.Item
                      label={<span className='font-primary text-sm font-medium'>Full Name</span>}
                      name='fullName'
                    >
                      <Input
                        placeholder='John'
                        className='rounded-md border-[#C2C2C2] hover:bg-transparent focus:bg-transparent text-white placeholder-[#C2C2C2] bg-transparent'
                      />
                    </Form.Item>
                  </Col>
                  <Col span={10}>
                    <Form.Item
                      label={<span className='text-sm font-medium'>Email</span>}
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
                  </Col>
                </Row>
                <Form.Item
                  label={<span className='text-sm font-medium font-primary'>Phone Number</span>}
                  name='phoneNumber'
                  rules={[{ pattern: /^\+?\d{1,4}[\d\s]+$/, message: 'Invalid phone number' }]}
                >
                  <Input
                    placeholder='+123 456 78910'
                    className='w-[250px] rounded-md border-[#C2C2C2] hover:bg-transparent focus:bg-transparent text-white placeholder-[#C2C2C2] bg-transparent'
                  />
                </Form.Item>
              </Form>
              <div className='flex justify-end'>
                <Button
                  onClick={handleNext}
                  htmlType='submit'
                  className='text-base px-11 py-6 bg-primary border-none text-white font-semibold rounded-xl'
                >
                  Next
                </Button>
              </div>
            </div>
          </Carousel>
        </div>
      </Container>
    </div>
  );
}

export default SellingInfoForm;
