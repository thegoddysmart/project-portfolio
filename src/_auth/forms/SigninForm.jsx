import { useState } from 'react';
import './Signin.css'; 
import { MdOutlineMail } from "react-icons/md";
import { IoLockClosed } from "react-icons/io5";

const SigninForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here
  };

  return (
    <div className="container-form">
      <div className="form-box">
        <h1 id="title">Sign In</h1>

        <form onSubmit={handleSubmit}>
          <div className="input-group">

            <div className="input-field">
              <label htmlFor="email"></label>
              <MdOutlineMail className='icon' />
              <input
                type="email"
                placeholder="Email"
                id="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div className="input-field">
              <label htmlFor="password"></label>
              <IoLockClosed className='icon' />
              <input
                type="password"
                placeholder="Password"
                id="password"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            <p>Don't have an account? <a href="/signup">Sign Up</a></p>
          </div>

          {error && <p className="error">{error}</p>}

          <div className="btn-field">
            <a href="/homepage">
              <button className="btnn" type="submit">Sign In</button>
            </a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SigninForm;
