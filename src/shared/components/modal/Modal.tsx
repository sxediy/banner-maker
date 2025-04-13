import React, { ReactNode } from 'react';
import { Modal as AntdModal } from 'antd';
import { FooterTypeA, FooterTypeB } from '../../components';

import './Modal.css'


type Props = {
    width?: string,
    minWidth?: string,
    maxWidth?: string,
    isModalVisible: boolean,
    setIsModalVisible: (value: boolean) => void,
    modalTitle: string,
    footerType: 'A' | 'B',
    footerData: { footerTitle: string, footerHandle: () => void, className? : string }[],
    children?: ReactNode,
}

export const Modal: React.FC<Props>  = ({
    width = '90%',
    minWidth = '360px',
    maxWidth = '900px',
    isModalVisible,
    setIsModalVisible,
    modalTitle, 
    footerType,
    footerData,
    children,
  }) => {

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
      <AntdModal
        width={width}
        style={{ minWidth, maxWidth }}
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
