import React from 'react'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import {WorkIcon, SchoolIcon, VideoIcon, LaptopIcon} from '../components/Icons';


function Experience() {
  return (
    <div className='experience'>
        <VerticalTimeline lineColor='blue'>
            <VerticalTimelineElement 
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
            contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
            date="2020 - present"
            iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff', paddingLeft: '24px', paddingTop:'15px' }}
            icon={<LaptopIcon />} >
                <h3 className="vertical-timeline-element-title">Software Engineer, Nokia</h3>
                    <p>• Helping create a developer portal for internal use and developers in Nokia to access products documentation, sandbox, and other tools in a centralized area. Used ReactJS frontend, Django/Python backend, and Docker, Helm, and Kubernetes as pipeline </p>
                    <p>• Created the front end of a demo platform application to be enabled for salespeople to showcase Nokia products to customers. Used ReactJS, Material-UI, and REST API. Functions included data visualization, interactive alerts, interactive maps, and calling data from a Node back end</p>
                    <p>• Work with the rest of the team using Jira for task management, and Gitlab for version control and team projects.</p>
                    <p>• Add finished demos and applications to our AWS-based platform to be easily used by salespeople worldwide, 24 hours a day. </p>
                    <p>• When not working on applications, continuously learning new skills on LinkedIn Learning and other learning sites to expand my skills on software front end and back end web and mobile application development</p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--education"
                date="September 2020"
                iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff', paddingLeft: '24px', paddingTop:'15px' }}
                icon={<SchoolIcon />}
            >
                <h3 className="vertical-timeline-element-title">Postbaccalaureate Certificate in Programming and Software Development</h3>
                <h4 className="vertical-timeline-element-subtitle">Purdue Global</h4>
            </VerticalTimelineElement>
            <VerticalTimelineElement 
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
            contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
            date="2018-2020"
            iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff', paddingLeft: '24px', paddingTop:'15px' }}
            icon={<VideoIcon />} >
                <h3 className="vertical-timeline-element-title">Content Media Lead, Nokia</h3>
                <p>• Designed and delivered video content for various purposes including sales training, product launches & updates, promotional material, and other needs </p>
                <p>• Outlined an online editorial calendar for planned content and set up a request ticket system for ad hoc requests</p>
                <p>• Managed, trained and mentored teams of 3-5 interns on equipment use, video production, and align them to the editorial calendar</p>
                <p>• Ran the video studio including purchasing and care for various cameras, lights, microphones, and other equipment</p>
            </VerticalTimelineElement>
            <VerticalTimelineElement 
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
            contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
            date="2017-2017"
            iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff', paddingLeft: '24px', paddingTop:'15px' }}
            icon={<WorkIcon />} >
                <h3 className="vertical-timeline-element-title">IT Support, Valley View School District</h3>
                <p>• Prepare distribution of Chromebooks, such as labeling, recording and moving inventory</p>
                <p>• Assist in problem solving and troubleshooting of students Chromebooks during the school year</p>
            </VerticalTimelineElement>
            <VerticalTimelineElement 
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
            contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
            date="2016-2017"
            iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff', paddingLeft: '24px', paddingTop:'15px' }}
            icon={<WorkIcon />} >
                <h3 className="vertical-timeline-element-title">IT Support, Plainfield School District</h3>
                <p>• Help remove and replace networking equipment throughout schools</p>
                <p>• Aid staff in troubleshooting computers, docking stations, and projectors in classrooms</p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--education"
                date="May 2016"
                iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff', paddingLeft: '24px', paddingTop:'15px' }}
                icon={<SchoolIcon />}
            >
                <h3 className="vertical-timeline-element-title">Bachelors in Mass Communications, Radio and Television Broadcasting</h3>
                <h4 className="vertical-timeline-element-subtitle">Lewis University</h4>
            </VerticalTimelineElement>
        </VerticalTimeline>
    </div>
  )
}

export default Experience