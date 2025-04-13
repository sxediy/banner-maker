import React from 'react';
import {  Flex, Typography } from 'antd';

import {  TextButton }  from '../../../shared/components'

type Props = {
    usersCount: number;
}

export const AudienceInfo: React.FC<Props> = ({ usersCount }) => 
  <Flex justify='space-between' align='center' className='CreateBannerForm_info '>
    <Typography.Text>{`${usersCount} users can see this banner`}</Typography.Text>
    <TextButton className='CreateBannerForm_seeAll' title='See all' onClick={() => console.log('"See all" clicked')}/>
  </Flex>