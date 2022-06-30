import React from 'react';
import { Amplify,  } from 'aws-amplify';
import { Authenticator,  } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
// import { createNote as createNoteMutation, deleteNote as deleteNoteMutation } from './graphql/mutations';
// import { listNotes } from './graphql/queries';
import { BrowserRouter as Router, Routes, Route, } from 'react-router-dom';
import awsExports from './aws-exports';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Experience from './pages/Experience';
import Contact from './pages/Contact';
import Navbar from './components/Navbar';
import ProjectDisplay from './pages/ProjectDisplay';

Amplify.configure(awsExports);

// const initialFormState = { name: '', description: '' }




export default function App() {
  
  
  return (
    <Authenticator>
      {({ signOut, user }) => (
        
        <Router>
          <Navbar />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/projects' element={<Projects />} />
            <Route path="/project/:id" element={<ProjectDisplay />} />
            <Route path='/experience' element={<Experience />} />
            {/* <Route path='/contact' element={<Contact />} /> */}
          </Routes>
        </Router>
      )}
    </Authenticator>
  );
}