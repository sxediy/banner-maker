import React, { useState } from 'react';
import { LoadingOutlined, PlusOutlined } from '@ant-design/icons';
import { message, Upload } from 'antd';
import type { GetProp, UploadProps } from 'antd';

import './Uploader.css'


type FileType = Parameters<GetProp<UploadProps, 'beforeUpload'>>[0];

const getBase64 = (img: FileType, callback: (url: string) => void) => {
  const reader = new FileReader();
  reader.addEventListener('load', () => callback(reader.result as string));
  reader.readAsDataURL(img);
};

const beforeUpload = (file: FileType) => {
  console.log('file type', file)
  const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
  if (!isJpgOrPng) {
    message.error('You can only upload JPG/PNG file!');
    console.log('You can only upload JPG/PNG file!')
  }
  const isLt10M = file.size / 1024 / 1024 < 10;
  if (!isLt10M) {
    message.error('Image must smaller than 10MB!');
    console.log('Image must smaller than 10MB!')
  }
  return isJpgOrPng && isLt10M;
};

type Props = {
    text: string;
    callBack?: (value: string) => void,
}

export const Uploader: React.FC<Props> = ({ text, callBack }) => {
  const [loading, setLoading] = useState(false);
  const [imageUrl, setImageUrl] = useState<string>();

  const handleChange: UploadProps['onChange'] = (info) => {

    if (info.file.status === 'uploading')  setLoading(true);

    if (info.file.status === 'error') console.log('ОШИБКА ПРИ ЗАГРУЗКЕ ФАЙЛА')

    if (info.file.status === 'done' || info.file.status === 'error') {
      // Get this url from response in real world.
      getBase64(info.file.originFileObj as FileType, (url) => {
        setLoading(false);
        setImageUrl(url);
        callBack && callBack(url)
      });
    }
  };

  const uploadButton = (
    <button type="button" className='Uploader_button'>
      {loading ? <LoadingOutlined /> : <PlusOutlined style={{ color: 'gray' }}/>}
      <div className='Uploader_text'>{text}</div>
    </button>
  );

  return (
      <Upload
        name="avatar"
        listType="picture-card"
        className="avatar-uploader"
        showUploadList={false}
        action="https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload"
        beforeUpload={beforeUpload}
        onChange={handleChange}
      >
        {imageUrl ? <img src={imageUrl} alt="avatar" style={{ width: '100%' }} /> : uploadButton}
      </Upload>
  );
};
