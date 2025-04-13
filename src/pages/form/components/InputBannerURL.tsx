import React from 'react';
import {  Form, Input } from 'antd';

export const InputBannerURL: React.FC = () => 
  <Form.Item name={['bannerURL']} rules={[{ required: true }]} className='CreateBannerForm_bannerURL'>
    <Input size="large" required placeholder='Banner URL'/>
  </Form.Item>