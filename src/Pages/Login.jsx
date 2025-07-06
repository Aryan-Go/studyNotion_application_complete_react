import React from 'react'
import Image_frame from "../Components/Image_frame.jsx"
import Form from "../Components/Login_form.jsx"
const Login = () => {
  return (
    <div className="flex flex-row justify-around">
      <div className="p-[5rem]">
        <h1 className="text-white font-bold text-[2rem]">Welcome Back</h1>
        <p className="text-[#afadad] mt-[0.5rem]">Build skills for today, tomorrow and beyond</p>
        <p className="text-[#3dacbf]">Education to future-proof your career</p>
        <Form />
      </div>
      <div>
        <Image_frame />
      </div>
    </div>
  )
}

export default Login