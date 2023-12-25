import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';


const Login = ({ onClose }) => {
    const handleClose = () => {
        onClose();
      };

const Navigate=useNavigate();


      const [email, setEmail] = useState('');
      const [password, setPassword] = useState('');
    
    
      const loginHandler = async (e) => {
        e.preventDefault();
      
        const res = await fetch('/login', {
          method: 'POST',
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            email,
            password
          })
        });
      
        if (res.ok) {  
          const data = await res.json();
          localStorage.setItem('user', JSON.stringify(data.user.name));
          handleClose();
          window.location.reload();
          Navigate('/');
        } else {
          window.alert('Invalid Credentials');
        }
      };
      
  return (
    <>
      <div>
        <div
          id="login-popup"
          tabIndex="-1"
          className="bg-black/50 overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 h-full items-center justify-center flex"
        >
          <div className="relative p-4 w-full max-w-md h-full md:h-auto">
            <div className="relative bg-white rounded-lg shadow">
              <button onClick={handleClose}
                type="button"
                className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center popup-close"
              >
                <svg
                  aria-hidden="true"
                  className="w-5 h-5"
                  fill="#c6c7c7"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <span className="sr-only">Close popup</span>
              </button>

              <div className="p-5">
                <p className="mb-4 text-sm font-normal text-gray-800"></p>

                <div className="text-center">
                  <p className="mb-3 text-2xl font-semibold leading-5 text-slate-900">
                    Login to your account
                  </p>
                  <p className="mt-2 text-sm leading-4 text-slate-600">
                    You must be logged in to perform this action.
                  </p>
                </div>

                <div className="mt-7 flex flex-col gap-2">
                 
                </div>
                <div className="flex w-full items-center gap-2 py-6 text-sm text-slate-600">
                 
                </div>
                <form className="w-full">
                  <label htmlFor="email" className="sr-only">
                    Email address
                  </label>
                  <input
                    name="email"
                    type="email"
                    value={email}
                     onChange={(e)=>setEmail(
                        e.target.value
                      )}
                    autoComplete="email"
                    required
                    className="block w-full rounded-lg border border-gray-300 px-3 py-2 shadow-sm outline-none placeholder:text-gray-400 focus:ring-2 focus:ring-black focus:ring-offset-1"
                    placeholder="Email Address"
                  />
                  <label htmlFor="password" className="sr-only">
                    Password
                  </label>
                  <input
                    name="password"
                    type="password"
                    autoComplete="current-password"
                    required
                    className="mt-2 block w-full rounded-lg border border-gray-300 px-3 py-2 shadow-sm outline-none placeholder:text-gray-400 focus:ring-2 focus:ring-black focus:ring-offset-1"
                    placeholder="Password"
                    value={password}
                     onChange={(e)=>setPassword(
                        e.target.value
                      )}
                  />
                  <p className="mb-3 mt-2 text-sm text-gray-500">
                    <a href="/forgot-password" className="text-blue-800 hover:text-blue-600">
                      Reset your password?
                    </a>
                  </p>
                  <button
                    type="submit" onClick={loginHandler}
                    className="inline-flex w-full items-center justify-center rounded-lg bg-black p-2 py-3 text-sm font-medium text-white outline-none focus:ring-2 focus:ring-black focus:ring-offset-1 disabled:bg-gray-400"
                  >
                    Continue
                  </button>
                </form>

                <div className="mt-6 text-center text-sm text-slate-600">
                  Don't have an account?
                  <a href="/register" className="font-medium text-[#4285f4]">
                    Sign up
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
