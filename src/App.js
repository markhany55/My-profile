import React from 'react'
import NavBar from './NavBar Component/NavBar'
import { Route, Routes } from 'react-router';
import AllComponent from './All Component/AllComponent';
import Contact from './Contact Component/Contact';
function App() {
  return (
      <div>
      <NavBar/>
      <Routes>

      <Route path ="/" element={<AllComponent/>}/>
      <Route path="contact" element={<Contact/>}/>
      </Routes>
      </div>
  );
}

export default App;
