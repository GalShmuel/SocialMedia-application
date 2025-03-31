// Importing necessary modules and components
import React, { useState } from 'react'; // React library and useState hook
import './InfoCard.css'; // Importing the CSS file for styling
import { GoPencil } from "react-icons/go"; // Importing the pencil icon for editing
import ProfilesModal from '../ProfilesModal/ProfilesModal'; // Importing the ProfilesModal component

// Defining the InfoCard component
const InfoCard = () => {
  // State to manage whether the modal is open or not
  const [modalOpened, setModalOpened] = useState(false);

  return (
    <div className="InfoCard">
      <div className="InfoHead">
        <h4>Your Info</h4>
        <div>
          {/* The GoPencil icon will open the modal */}
          <GoPencil
            onClick={() => setModalOpened(true)} // Open the modal when clicked
            style={{ cursor: 'pointer' }} // Add a cursor pointer to indicate it's clickable
          />
        </div>
      </div>

      {/* Displaying the user's status */}
      <div className="Info">
        <span>
          <b>Status </b>
        </span>
        <span>In Relationship</span>
      </div>

      {/* Displaying the user's location */}
      <div className="Info">
        <span>
          <b>Lives in </b>
        </span>
        <span>Israel</span>
      </div>

      {/* Displaying the user's profession */}
      <div className="Info">
        <span>
          <b>Works at </b>
        </span>
        <span>Fullstack Developer</span>
      </div>

      {/* Button for logging out */}
      <button className="button logout-button">
        Logout
      </button>

      {/* Conditionally render ProfilesModal if modalOpened is true */}
      {modalOpened && <ProfilesModal setModalOpened={setModalOpened} />}
    </div>
  );
};

// Exporting the InfoCard component for use in other parts of the app
export default InfoCard;
