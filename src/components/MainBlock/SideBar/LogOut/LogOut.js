import React from 'react'
import "./LogOut.css"
import exit from "./exit.svg"
// import { ReactComponent as Exit} from "./exit.svg"


export const LogOut = ({ setIsLoggedIn }) => {

    const logOut = () => setIsLoggedIn(false);

    return (
        <button className="navExit" onClick={logOut}>
            <img src={exit} alt="exit icon" />
            {/* <Exit /> */}
            Exit
        </button>
  )
}
