import React, { useState } from 'react'
import {Link} from 'react-router-dom';
import OAuth from '../components/OAuth';

export default function ForgotPassword() {
  const [email, setEmail] = useState("");
  function onChange(e) {
    setEmail(e.target.value);
  }
  return (
    <section>
      <h1 className="text-3xl text-center mt-6 font-bold">ForgotPassword</h1>
      <div className="flex justify-center flex-wrap items-center px-6 py-12 max-w-6xl mx-auto">
        <div className="md:w-[67%] lg:w-[50%] mb-12 md:mb-6">
          <img src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1073&q=80" alt="key"
            className="w-full rounded-2xl"
          />
        </div>
        <div className="w-full md:w-[67%] lg:w-[40%] lg:ml-20">
          <form >
            <input 
            type="email" 
            id="email" 
            value={email} 
            placeholder="Email address" 
            onChange={onChange} 
            className="w-full mb-6 px-4 py-2 text-xl text-gray-700 bg-white border-gray-300 rounded transition ease-in-out" />


            <div className="flex justify-between whitespace-nowrap text-sm sm:text-lg">
              <p className="mb-6">
                Don't have an account?
                <Link to="/sign-up" 
                className="text-red-600 hover:text-red-700 transition duration-200 ease-in-out ml-1">
                Register</Link>
              </p>
              <p>
                <Link to="/sign-in" 
                className="text-blue-600 hover:text-blue-800 transition duration-200 ease-in-out ">
                Sign in instead</Link>
              </p>
            </div>

            <button className="w-full bg-blue-600 text-white px-7 py-3 text-sm font-medium uppercase rounded shadow-lg hover:bg-blue-800 transition duration-150 ease-in-out hover:shadow-xl active:bg-blue-900" type="submit">
            Send reset password</button>

          <div className=" flex items-center my-4 
          before:border-t before:flex-1 before:border-gray-300
          after:border-t after:flex-1 after:border-gray-300">
            <p className="text-center font-semibold mx-4">OR</p>
          </div>

        <OAuth />
        </form> 
        </div>
      </div>
    </section>
  )
}