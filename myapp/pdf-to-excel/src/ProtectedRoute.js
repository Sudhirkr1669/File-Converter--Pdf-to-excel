import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
// import axios from 'axios';
// import FileUpload from "./FileUpload"

const ProtectedRoute = (props) => {
  const {Component}=props;
  const navigation=useNavigate();
  useEffect(()=>{
    let login=localStorage.getItem('login');
    if(!login){
      navigation("/loginpage")
    }else{
      navigation("/uploadfile")
    }
  },[]);

  return (
    <div>
      <h2>Hello ! i am sudhir kumar</h2>
      <Component/>
    </div>
  );
};

export default ProtectedRoute;