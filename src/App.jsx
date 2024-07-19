import './App.css';

import { Routes, Route } from 'react-router-dom';
import SigninForm from './_auth/forms/SigninForm';
import SignupForm from './_auth/forms/SignupForm';
import { Home } from './_root/pages';

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<SigninForm />} />
        <Route path="/signup" element={<SignupForm />} />
      </Routes>

    </>
  )
}

export default App
