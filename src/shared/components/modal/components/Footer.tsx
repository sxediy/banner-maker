import React from 'react';
import { Flex } from 'antd';
import { PrimaryButton, DefaultButton, TextButton }  from '../../buttons'

import './Footer.css'


type Props = {
    titles: string[],
    handles: (() => void)[],
    classNames: (string | undefined)[]
}

export const FooterTypeA: React.FC<Props> = ({ titles, handles, classNames }) => 
     <Flex justify='space-between' className='FooterTypeA'>
        <TextButton title={titles[0]} onClick={handles[0]} className={classNames[0]}/>
        <Flex gap="small" style={{padding: 0}}>
            <DefaultButton title={titles[1]} onClick={handles[1]} className={classNames[1]}/>
            <PrimaryButton title={titles[2]} onClick={handles[2]} className={classNames[2]}/>
        </Flex>
    </Flex>


export const FooterTypeB: React.FC<Props> = ({ titles, handles, classNames }) =>  
    <>
      <TextButton title={titles[0]} onClick={handles[0]} className={classNames[0]}/>
      <PrimaryButton title={titles[1]} onClick={handles[1]} className={classNames[1]}/>
    </>

