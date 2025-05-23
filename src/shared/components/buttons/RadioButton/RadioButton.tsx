import React from 'react';
import { Radio, Row, Col } from 'antd';

type Props = {
  value: string,
  buttons: {
    value: string, 
    title: string,
  }[],
  callBack?: (value: string) => void,
}

export const RadioButton: React.FC<Props> = ({ value, buttons, callBack }) =>  {

  const handleChange = (e) => {
    callBack && callBack(e.target.value)
  }
  
  return (
    <Radio.Group value={value} onChange={handleChange} style={{ padding: '16px 0'}}>
    <Row>
      {buttons.map(({ value, title }) => 
        <Col span={12}>
        <Radio value={value}>{title}</Radio>
      </Col>
      )}
    </Row>
  </Radio.Group>

  )
}
 
