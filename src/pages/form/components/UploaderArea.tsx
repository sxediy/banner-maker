import React from 'react';
import { Form,  Flex } from 'antd';
import { FormInstance } from 'antd/es/form/Form';

import {  Uploader }  from '../../../shared/components'


type Props = {
  form: FormInstance<any>,
}

export const UploaderArea: React.FC<Props> = ({ form }) => 
  <Flex gap="middle" wrap={false}>
    <Form.Item name={['mobileUploader']} rules={[{ required: true }]} className='CreateBannerForm_mobileUploader'>
      <Uploader text='For mobile app' callBack={(value) => form.setFieldsValue({ mobileUploader: value})}/>
    </Form.Item>
    <Form.Item name={['webUploader']} rules={[{ required: true }]} className='CreateBannerForm_webUploader'>
      <Uploader text='For website' callBack={(value) => form.setFieldsValue({ webUploader: value})}/>
    </Form.Item> 
</Flex>