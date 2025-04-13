import React, { useState } from 'react';
import { Form, Input, Flex, Typography, DatePicker, TimePicker, Alert } from 'antd';
import { FormInstance, useForm } from 'antd/es/form/Form';
import { TextButton, RadioButton, Uploader, LinkButton }  from '../../shared/components'

import './CreateBannerForm.css'

type Props = {
  usersCount: number,
  form: FormInstance<any>,
}

export const CreateBannerForm: React.FC<Props>= ({ usersCount, form }) => {

  const [showEnd, setShowEnd] = useState(false);
  const { Title, Text, Paragraph } = Typography;

  const handleChange = () => {
  }

   const confirmCreate = (data) => {
        console.log('confirmCreate data', data)
        form.submit()
    }

  return (
      <Form form={form} onFinish={confirmCreate} onChange={handleChange}>
        <Title level={4}>Upload banner</Title>
        <Paragraph className='CreateBannerForm_helpText'>You better display across all devices, upload both web and mobile versions of your banner.</Paragraph>
        <Flex gap="middle" wrap={false}>
          <Form.Item name={['mobileUploader']} rules={[{ required: true }]} className='CreateBannerForm_mobileUploader'>
            <Uploader text='For mobile app' callBack={(value) => form.setFieldsValue({ mobileUploader: value})}/>
          </Form.Item>
          <Form.Item name={['webUploader']} rules={[{ required: true }]} className='CreateBannerForm_webUploader'>
            <Uploader text='For website' callBack={(value) => form.setFieldsValue({ webUploader: value})}/>
          </Form.Item> 
        </Flex>
        <Flex wrap vertical>
          <Text className='CreateBannerForm_helpText'>Mobile recommended image size: 1280 x 720px</Text>
          <Text className='CreateBannerForm_helpText'>Website recommended image size: 1920 x 540px</Text>
          <Text className='CreateBannerForm_helpText'>Maximum file size: 10MB</Text>
          <Text className='CreateBannerForm_helpText'>Supported image files: JPEG, PNG</Text>
        </Flex>

        <Title level={4}>Banner info</Title>
        <Form.Item name={['bannerName']} rules={[{ required: true }]} className='CreateBannerForm_bannerName'>
          <Input size="large" required placeholder='Banner name'/>
        </Form.Item>
        <Paragraph className='CreateBannerForm_bannerNameBottomText '>Only visible to admin.</Paragraph>
        <Form.Item name={['bannerURL']} rules={[{ required: true }]} className='CreateBannerForm_bannerURL'>
          <Input size="large" required placeholder='Banner URL'/>
        </Form.Item>
        <Paragraph className='CreateBannerForm_bannerURLBottomText'>Set the URL users will visit when they tap the banner. </Paragraph>

        <Title level={4}>Date of publication</Title>
          <Flex justify='space-between'>
            <Form.Item name={['startDate']} rules={[{ required: true }]} className='CreateBannerForm_startDate'>
              <DatePicker size='large' placeholder='Start date' format={'DD/MM/YYYY'} style={{width: '100%'}}/>
            </Form.Item>
            <Form.Item name={['startTime']} rules={[{ required: true }]}>
              <TimePicker size='large' placeholder='Start time' format={'HH:mm'} />
            </Form.Item>
          </Flex>
        {!showEnd && <LinkButton className='CreateBannerForm_endDateButton' title='+ End date & time' onClick={() => setShowEnd(true)}/>}
        {showEnd &&
          <Flex justify='space-between'>
            <Form.Item name={['endDate']} rules={[{ required: true }]} className='CreateBannerForm_endDate'>
               <DatePicker size='large' placeholder='End date' format={'DD/MM/YYYY'} style={{width: '100%'}}/>
            </Form.Item>
            <Form.Item name={['endTime']} rules={[{ required: true }]}>
               <TimePicker size='large' placeholder='End time' format={'HH:mm'} />
            </Form.Item>
          </Flex>}
        
        <Title level={4}>Audience</Title>
        <Paragraph className='CreateBannerForm_helpText'>Set who can view your banner by choosing the visibility settings.</Paragraph>

        <Alert
          message="Understanding Audience Rules"
          description={
            <>
              Our system currently supports only fixed rules (dynamic rules are in development). Users are included if they match at least one of your audience rules—<strong>rules operate on an OR basis, not AND.</strong>
            </>
          }
          type="warning"
          showIcon
          closable
          rootClassName='CreateBannerForm_alert'
         />

        <Form.Item name={['audience']} rules={[{ required: true }]} className='CreateBannerForm_audience'>
            <RadioButton 
              buttons={[{ value: 'allUsers', title: 'All users'}, { value: 'restricted', title: 'Restricted'}]}
              callBack={(value) => form.setFieldsValue({ audience: value})}
            />
        </Form.Item>
        <Flex justify='space-between' align='center' className='CreateBannerForm_info '>
          <Text>{`${usersCount} users can see this banner`}</Text>
          <TextButton className='CreateBannerForm_seeAll' title='See all' onClick={() => console.log('"See all" clicked')}/>
        </Flex>
    </Form>
  )
}
