import React from 'react'
import { EmailIcon, GithubIcon, LinkedInIcon } from '../components/Icons';
import '../styles/Home.css';

function Home() {
  return (
    <div className='home'>
      <div className='about'>
        <h2>
          Tim McCann
        </h2>
        <div className='prompt'>
          <p>
          Software Engineer/Developer
          </p>
        <LinkedInIcon />
        <GithubIcon />
        <EmailIcon />
        </div>
      </div>
      <div className='skills'>
        <h1>Skills</h1>
        <ol className='list'>
          <li className='item'>
            <h2>Frontend</h2>
            <span>Javascript, ReactJs, React Native, Npm, Material UI, Yarn, CSS, HTML, Typescript</span>
          </li>
          <li className='item'>
            <h2>Backend</h2>
            <span>Java, Python, C#, Kotlin, NodeJs, RestApi, MySQL, AWS s3</span>
          </li>
          <li className='item'>
            <h2>Other</h2>
            <span>Docker, Kubernetes, AWS Apmlify, Jenkins, CI/CD</span>
          </li>
          <li className='item'>
            <h2>Learning</h2>
            <span>Cloud deployment, Mobile app development, API creation</span>
          </li>
        </ol>
      </div>
    </div>
  )
}

export default Home