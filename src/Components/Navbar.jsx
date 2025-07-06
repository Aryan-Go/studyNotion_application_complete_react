import React,{useContext,useState} from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { studyContainer } from "../Wrapper.jsx"

const Navbar = () => {
    const { isLoggedin, set_isLoggedin,button_1,set_button_1,set_button_2,button_2 } = useContext(studyContainer);
    const navigate = useNavigate();
    const loginHandler = () => {
        set_isLoggedin(true)
        set_button_1("Log in")
        set_button_2("Sign Up")
        navigate("/login")
    }
    const signupHandler = () => {
        if (button_2 == "Sign Up") {
            navigate("/signup")
        }
        else {
            navigate("/dashboard")
        }
    }
  return (
      <>
          <nav className="text-white flex flex-row justify-around py-[1rem] overflow-x-hidden overflow-y-hidden">
              <div className="flex flex-row justify-center items-center">
                <div className="bg-white h-[2.5rem] w-[2.5rem] rounded-full flex flex-row justify-center items-center mr-[0.3rem]">
                      <img className="w-[2rem] h-[2rem]" src="/public/s.svg" alt="logo" />
                </div>
                  <NavLink to="/" className="font-bold">StudyNotion</NavLink>
              </div>
              <div>
                  <NavLink className="mx-[0.6rem]" to="/">Home</NavLink>
                  <NavLink className="mx-[0.6rem]" to="/">About</NavLink>
                  <NavLink className="mx-[0.6rem]" to="/">Contact</NavLink>
              </div>
              <div>
                  <button className="mx-[0.6rem] bg-[#222a4a] p-[0.5rem] rounded-lg" onClick={loginHandler}>{ button_1}</button>
                  <button className="mx-[0.6rem] bg-[#222a4a] p-[0.5rem] rounded-lg" onClick={ signupHandler}>{button_2}</button>
              </div>
        </nav>
      </>
  )
}

export default Navbar