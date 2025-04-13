import React from 'react';
import { Alert } from 'antd';

export const AudienceAlert: React.FC = () => 
  <Alert
    message="Understanding Audience Rules"
    description={
    <>
        Our system currently supports only fixed rules (dynamic rules are in development). Users are included if they match at least one of your audience rules—<strong>rules operate on an OR basis, not AND.</strong>
    </>
    }
    type="warning"
    showIcon
    closable
    rootClassName='CreateBannerForm_alert'
  />