import React from 'react';
import { Button } from 'antd';
import { CaretRightFilled } from '@ant-design/icons';

type Props = {
    title: string,
    onClick: () => void,
    className?: string,
}

export const PrimaryButton: React.FC<Props>= ({ title, onClick, className }) => 
    <Button size='large' type='primary' onClick={onClick} className={className}>
      <CaretRightFilled /> 
      {title}
    </Button>
