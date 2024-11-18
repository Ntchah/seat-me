'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faKey, faUser, faPhone, faUserTie } from '@fortawesome/free-solid-svg-icons';
import userRegister from '@/libs/userRegister';

export default function Register() {
  const router = useRouter();

  // Form State
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [tel, setTel] = useState<string>('');
  const [role, setRole] = useState<string>('user'); // Default role
  const [password, setPassword] = useState<string>('');
  const [errorMessage, setErrorMessage] = useState<string>('');
  const [serverMessage, setServerMessage] = useState<string>('');

  // Form Submission Handler
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setErrorMessage('');
    setServerMessage('');

    // Form validation
    if (!name || !email || !tel || !password) {
      setErrorMessage('All fields are required.');
      return;
    }

    try {
      const createdAt = new Date().toISOString();
      await userRegister(name, email, tel, role, password, createdAt);
      router.push('/login');
    } catch (error: any) {
      setErrorMessage(error.message || 'Registration failed. Please try again.');
    }
  };

  return (
    <div className="flex min-h-screen">
      {/* Left Section: Image */}
      <div className="w-2/3 relative">
        <img
          src="/img/banner.jpg"
          alt="banner"
          className="h-full w-full object-cover"
        />
      </div>

      {/* Right Section: Registration Form */}
      <div className="w-1/3 bg-black text-white flex items-center justify-center">
        <div className="w-full max-w-md px-6">
          <h1 className="text-2xl font-medium mb-4">Register</h1>
          <p className="text-sm mb-8">
            Already have an account?{' '}
            <a href="/login" className="text-md text-yellow-500 font-semibold hover:underline">
              Sign in here!
            </a>
          </p>
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name Field */}
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-white mb-1">
                Name
              </label>
              <div className="flex items-center gap-3">
                <FontAwesomeIcon icon={faUser} className="text-yellow-500" size="lg" />
                <input
                  type="text"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  placeholder="Enter your name"
                  className="w-full bg-black text-white border-0 border-b-2 border-gray-300 focus:border-yellow-500 placeholder:text-sm placeholder-gray-500 focus:ring-0 focus-visible:outline-none"
                />
              </div>
            </div>

            {/* Email Field */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-white mb-1">
                Email
              </label>
              <div className="flex items-center gap-3">
                <FontAwesomeIcon icon={faEnvelope} className="text-yellow-500" size="lg" />
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  placeholder="Enter your email address"
                  className="w-full bg-black text-white border-0 border-b-2 border-gray-300 focus:border-yellow-500 placeholder:text-sm placeholder-gray-500 focus:ring-0 focus-visible:outline-none"
                />
              </div>
            </div>

            {/* Phone Number Field */}
            <div>
              <label htmlFor="tel" className="block text-sm font-medium text-white mb-1">
                Phone Number
              </label>
              <div className="flex items-center gap-3">
                <FontAwesomeIcon icon={faPhone} className="text-yellow-500" size="lg" />
                <input
                  type="tel"
                  id="tel"
                  value={tel}
                  onChange={(e) => setTel(e.target.value)}
                  required
                  placeholder="Enter your phone number"
                  className="w-full bg-black text-white border-0 border-b-2 border-gray-300 focus:border-yellow-500 placeholder:text-sm placeholder-gray-500 focus:ring-0 focus-visible:outline-none"
                />
              </div>
            </div>

            {/* Role Field */}
            <div>
              <label htmlFor="role" className="block text-sm font-medium text-white mb-1">
                Role
              </label>
              <div className="flex items-center gap-3">
                <FontAwesomeIcon icon={faUserTie} className="text-yellow-500" size="lg" />
                <select
                  id="role"
                  value={role}
                  onChange={(e) => setRole(e.target.value)}
                  required
                  className="w-full bg-black text-white border-0 border-b-2 border-gray-300 focus:border-yellow-500 placeholder:text-sm placeholder-gray-500 focus:ring-0 focus-visible:outline-none"
                >
                  <option value="user">User</option>
                  <option value="admin">Admin</option>
                </select>
              </div>
            </div>

            {/* Password Field */}
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-white mb-1">
                Password
              </label>
              <div className="flex items-center gap-3">
                <FontAwesomeIcon icon={faKey} className="text-yellow-500" size="lg" />
                <input
                  type="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  placeholder="Enter your password"
                  className="w-full bg-black text-white border-0 border-b-2 border-gray-300 focus:border-yellow-500 placeholder:text-sm placeholder-gray-500 focus:ring-0 focus-visible:outline-none"
                />
              </div>
            </div>

            {/* Error or Success Message */}
            {errorMessage && <p className="text-red-500 text-center">{errorMessage}</p>}
            {serverMessage && <p className="text-green-500 text-center">{serverMessage}</p>}

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full py-2 bg-yellow-500 text-black font-bold rounded-md hover:bg-yellow-600"
            >
              Register
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
