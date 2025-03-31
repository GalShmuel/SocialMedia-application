// Importing necessary components and styles
import React from 'react'; // React for functional component
import './ProfilesModal.css'; // Styles for the modal component
import { IoMdClose } from 'react-icons/io'; // Import close icon from react-icons

// Defining the ProfilesModal component
function ProfilesModal({ setModalOpened }) {

  return (
    // Modal overlay, clicking here closes the modal
    <div className="modal-overlay" onClick={() => setModalOpened(false)}>

      {/* Modal content, clicking here prevents closing the modal */}
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>

        {/* Close button to close the modal */}
        <IoMdClose className='pointer' onClick={() => setModalOpened(false)} />

        {/* Form for updating user profile information */}
        <form className="InfoForm">
          <h3>Your info</h3>

          {/* Input fields for first name, last name, and work */}
          <div>
            <input
              type="text"
              className="InfoInput"
              name="FirstName"
              placeholder="First Name"
            />
            <input
              type="text"
              className="InfoInput"
              name="LastName"
              placeholder="Last Name"
            />
            <input
              type="text"
              className="InfoInput"
              name="worksAT"
              placeholder="Works at"
            />
          </div>

          {/* Input fields for status and location */}
          <div>
            <input
              type="text"
              className="InfoInput"
              name="Status"
              placeholder="Status"
            />
            <input
              type="text"
              className="InfoInput"
              name="livesIN"
              placeholder="Lives In"
            />
          </div>

          {/* Input fields for uploading profile and cover images */}
          <div>
            Profile Image
            <input type="file" name="profileImg" />
            Cover Image
            <input type="file" name="coverImg" />
          </div>

          {/* Update button to submit the form */}
          <button className="button InfoButton">Update</button>
        </form>
      </div>
    </div>
  );
}

// Exporting ProfilesModal component for use in other parts of the app
export default ProfilesModal;
