import React from 'react';
import { Form } from 'antd';
import { FormInstance } from 'antd/es/form/Form';

import {  RadioButton }  from '../../../shared/components'


type Props = {
  form: FormInstance<any>,
}

export const AudienceSwitcher: React.FC<Props> = ({ form }) => 
  <Form.Item name={['audience']} rules={[{ required: true }]} className='CreateBannerForm_audience'>
    <RadioButton
        value={form.getFieldValue('audience')}
        buttons={[{ value: 'allUsers', title: 'All users'}, { value: 'restricted', title: 'Restricted'}]}
        callBack={(value) => form.setFieldsValue({ audience: value})}
    />
  </Form.Item>
  
  