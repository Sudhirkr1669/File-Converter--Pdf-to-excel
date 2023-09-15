import React, { useState} from 'react';
import { Link,useNavigate } from "react-router-dom";
// import Parse from './Parse.js';
import axios from 'axios';

function LoginPage() {
  const navigation= useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async(event) => {
    event.preventDefault();

    console.log(formData);
  
    // console.log('Login data submitted:', formData);
    try {
      // Replace 'YOUR_PARSE_APP_ID' and 'YOUR_PARSE_REST_API_KEY' with your Back4App credentials
      const response = await axios.get(
        `https://parseapi.back4app.com/login?username=${formData.email}&password=${formData.password}`,
        {
          headers: {
            'X-Parse-Application-Id': 'jtJrAxtGh9fV9PE1bJkJ4WO62LKiBDAVBfMkwscj',
            'X-Parse-REST-API-Key': 'vDrsTMdT1Czgy9UDfqtocOnzblCtsEPIBEnr2T4y',
            'X-Parse-Revocable-Session': 1,
          },
        }
      );

      console.log('User loggedIN successfully:', response.data);
  
      // navigation('/uploadfile');
      // Add your desired handling for a successful registration here (e.g., redirect)
    } catch (error) {
      console.error('Error during LOGIN:', error);
      // Handle registration errors (e.g., duplicate username)
    }
    //  navigation('/uploadfile');
      localStorage.setItem('login',"loggedIn");
      // if(logins){
       navigation("/uploadfile")
  
  };
  

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-96">
        <h2 className="text-2xl mb-4">Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Email:</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className="mt-1 p-2 border rounded w-full"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Password:</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              className="mt-1 p-2 border rounded w-full"
              required
            />
          </div>
          <div className='flex'>
          <div className="mt-4">
            <button
              type="submit"
              className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            >
              {/* Login */}
          LogIn
            </button>
          </div>
          <h2 className='mt-6 ml-1'>Or</h2>
          <div className="mt-4 ml-2">
            <div
              className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            >
           <Link to="/">Sign Up</Link> 
            </div>
          </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default LoginPage;