import React from 'react'
import './Navigation.css'
import blog from "./blog.svg"
import favourite from "./star.svg"
import settings from "./settings.svg"

export const Navigation = () => {
  return (
    <nav className='nav'>
        <a href="/" className='active' >
            <img src={ blog } alt="blog icon" />
            <span>Blog</span>
        </a>
        <a href="/">
            <img src={ favourite } alt="favourite icon" />
            <span>Favourite</span>
        </a>
        <a href="/">
            <img src={ settings } alt="settings icon" />
            <span>Settings</span>
        </a>
    </nav>
  )
}
