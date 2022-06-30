import React from 'react'
import { Icon } from '@aws-amplify/ui-react';
import {MenuOutlined, LinkedinFilled, MailFilled, GithubFilled, FileDoneOutlined, BookFilled, VideoCameraFilled, LaptopOutlined} from '@ant-design/icons';

const linkedin_url = 'https://www.linkedin.com/in/tim-mccann-13556610b/'
const github_url = 'https://github.com/Tim-McCann'

export const MenuIcon = () => {
    return <Icon ariaLabel="Menu" as={MenuOutlined} />
  }
export const LinkedInIcon = () => {
    return <Icon ariaLabel='linkedin' as={LinkedinFilled} onClick={() => window.open(linkedin_url, '_blank')}/>
    }
export const EmailIcon = () => {
    return <Icon ariaLabel='email' as={MailFilled} />
    }
export const GithubIcon = () => {
    return <Icon ariaLabel='github' as={GithubFilled} onClick={() => window.open(github_url, '_blank')}/>
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