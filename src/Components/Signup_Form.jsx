import React, { useState,useContext } from 'react'
import { useNavigate } from "react-router-dom"
import { studyContainer } from "../Wrapper.jsx"
import { toast,Bounce} from "react-toastify"

const Signup_Form = () => {
    const [email, set_email] = useState("")
    const [fname, set_fname] = useState("")
    const [lname, set_lname] = useState("")
    const [password, set_password] = useState("")
    const [cpassword, set_cpassword] = useState("")
    const [type, set_type] = useState("password")
    const [type2, set_type2] = useState("password")
    const navigate = useNavigate();
    const { isLoggedin, set_isLoggedin, button_1, set_button_1, button_2, set_button_2 } = useContext(studyContainer);
    const typeHandler = () => {
        if (type == "password") {
            set_type("text")
        }
        else {
            set_type("password")
        }
    }
    const typeHandler2 = () => {
        if (type2 == "password") {
            set_type2("text")
        }
        else {
            set_type2("password")
        }
    }
    const handleLogin = () => {
       toast.success('You have signed in now!', {
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
       console.log(isLoggedin);
       set_isLoggedin(true)
       set_button_1("Logout")
       set_button_2("DashBoard")
       navigate("/dashboard")
       
    }

    const submitHanlder = (e) => {
            e.preventDefault();
            const form = e.target;
            if (form.checkValidity()) {
                toast.success('Signed in', {
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
                console.log(isLoggedin);
                set_isLoggedin(true)
                set_button_1("Logout")
                set_button_2("DashBoard")
                navigate("/dashboard")
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
            <form onSubmit={submitHanlder} className="flex flex-col mt-[2rem]">
                <div className="bg-[#222a4a] w-[15rem] rounded-2xl flex flex-row justify-around items-between mb-[1rem]">
                    <button className="text-[#afadad] w-[50%] bg-[#222a4a] p-[1rem] m-[0.1rem] rounded-2xl focus:text-white focus:bg-[#020927]" type="button">Student</button>
                    <button className="text-[#afadad] w-[50%] bg-[#222a4a] p-[1rem] m-[0.1rem] rounded-2xl focus:text-white focus:bg-[#020927]" type="button">Instructor</button>
                </div>
                <div className="flex flex-row mb-[0.5rem]">
                    <div className="flex flex-col mr-[1rem]">
                        <label className="text-white " htmlFor="fname" >First Name <span className="text-red-600">*</span></label>
                        <input required type="text" value={fname} onChange={(e) => set_fname(e.target.value)} placeholder="First Name" className="text-white bg-[#222a4a] p-[0.5rem] rounded-md outline-none mt-[0.5rem]" />
                    </div>
                    <div className="flex flex-col">
                        <label className="text-white " htmlFor="lname" >Last Name <span className="text-red-600">*</span></label>
                        <input required type="text" value={lname} onChange={(e) => set_lname(e.target.value)} placeholder="Last Name" className="text-white bg-[#222a4a] p-[0.5rem] rounded-md outline-none mt-[0.5rem]" />
                    </div>
                </div>

                <label className="text-white " htmlFor="email" >Email Address <span className="text-red-600">*</span></label>
                <input required type="email" value={email} onChange={(e) => set_email(e.target.value)} placeholder="Enter email address" className="text-white bg-[#222a4a] p-[0.5rem] rounded-md outline-none mt-[0.5rem]" />

                <div className="flex flex-row">
                    <div className="flex flex-col mr-[1rem]">
                        <label className="text-white mt-[0.5rem]" htmlFor="password" >Create Password <span className="text-red-600">*</span></label>
                        <div className="text-white bg-[#222a4a] rounded-md flex flex-row justify-between items-center mt-[0.2rem]">
                            <input required type={type} value={password} onChange={(e) => set_password(e.target.value)} placeholder="Enter password" className="text-white bg-[#222a4a] p-[0.5rem] rounded-md outline-none" />
                            <button type="button" onClick={typeHandler}><img src={type == "password" ? "/eye_closed.svg" : "/eye_open.svg"} className="text-white h-[2rem] w-[2rem] mr-[1rem]" alt="eye" /></button>
                        </div>
                    </div>
                    <div className="flex flex-col">
                        <label className="text-white mt-[0.5rem]" htmlFor="password" >Confirm Password <span className="text-red-600">*</span></label>
                        <div className="text-white bg-[#222a4a] rounded-md flex flex-row justify-between items-center mt-[0.2rem]">
                            <input required type={type2} value={cpassword} onChange={(e) => set_cpassword(e.target.value)} placeholder="Enter password" className="text-white bg-[#222a4a] p-[0.5rem] rounded-md outline-none" />
                            <button type="button" onClick={typeHandler2}><img src={type == "password" ? "/eye_closed.svg" : "/eye_open.svg"} className="text-white h-[2rem] w-[2rem] mr-[1rem]" alt="eye" /></button>
                        </div>
                    </div>
                </div>
                <button type="submit" className="w-[100%] bg-[#f3ff09] p-[0.5rem] font-bold rounded-md mt-[3rem]">Sign Up</button>
                <div className="text-[#151244] flex flex-row mt-[1rem]">
                    <hr className="w-[80%] mt-[0.8rem]" />
                    <p className="w-[12%]">OR</p>
                    <hr className="w-[80%] mt-[0.8rem]" />
                </div>
                <button type="button" className="flex flex-row justify-center items-center border-2 border-[#151244] p-[0.5rem] m-[1rem]" >
                    <img className="w-[2rem] pr-[0.5rem]" alt="google" src="/google.svg" />
                    <p className="text-white">Sign in with Google</p>
                </button>
              
            </form>
        </>
    )
}

export default Signup_Form