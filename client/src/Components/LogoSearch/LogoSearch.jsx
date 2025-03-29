import React from 'react'
import { VscEditSession } from "react-icons/vsc";
import { FiSearch } from "react-icons/fi";
import './LogoSearch.css';

const LogoSearch = () => {
    return (
        <div className="LogoSearch">
            <VscEditSession />
            <div className="Search">
                <input type="text" placeholder='#Explore' />
                <div className="s-icon">
                    <FiSearch />
                </div>
            </div>
        </div>
    )
}

export default LogoSearch