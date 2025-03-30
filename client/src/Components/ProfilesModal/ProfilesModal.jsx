import React from 'react';
import './ProfilesModal.css'; // Make sure to style it accordingly
import { IoMdClose } from 'react-icons/io';

function ProfilesModal({ setModalOpened }) {
  return (
    <div className="modal-overlay" onClick={() => setModalOpened(false)}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>

        <IoMdClose className='pointer' onClick={() => setModalOpened(false)} />
        <form className="InfoForm">
          <h3>Your info</h3>

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

          <div>
            Profile Image
            <input type="file" name="profileImg" />
            Cover Image
            <input type="file" name="coverImg" />
          </div>

          <button className="button InfoButton">Update</button>
        </form>
      </div>
    </div>
  );
}

export default ProfilesModal;
