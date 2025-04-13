import React from 'react';
import { Button } from 'antd';

type Props = {
  title: string,
  onClick: () => void,
  className?: string,
}

export const TextButton: React.FC<Props> = ({ title, onClick, className }) => 
    <Button type='text' onClick={onClick} className={className}>{title}</Button>
