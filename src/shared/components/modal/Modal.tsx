import React, { ReactNode } from 'react';
import { Modal as AntdModal } from 'antd';
import { PrimaryButton, LinkButton, TextButton, FooterTypeA, FooterTypeB } from '../../components';

import './Modal.css'


type Props = {
    isModalVisible: boolean,
    setIsModalVisible: (value: boolean) => void,
    openButton: { openButtonType: 'primary' | 'link' | 'text', openButtonTitle: string},
    modalTitle: string,
    footerType: 'A' | 'B',
    footerData: { footerTitle: string, footerHandle: () => void, className? : string }[],
    children?: ReactNode,
}

export const Modal: React.FC<Props>  = ({ 
    isModalVisible,
    setIsModalVisible,
    openButton: {openButtonType, openButtonTitle}, 
    modalTitle, 
    footerType,
    footerData,
    children,
  }) => {

  const OpenButtonComponent = (props) =>
    <div> 
     {openButtonType === 'primary' && <PrimaryButton  {...props} />}
     {openButtonType === 'link' && <LinkButton  {...props} />}
     {openButtonType === 'text' && <TextButton  {...props} />}
    </div>

  const FooterComponent = (props) =>
    <div> 
     {footerType === 'A' && <FooterTypeA  {...props} />}
     {footerType === 'B' && <FooterTypeB {...props} />}
    </div>

  const titles = footerData.map(data =>  data.footerTitle)
  const handles = footerData.map(data => data.footerHandle)
  const classNames = footerData.map(data => data.className)

  return (
    <>
     <OpenButtonComponent title={openButtonTitle} onClick={() => setIsModalVisible(true)}/>
      <AntdModal
        className='Modal'
        title={modalTitle}
        visible={isModalVisible}
        onCancel={() => setIsModalVisible(false)}
        footer={
           <FooterComponent titles={titles} handles={handles} classNames={classNames}/>
           
        }
      >
        {children}
      </AntdModal>
    </>
  );
};
