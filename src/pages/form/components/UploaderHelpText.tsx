import React from 'react';
import {  Flex, Typography } from 'antd';

export const UploaderHelpText: React.FC = () => 
  <Flex wrap vertical>
    <Typography.Text className='CreateBannerForm_helpText'>Mobile recommended image size: 1280 x 720px</Typography.Text>
    <Typography.Text className='CreateBannerForm_helpText'>Website recommended image size: 1920 x 540px</Typography.Text>
    <Typography.Text className='CreateBannerForm_helpText'>Maximum file size: 10MB</Typography.Text>
    <Typography.Text className='CreateBannerForm_helpText'>Supported image files: JPEG, PNG</Typography.Text>
  </Flex>