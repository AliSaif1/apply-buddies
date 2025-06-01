import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate, Link } from 'react-router-dom';
import axios from 'axios';

const VerifyOTPPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [otp, setOtp] = useState(['', '', '', '', '', '']);
  const [isLoading, setIsLoading] = useState(false);
  const [isResending, setIsResending] = useState(false);
  const [error, setError] = useState('');
  const [resendSuccess, setResendSuccess] = useState(false);
  const email = location.state?.email || '';

  // Check if the user came from forgot-password with a valid email
  useEffect(() => {
    if (!email) {
      navigate('/forgot-password', { replace: true });
    }
  }, [email, navigate]);

  const handleChange = (index, value) => {
    if (isNaN(value)) return;

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    // Auto focus to next input
    if (value && index < 5) {
      document.getElementById(`otp-${index + 1}`).focus();
    }
  };

  const handleKeyDown = (index, e) => {
    if (e.key === 'Backspace' && !otp[index] && index > 0) {
      document.getElementById(`otp-${index - 1}`).focus();
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    try {
      const otpCode = otp.join('');
      const response = await axios.post('http://localhost:3001/apply-buddies/auth/verify-otp', {
        email,
        otp: otpCode
      });

      const { resetToken } = response.data;

      navigate('/reset-password', {
        state: {
          email,
          resetToken
        }
      });
    } catch (err) {
      console.error('OTP verification error:', err);
      setError(err.response?.data?.message || 'Invalid verification code. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleResendOTP = async () => {
    setIsResending(true);
    setError('');
    setResendSuccess(false);

    try {
      await axios.post('http://localhost:3001/apply-buddies/auth/forgot-password', { email });
      setResendSuccess(true);
    } catch (err) {
      console.error('Resend OTP error:', err);
      setError(err.response?.data?.message || 'Failed to resend verification code. Please try again.');
    } finally {
      setIsResending(false);
    }
  };

  // Show nothing while checking for valid access
  if (!email) {
    return null;
  }

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
        <div className="w-full max-w-lg bg-white rounded-xl shadow-md p-8">
          <div className="text-center mb-6">
            <h1 className="text-2xl font-bold text-gray-900 font-serif mb-2">
              Verify your email
            </h1>
            <p className="text-gray-600 text-sm">
              Enter the 6-digit code sent to {email}
            </p>
          </div>

          {error && (
            <div className="mb-4 p-3 bg-red-50 text-red-700 rounded-md text-sm">
              {error}
            </div>
          )}

          {resendSuccess && (
            <div className="mb-4 p-3 bg-green-50 text-green-700 rounded-md text-sm">
              New verification code sent successfully!
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="flex justify-center space-x-3">
              {otp.map((digit, index) => (
                <input
                  key={index}
                  id={`otp-${index}`}
                  type="text"
                  maxLength="1"
                  value={digit}
                  onChange={(e) => handleChange(index, e.target.value)}
                  onKeyDown={(e) => handleKeyDown(index, e)}
                  className="w-12 h-12 text-center text-xl border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
                  autoFocus={index === 0}
                />
              ))}
            </div>

            <button
              type="submit"
              disabled={isLoading || otp.some(digit => !digit)}
              className={`w-full py-3 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-primary hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary transition-all ${isLoading || otp.some(digit => !digit) ? 'opacity-80 cursor-not-allowed' : ''
                }`}
            >
              {isLoading ? 'Verifying...' : 'Verify Code'}
            </button>
          </form>

          <div className="mt-6 text-center text-sm text-gray-600">
            Didn't receive a code?{' '}
            <button
              className="font-medium text-primary hover:underline"
              onClick={handleResendOTP}
              disabled={isResending}
            >
              {isResending ? 'Resending...' : 'Resend code'}
            </button>
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

export default VerifyOTPPage;