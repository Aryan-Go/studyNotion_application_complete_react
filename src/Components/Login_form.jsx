import React, { useState,useContext } from 'react'
import { useNavigate } from "react-router-dom"
import { studyContainer } from "../Wrapper.jsx"
import { toast,Bounce} from "react-toastify"

const Login_form = () => {
    const [email,set_email] = useState("")
    const [password, set_password] = useState("")
    const [type, set_type] = useState("password")
    const navigate = useNavigate();
    const { isLoggedin, set_isLoggedin,button_1,set_button_1,button_2,set_button_2 } = useContext(studyContainer);
    const typeHandler = () => {
        if(type== "password") {
            set_type("text")
        }
        else {
            set_type("password")
        }
    }
    // const handleLogin = (e) => {
    //     navigate("/dashboard")
    //     console.log(isLoggedin);
    //     set_isLoggedin(true)
    //     set_button_1("Logout")
    //     set_button_2("DashBoard")
    //     toast.success('Logged in', {
    //         position: "top-right",
    //         autoClose: 2000,
    //         hideProgressBar: false,
    //         closeOnClick: false,
    //         pauseOnHover: true,
    //         draggable: true,
    //         progress: undefined,
    //         theme: "dark",
    //         transition: Bounce,
    //         });
    // }
    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        if (form.checkValidity()) {
            toast.success('Logged in', {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
                transition: Bounce,
            });
            navigate("/dashboard")
            console.log(isLoggedin);
            set_isLoggedin(true)
            set_button_1("Logout")
            set_button_2("DashBoard")
        } else {
            form.reportValidity(); 
            toast.error('Please fill all the details correclt', {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
                transition: Bounce,
                });
        }
    }
    console.log(isLoggedin);
  return (
      <>
          <form onSubmit={handleSubmit} className="flex flex-col mt-[2rem]">
              <label className="text-white " htmlFor="email" >Email Address <span className="text-red-600">*</span></label>
              <input type="email" value={email} onChange={(e) => set_email(e.target.value) } required placeholder="Enter email address" className="text-white bg-[#222a4a] p-[0.5rem] rounded-md outline-none mt-[0.5rem]" />
              
              <label className="text-white mt-[0.5rem]" htmlFor="password" >Password <span className="text-red-600">*</span></label>
              <div className="text-white bg-[#222a4a] rounded-md flex flex-row justify-between items-center mt-[0.2rem]">
                  <input type={type} value={password} onChange={(e) => set_password(e.target.value)} required placeholder="Enter password" className="text-white bg-[#222a4a] p-[0.5rem] rounded-md outline-none" />
                  <button type="button" onClick={ typeHandler}><img src={type=="password" ? "/eye_closed.svg" : "/eye_open.svg" } className="text-white h-[2rem] w-[2rem] mr-[1rem]" alt="eye" /></button>
              </div>
              <div className="w-[100%] flex flex-row justify-end">
              <p className="text-[#3dacbf] text-[0.8rem]">Forgot Password</p>
              </div>
              <button type="submit" className="w-[100%] bg-[#f3ff09] p-[0.5rem] font-bold rounded-md mt-[3rem]">Log in</button>
              <div className="text-[#151244] flex flex-row mt-[1rem]">
                  <hr className="w-[80%] mt-[0.8rem]"/>
                  <p className="w-[12%]">OR</p>
                  <hr className="w-[80%] mt-[0.8rem]"/>
              </div>
              <button type="button" className="flex flex-row justify-center items-center border-2 border-[#151244] p-[0.5rem] m-[1rem]" >
                  <img className="w-[2rem] pr-[0.5rem]" alt="google" src="/google.svg" />
                  <p className="text-white">Sign in with Google</p>
              </button>
              
          </form>
      </>
  )
}

export default Login_form