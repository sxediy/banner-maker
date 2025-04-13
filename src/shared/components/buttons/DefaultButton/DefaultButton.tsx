import React from 'react';
import { Button } from 'antd';

type Props = {
    title: string,
    onClick: () => void,
    className?: string,
}

export const DefaultButton: React.FC<Props>= ({ title, onClick, className }) => 
    <Button size='large' type='default' onClick={onClick} className={className}>{title}</Button>
