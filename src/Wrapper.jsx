import { useState, createContext } from "react"
export const studyContainer = createContext(null);
const Wrapper = (props) => {
  const [isLoggedin, set_isLoggedin] = useState(false);
  const [button_1,set_button_1] = useState("Log In")
    const [button_2,set_button_2] = useState("Sign Up")
  return (
      <studyContainer.Provider value={{ isLoggedin , set_isLoggedin,button_1,button_2,set_button_1,set_button_2 }}>
          {props.children }
      </studyContainer.Provider>
  )
}

export default Wrapper