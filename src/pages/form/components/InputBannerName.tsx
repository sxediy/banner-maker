import React from 'react';
import {  Form, Input } from 'antd';

export const InputBannerName: React.FC = () => 
  <Form.Item name={['bannerName']} rules={[{ required: true }]} className='CreateBannerForm_bannerName'>
    <Input size="large" required placeholder='Banner name'/>
  </Form.Item>