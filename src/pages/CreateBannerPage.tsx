import React, { useState, useEffect } from 'react';
import { Modal, PrimaryButton }  from '../shared/components'
import { CreateBannerForm } from './form/CreateBannerForm'
import { useForm } from 'antd/es/form/Form';
import dayjs from 'dayjs';

import './CreateBannerPage.css'

const CreateBannerPage = () => {
    const [form] = useForm();
    const [isModalVisible, setIsModalVisible] = useState(false);
  
  
  const onCancel = () => {
    setIsModalVisible(false)
    console.log('Cancel filling form')
  }

  const onSaveDraft = () => {
    const values = form.getFieldsValue();
    console.log('values', values)
    // send values to server or locally
    // ... await answer (if you sent to server)
    console.log('Draft was saved')
    // if saved then close modal
    setIsModalVisible(false)
  }

  const onSetLive = () => {
    const values = form.getFieldsValue();
    console.log('values', values)
    console.log('Set live clicked')
  }

  useEffect(() => {
    // await call data from server ..
    const initialFormData = {
      mobileUploader: '',
      webUploader: '',
      bannerName: 'Music fest',
      bannerURL: '',
      startDate: dayjs('2024-02-17T22:03:00.000Z'),
      startTime: dayjs('2024-02-17T22:03:00.000Z'),
      audience: 'allUsers',
    }
    
    // set initial data in form
    form.setFieldsValue(initialFormData)
  }, [])

  return (
    <>
    <PrimaryButton title='Click' onClick={() => setIsModalVisible(true)}/>
    <Modal
      isModalVisible={isModalVisible}
      modalTitle='Create banner'
      footerType='A'
      footerData={[
        {footerTitle: 'Cancel', footerHandle: onCancel, className: 'CreateBannerPage_cancel' },
        {footerTitle: 'Save as draft', footerHandle: onSaveDraft, className: 'CreateBannerPage_saveDraft' },
        {footerTitle: 'Set live', footerHandle: onSetLive, className: 'CreateBannerPage_setLive' },
      ]}
      setIsModalVisible={setIsModalVisible}
    >
      <CreateBannerForm usersCount={1237} form={form}/>
    </Modal>
    </>
  )
}

export default CreateBannerPage
