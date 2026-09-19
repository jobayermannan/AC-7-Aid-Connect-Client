import {  useState, ChangeEvent } from 'react';
import { TemplateForm } from './TemplateForm';
import { apiClient } from '@/redux/api/axiosInstance';
import { AxiosError } from 'axios';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from '@/redux/hook';
import { setCredentials } from '@/redux/features/authSlice';
import { toast } from 'react-toastify';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const formFields = [
    { id: 'email', label: 'Email Address', placeholder: 'yourname@example.com', type: 'email', value: email, onChange: (e: ChangeEvent<HTMLInputElement>) => setEmail(e.target.value) },
    { id: 'password', label: 'Password', placeholder: '••••••••', type: 'password', value: password, onChange: (e: ChangeEvent<HTMLInputElement>) => setPassword(e.target.value) }
  ];

  const buttonText = 'Sign In';
  const registerLink = '/register';

  const handleSubmit = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    setError('');

    try {
      const response = await apiClient.post('/login', { email, password });
      if (response.data.success) {
        dispatch(setCredentials({ token: response.data.token, user: { email } }));
        toast.success('Welcome back!');
        setTimeout(() => navigate('/admin'), 1000);
      } else {
        const message = response.data.message || 'Login failed. Please check your credentials and try again.';
        setError(message);
        toast.error(message);
      }
    } catch (err: unknown) {
      console.error('Login error:', err);
      const message = err instanceof AxiosError
        ? err.response?.data?.message
        : 'Login failed. Please check your credentials and try again.';
      setError(message || 'Login failed. Please check your credentials and try again.');
      toast.error(message || 'Login failed. Please check your credentials and try again.');
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