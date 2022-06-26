import React from 'react'
import { Icon } from '@aws-amplify/ui-react';
import {MenuOutlined, LinkedinFilled, MailFilled, GithubFilled} from '@ant-design/icons';

export const MenuIcon = () => {
    return <Icon ariaLabel="Menu" as={MenuOutlined} />
  }
export const LinkedInIcon = () => {
    return <Icon ariaLabel='linkedin' as={LinkedinFilled} />
    }
export const EmailIcon = () => {
    return <Icon ariaLabel='email' as={MailFilled} />
    }
export const GithubIcon = () => {
    return <Icon ariaLabel='github' as={GithubFilled} />
    }

function Icons() {
  return (
    <div>Icons</div>
  )
}

export default Icons