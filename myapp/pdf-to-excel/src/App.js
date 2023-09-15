import SignupPage from './SignupPage';
// import {Navigate, useNavigate} from "react-router-dom"
// import './App.css';
import LoginPage from './LoginPage';
import { BrowserRouter, Routes, Route} from "react-router-dom";
import FileUpload from './FileUpload';
// import {useState,useEffect} from "react";
// import axios from "axios";
import ProtectedRoute from './ProtectedRoute';
import LogOut from './LogOut';

function App() {
  

  return (
    <div>
  
      <BrowserRouter>
      <LogOut/>
      <Routes>
        <Route path="/loginpage" element={<LoginPage />}/>
        <Route path="/" element={ <SignupPage />}/>
        <Route path="/uploadfile" element={<ProtectedRoute Component={FileUpload}/>}/>
    
      </Routes>
      </BrowserRouter>
      <h1>Solved!! Thank you</h1>
     
    </div>
  )
}

export default App;
// const navigation=useNavigateavigate();
  // const [user, setUser] = useState(null);
  // useEffect(() => {
  //   // Check if the user is authenticated
  //   axios
  //     .get('https://parseapi.back4app.com/users/me', {
  //       headers: {
  //         'X-Parse-Application-Id': 'jtJrAxtGh9fV9PE1bJkJ4WO62LKiBDAVBfMkwscj',
  //         'X-Parse-REST-API-Key': 'vDrsTMdT1Czgy9UDfqtocOnzblCtsEPIBEnr2T4y',
  //         'X-Parse-Session-Token': 'r:03a4c2d87a63a020a7d737c6fc64fd4c',
  //       },
  //     })
  //     .then((response) => {
  //       // If the request is successful, the user is authenticated
  //      if(setUser(response.data)){
  //       <Navigate to='/uploadfile' replace={true} />
  //      }
  //     })
  //     .catch((error) => {
  //       // If there's an error or the user is not authenticated, setUser to null
  //       setUser(null);
  //     });
  // }, []);