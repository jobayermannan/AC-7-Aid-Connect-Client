import  { SetStateAction, useState } from 'react';
import { TemplateForm } from './TemplateForm';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const formFields = [
    { id: 'email', label: 'Email Address', placeholder: 'yourname@example.com', type: 'email', value: email, onChange: (e: { target: { value: SetStateAction<string>; }; }) => setEmail(e.target.value) },
    { id: 'password', label: 'Password', placeholder: '••••••••', type: 'password', value: password, onChange: (e: { target: { value: SetStateAction<string>; }; }) => setPassword(e.target.value) }
  ];

  const buttonText = 'Sign In';
  const registerLink = '/register';

  const handleSubmit = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    setError('');

    // Log the credentials being sent
    console.log('Sending credentials:', { email, password });

    try {
      const response = await axios.post('https://aid-connect-server-rj8hofw7t-jobayermannans-projects.vercel.app/api/v1/login', { email, password });
      console.log('Response:', response.data);
      if (response.data.success) {
        localStorage.setItem('token', response.data.token);
        navigate('/admin');
      } else {
        setError(response.data.message);
      }
    } catch (err) {
      console.error('Login error:', err);
      setError('Login failed. Please check your credentials and try again.');
    }
  };

  return (
    <div className="flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8 min-h-screen">
      <div className="w-full max-w-md mt-6 sm:mt-10 sm:pt-12">
        {error && <div className="text-red-500 mb-4">{error}</div>}
        <TemplateForm fields={formFields} buttonText={buttonText} registerLink={registerLink} onSubmit={handleSubmit} />
      </div>
    </div>
  );
};

export default Login;