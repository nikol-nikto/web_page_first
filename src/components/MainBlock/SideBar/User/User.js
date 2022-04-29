import React from 'react'
import avatar from "./white_bear.jpg"
import "./User.css"

export const User = () => {
  return (
    <div className="user">
        <div className="avatar">
            <img src={ avatar } alt="avatar"/>
        </div>
        <h3>White Bear</h3>
    </div>
  )
}
