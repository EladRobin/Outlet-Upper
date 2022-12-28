import React, { useState } from 'react'
import "./nav.css"
import { links } from "./navBarLinks"
import { Link } from "react-router-dom"
import { FaBars } from "react-icons/fa"

const NavBar = () => {
    const [isBarOpen, setIsBarOpen] = useState(true);
    const onBarClick = () => {
        setIsBarOpen(!isBarOpen);
    }
    return (
        <>
            <div className={`myNav d-flex ${isBarOpen ? "closeNav" : "openNav"}`}>
                <div>
                    {links.map((item, index) =>
                        <Link className={`link`} key={index} to={item.url}>{item.name}</Link>)}
                </div>
            </div>
            <div className='bar'>
                <FaBars onClick={onBarClick} size={32} />
            </div>
        </>

    )
}

export default NavBar