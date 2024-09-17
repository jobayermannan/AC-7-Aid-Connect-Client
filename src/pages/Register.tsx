import { SetStateAction, useState } from 'react';
import { TemplateForm } from './TemplateForm';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const formFields = [
    { id: 'name', label: 'User Name', placeholder: 'user name', type: 'text', value: name, onChange: (e: { target: { value: SetStateAction<string>; }; }) => setName(e.target.value) },
    { id: 'email', label: 'Email Address', placeholder: 'yourname@example.com', type: 'email', value: email, onChange: (e: { target: { value: SetStateAction<string>; }; }) => setEmail(e.target.value) },
    { id: 'password', label: 'Password', placeholder: '••••••••', type: 'password', value: password, onChange: (e: { target: { value: SetStateAction<string>; }; }) => setPassword(e.target.value) }
  ];

  const buttonText = 'Sign Up';
  const loginLink = '/login';

  const handleSubmit = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    setError('');

    try {
      const response = await axios.post('https://aid-connect-server-rj8hofw7t-jobayermannans-projects.vercel.app/api/v1/register', { name, email, password });
      if (response.data.success) {
        navigate('/login');
        alert('Registration successful! Please log in.');
      } else {
        setError(response.data.message);
      }
    } catch (err) {
      console.error('Registration error:', err);
      setError('Registration failed. Please try again.');
    }
  };

  return (
    <div className="flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8 min-h-screen">
      <div className="w-full max-w-md mt-6 sm:mt-10 sm:pt-12">
        {error && <div className="text-red-500 mb-4">{error}</div>}
        <TemplateForm fields={formFields} buttonText={buttonText} loginLink={loginLink} onSubmit={handleSubmit} />
      </div>
    </div>
  );
};

export default Register;