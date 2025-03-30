import React from 'react'
import './InfoCard.css'
import { GoPencil } from "react-icons/go";


const InfoCard = () => {
  return (
    <div className="InfoCard">
      <div className="InfoHead">
        <h4>Your Info</h4>
        <div>
          <GoPencil />
        </div>

      </div>

      <div className="Info">
        <span>
          <b>Status </b>
        </span>
        <span>In Relationship</span>
      </div>

      <div className="Info">
        <span>
          <b>Lives in </b>
        </span>
        <span>Israel</span>
      </div>

      <div className="Info">
        <span>
          <b>Works at </b>
        </span>
        <span>Fullstack Developer</span>
      </div>

      <button className="button logout-button">
        Logout
      </button>

    </div>


  )
}

export default InfoCard