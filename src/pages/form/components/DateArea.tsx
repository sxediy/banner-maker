import React, { useState } from 'react';
import { Form,  Flex, DatePicker, TimePicker } from 'antd';

import {  LinkButton }  from '../../../shared/components'

export const DateArea: React.FC = () =>  {
  const [showEnd, setShowEnd] = useState(false);
  
  return (
    <>
      <Flex gap="middle" justify='space-between'>
          <Form.Item name={['startDate']} rules={[{ required: true }]} className='CreateBannerForm_startDate'>
          <DatePicker size='large' placeholder='Start date' format={'DD/MM/YYYY'} style={{width: '100%'}}/>
        </Form.Item>
        <Form.Item name={['startTime']} rules={[{ required: true }]} className='CreateBannerForm_startTime'>
          <TimePicker size='large' placeholder='Start time' format={'HH:mm'} style={{width: '100%'}}/>
        </Form.Item>
      </Flex>
      {!showEnd && <LinkButton className='CreateBannerForm_endDateButton' title='+ End date & time' onClick={() => setShowEnd(true)}/>}
      {showEnd &&
        <Flex gap="middle" justify='space-between'>
          <Form.Item name={['endDate']} rules={[{ required: true }]} className='CreateBannerForm_endDate'>
              <DatePicker size='large' placeholder='End date' format={'DD/MM/YYYY'} style={{width: '100%'}}/>
          </Form.Item>
          <Form.Item name={['endTime']} rules={[{ required: true }]} className='CreateBannerForm_endTime'>
              <TimePicker size='large' placeholder='End time' format={'HH:mm'} style={{width: '100%'}}/>
          </Form.Item>
        </Flex>
      }
    </>
  )
}