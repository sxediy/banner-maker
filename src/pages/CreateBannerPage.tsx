import React, { useState } from 'react';
import { Flex } from 'antd';
import { Uploader, Modal }  from '../shared/components'
import { CreateBannerForm } from './form/CreateBannerForm'
import { useForm } from 'antd/es/form/Form';

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

  const onSetLive = () => console.log('Set live')
  
  return (
    <>
    <Modal 
      isModalVisible={isModalVisible}
      openButton={{ openButtonType: 'primary', openButtonTitle: 'Click'}} 
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
