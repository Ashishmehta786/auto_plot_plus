import { signIn } from 'next-auth/react';
import Link from 'next/link';
import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    if (!email || !password) {
      toast.error('Please enter both email and password');
      return;
    }

    // Handle login logic here
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 flex items-center justify-center">
      <ToastContainer />
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
        <form>
          <div className="mb-4">
            <label className="block text-gray-700">Email</label>
            <input
              type="email"
              className="w-full p-2 border border-gray-300 rounded mt-1"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700">Password</label>
            <input
              type="password"
              className="w-full p-2 border border-gray-300 rounded mt-1"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button
            type="button"
            className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
            onClick={handleLogin}
          >
            Login
          </button>
        </form>
        <button
          onClick={() => signIn('google')}
          className="w-full bg-red-500 text-white p-2 rounded mt-4 hover:bg-red-600"
        >
          Login with Google
        </button>
        <button
          onClick={() => signIn('facebook')}
          className="w-full bg-blue-700 text-white p-2 rounded mt-4 hover:bg-blue-800"
        >
          Login with Facebook
        </button>
        <p className="mt-6 text-center">
          Don't have an account? <Link href="/signup" legacyBehavior><a className="text-blue-500">Sign up</a></Link>
        </p>
      </div>
    </div>
  );
};

export default Login;