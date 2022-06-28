import React from 'react'
import { Icon } from '@aws-amplify/ui-react';
import {MenuOutlined, LinkedinFilled, MailFilled, GithubFilled, FileDoneOutlined, BookFilled, VideoCameraFilled, LaptopOutlined} from '@ant-design/icons';

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
export const WorkIcon = () => {
    return <Icon arialabel='graduate' as={FileDoneOutlined} />
}
export const SchoolIcon = () => {
    return <Icon arialabel="school" as={BookFilled} />
}
export const VideoIcon = () => {
    return <Icon arialabel="school" as={VideoCameraFilled} />
}
export const LaptopIcon = () => {
    return <Icon arialabel="school" as={LaptopOutlined} />
}

function Icons() {
  return (
    <div>Icons</div>
  )
}

export default Icons