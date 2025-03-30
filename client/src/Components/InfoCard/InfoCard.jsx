// import React, { useState } from 'react';
// import './InfoCard.css';
// import { GoPencil } from "react-icons/go";
// import ProfilesModal from '../ProfilesModal/ProfilesModal';

// const InfoCard = () => {
//   const [modalOpened, setModalOpened] = useState(false);

//   return (
//     <div className="InfoCard">
//       <div className="InfoHead">
//         <h4>Your Info</h4>
//         <div>
//           {/* The GoPencil icon will open the modal */}
//           <GoPencil onClick={() => setModalOpened(true)} />
//           {/* Pass modalOpened and setModalOpened to ProfileModal */}
//           <ProfilesModal
//             modalOpened={modalOpened}
//             setModalOpened={setModalOpened}
//           />
//         </div>
//       </div>

//       <div className="Info">
//         <span>
//           <b>Status </b>
//         </span>
//         <span>In Relationship</span>
//       </div>

//       <div className="Info">
//         <span>
//           <b>Lives in </b>
//         </span>
//         <span>Israel</span>
//       </div>

//       <div className="Info">
//         <span>
//           <b>Works at </b>
//         </span>
//         <span>Fullstack Developer</span>
//       </div>

//       <button className="button logout-button">
//         Logout
//       </button>
//     </div>
//   );
// };

// export default InfoCard;
import React, { useState } from 'react';
import './InfoCard.css';
import { GoPencil } from "react-icons/go";
import ProfilesModal from '../ProfilesModal/ProfilesModal';

const InfoCard = () => {
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

      {/* Conditionally render ProfilesModal if modalOpened is true */}
      {modalOpened && <ProfilesModal setModalOpened={setModalOpened} />}
    </div>
  );
};

export default InfoCard;
