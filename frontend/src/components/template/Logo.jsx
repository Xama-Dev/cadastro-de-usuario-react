import './Logo.css'
import logo from '../../assets/img/logo.png'
import React from 'react'

export default props =>
    <aside className="logo">
        <a href="#/" className="log">
            <img src={logo} alt="logo"/>
        </a>
    </aside>