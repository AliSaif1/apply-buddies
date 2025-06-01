import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const ForgotPasswordPage = () => {
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    try {
      await axios.post('http://localhost:3001/apply-buddies/auth/forgot-password', { email });
      setSuccess(true);
      setTimeout(() => navigate('/verify-otp', { state: { email } }), 2000);
    } catch (err) {
      console.error('Forgot password error:', err);
      setError(err.response?.data?.message || 'Failed to send reset email. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-neutral-50 to-neutral-100 flex flex-col justify-between">
      {/* Header */}
      <header className="py-4 px-4 flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-2">
          <span className="text-xl font-serif font-bold text-primary-dark">
            <span className="text-secondary">Apply</span>Buddies
          </span>
        </Link>
        <Link to="/login" className="text-sm font-medium text-primary hover:underline whitespace-nowrap ml-2">
          Back to login
        </Link>
      </header>

      {/* Main Content */}
      <main className="flex items-center justify-center px-4 py-4">
        <div className="w-full max-w-lg bg-white rounded-xl shadow-md p-8"> {/* Wider container */}
          <div className="text-center mb-6">
            <h1 className="text-2xl font-bold text-gray-900 font-serif mb-2">
              Reset your password
            </h1>
            <p className="text-gray-600 text-sm">
              Enter your email to receive a verification code
            </p>
          </div>

          {error && (
            <div className="mb-4 p-3 bg-red-50 text-red-700 rounded-md text-sm">
              {error}
            </div>
          )}

          {success ? (
            <div className="mb-4 p-3 bg-green-50 text-green-700 rounded-md text-sm">
              Verification code sent to your email!
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6"> {/* Increased spacing */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email address
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary" /* Larger inputs */
                  placeholder="your@email.com"
                />
              </div>

              <button
                type="submit"
                disabled={isLoading}
                className={`w-full py-3 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-primary hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary transition-all ${
                  isLoading ? 'opacity-80 cursor-not-allowed' : ''
                }`}
              >
                {isLoading ? 'Sending code...' : 'Send Verification Code'}
              </button>
            </form>
          )}

          <div className="mt-6 text-center text-sm text-gray-600">
            Remember your password?{' '}
            <Link to="/login" className="font-medium text-primary hover:underline">
              Sign in
            </Link>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="py-4 px-4 text-center text-xs text-gray-500">
        © {new Date().getFullYear()} ApplyBuddies. All rights reserved.
      </footer>
    </div>
  );
};

export default ForgotPasswordPage;