import React, { useState } from 'react';
import { Link,useNavigate} from "react-router-dom";
import axios from 'axios';
// import Parse from 'parse/dist/parse.min.js';
// import Parse from './Parse.js';
function SignupPage() {
  const navigation = useNavigate();
  const [formData, setFormData] = useState({
    username: '',
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

    console.log('Form data submitted:', formData);
    // (async () => {
    //   const user = new Parse.User();
    //   user.set('username', formData.username);
    //   user.set('email', formData.email);
    //   user.set('password', formData.password);
    
    //   try {
    //     let userResult = await user.signUp();
    //     console.log('User signed up', userResult);
    //   } catch (error) {
    //     console.error('Error while signing up user', error);
    //   }
    // })();
    // const doUserRegistration = async function () {
    //   // Note that these values come from state variables that we've declared before
    //   const usernameValue = formData.username;
    //   const passwordValue = formData.password;
    //   const emailValue=formData.email;
    //   try {
    //     // Since the signUp method returns a Promise, we need to call it using await
    //     const createdUser = await Parse.User.signUp(usernameValue, passwordValue,emailValue);
    //     alert(
    //       `Success! User ${createdUser.getUsername()} was successfully created!`
    //     );
    //     return true;
    //   } catch (error) {
    //     // signUp can fail if any parameter is blank or failed an uniqueness check on the server
    //     alert(`Error! ${error}`);
    //     return false;
    //   }
    // };
    try {
      // Replace 'YOUR_PARSE_APP_ID' and 'YOUR_PARSE_REST_API_KEY' with your Back4App credentials
      const response = await axios.post(
        'https://parseapi.back4app.com/users',
        formData,
        {
          headers: {
            'X-Parse-Application-Id': 'jtJrAxtGh9fV9PE1bJkJ4WO62LKiBDAVBfMkwscj',
            'X-Parse-REST-API-Key': 'vDrsTMdT1Czgy9UDfqtocOnzblCtsEPIBEnr2T4y',
            'X-Parse-Revocable-Session': 1,
            'Content-Type': 'application/json',
          },
        }
      );

      console.log('User registered successfully:', response.data);
      // navigation("/uploadfile")
      // Add your desired handling for a successful registration here (e.g., redirect)
    } catch (error) {
      console.error('Error during registration:', error);
      // Handle registration errors (e.g., duplicate username)
    }
    // let login=localStorage.setItem("sessionToken",true);
    // if(login)
    navigation('/uploadfile');
    // useEffect(()=>{
    //    let login=localStorage.setItem("sessionToken")
    //    if(!login){
    //     navigation("/loginpage")
    //    }
    // },[])
  
  };
 

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-96">
        <h2 className="text-2xl mb-4">Sign Up</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Username:</label>
            <input
              type="text"
              name="username"
              value={formData.username}
              onChange={handleInputChange}
              className="mt-1 p-2 border rounded w-full"
              required
            />
          </div>
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
            >SignUP
          {/* <Link to="/uploadfile">SignUp</Link> */}
            </button>
          </div>
          <h2 className='mt-6 ml-1'>Or</h2>
          <div className="mt-4 ml-2">
            <div
              className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            >
           <Link to="/loginpage">LogIn</Link> 
            </div>
          </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SignupPage;