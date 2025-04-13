import React from 'react';
import { Form, Typography } from 'antd';
import { FormInstance } from 'antd/es/form/Form';

import {
  UploaderHelpText,
  UploaderArea,
  InputBannerName,
  InputBannerURL,
  DateArea,
  AudienceAlert,
  AudienceSwitcher,
  AudienceInfo,
} from './components'

import './CreateBannerForm.css'

type Props = {
  usersCount: number,
  form: FormInstance<any>,
}

export const CreateBannerForm: React.FC<Props>= ({ usersCount, form }) => {

  const { Title, Paragraph } = Typography;

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
        <UploaderArea form={form} />
        <UploaderHelpText />

        <Title level={4}>Banner info</Title>
        <InputBannerName />
        <Paragraph className='CreateBannerForm_bannerNameBottomText '>Only visible to admin.</Paragraph>
        <InputBannerURL />
        <Paragraph className='CreateBannerForm_bannerURLBottomText'>Set the URL users will visit when they tap the banner. </Paragraph>

        <Title level={4}>Date of publication</Title>
        <DateArea />
        
        <Title level={4}>Audience</Title>
        <Paragraph className='CreateBannerForm_helpText'>Set who can view your banner by choosing the visibility settings.</Paragraph>
        <AudienceAlert />
        <AudienceSwitcher form={form} />
        <AudienceInfo usersCount={usersCount} />
    </Form>
  )
}
