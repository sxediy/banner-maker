import React from 'react';
import { Button } from 'antd';

type Props = {
    title: string,
    onClick: () => void,
    className?: string,
}

export const LinkButton: React.FC<Props> = ({ title, onClick, className }) => 
    <Button size='large' type='link' onClick={onClick} className={className}>{title}</Button>
