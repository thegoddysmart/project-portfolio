import { useState } from 'react';
import './Signup.css';
import { IoLockClosed, IoLockOpen } from 'react-icons/io5';
import { FaCalendarDays, FaEnvelope, FaUser } from 'react-icons/fa6';

const SignUp = () => {
  const [formData, setFormData] = useState({
    full_name: '',
    last_name: '',
    date_of_birth: '',
    email: '',
    password: '',
    confirm_password: ''
  });

  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here
  };

  return (
    <div className="container-form">
      <div className="form-box">
        <h1 id="title">Create Your Account</h1>

        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <div className="input-field" id="firstNameField">
              <label htmlFor="full_name"></label>
              <FaUser />
              <input
                type="text"
                id="full_name"
                name="full_name"
                placeholder="Full Name"
                value={formData.full_name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="input-field" id="lastNameField">
              <label htmlFor="last_name"></label>
              <FaUser />
              <input
                type="text"
                id="last_name"
                name="last_name"
                placeholder="Last Name"
                value={formData.last_name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="input-field">
              <label htmlFor="date_of_birth"></label>
              <FaCalendarDays />
              <input
                type="date"
                id="date_of_birth"
                name="date_of_birth"
                placeholder="Date of Birth"
                value={formData.date_of_birth}
                onChange={handleChange}
                required
              />
            </div>

            <div className="input-field">
              <FaEnvelope />
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="input-field">
              <IoLockOpen />
              <input
                type="password"
                name="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
                required
              />
            </div>

            <div className="input-field">
              <IoLockClosed />
              <input
                type="password"
                name="confirm_password"
                placeholder="Confirm Password"
                value={formData.confirm_password}
                onChange={handleChange}
                required
              />
            </div>

            <p>Already have an account? <a href="/login">Click Here!</a></p>
          </div>

          <div className="btn-field">
            <button className="btnn" type="submit">Sign Up</button>
          </div>
        </form>

        {message && <p className="success">{message}</p>}
      </div>
    </div>
  );
};

export default SignUp;
