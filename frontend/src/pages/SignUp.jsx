import React from "react";
import { FcGoogle } from "react-icons/fc";

const SignUp = () => {
  return (
    <div className="bg-blue-50 h-screen flex justify-center py-12">
      <div className="flex flex-col gap-20 items-center bg-white w-1/2 rounded-lg py-8">
        <h1 className="text-4xl font-bold font-fontInter">Sign Up</h1>
        <div className="flex text-2xl font-normal flex-col gap-16 w-3/4 items-center">
         
            <input
              type="text"
              name="nameInput"
              placeholder="Username"
              id="nameInput"
              className="px-4 border-b-2 border-gray-400 w-3/4 py-3 focus:outline-none placeholder:text-gray-600"
            />
          
          
            <input
              type="email"
              name="emailInput"
              id="emailInput"
              className="px-4 border-b-2 border-gray-400 w-3/4 py-3 focus:outline-none placeholder:text-gray-600"
              placeholder="Email"
            />
          
          
            <input
              type="password"
              name="passwordInput"
              id="passwordInput"
              className="px-4 border-b-2 border-gray-400 w-3/4 py-3 focus:outline-none placeholder:text-gray-600"
              placeholder="Password"
            />

            <button className="bg-blue-600 w-1/2 py-4 text-white rounded-md hover:bg-blue-500 transition-all">Sign Up</button>
            <p className="text-sm font-medium">Already have an account? <a href="/sign-in" className="text-blue-500">Sign In</a></p>
            <button className="flex items-center py-4 w-1/2 border justify-center gap-3 rounded-md"> <FcGoogle></FcGoogle>Sign In with Google</button>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
