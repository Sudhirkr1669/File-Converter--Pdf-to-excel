import React from 'react';
import {useNavigate} from "react-router-dom";

function LogOut() {
    const navigate=useNavigate();
    const handleLogOut=()=>{
        localStorage.removeItem('login');

        console.log("users logout successfully");
       navigate("/loginpage")
    }
  return (
    <div className="flex items-center justify-end">
      <button onClick={handleLogOut}className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 ">Log Out</button>
    </div>
  )
}

export default LogOut