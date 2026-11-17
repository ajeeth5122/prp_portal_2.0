import React from 'react';
import './LogoutModal.css';
import LogoutIcon from '../assets/LandingAssets/LogoutIcon.png'; 

const LogoutModal = ({ isOpen, onClose, onConfirm }) => {
  if (!isOpen) return null;

  return (
    <div className='Prp-Modal-Overlay'>
      <div className='Prp-Modal-Container'>
        <div className='Prp-Modal-Icon-Cont'>
          <img src={LogoutIcon} alt="Logout Icon" width={40} />
        </div>
        <h3 className='Prp-Modal-Title'>Oh no! You're leaving</h3>
        <p className='Prp-Modal-Subtitle'>Are you sure, you want to logout ?</p>
        <div className='Prp-Modal-Action-Buttons'>
          <button className='Prp-Modal-Cancel-Btn' onClick={onClose}>
            Cancel
          </button>
          <button className='Prp-Modal-Confirm-Btn' onClick={onConfirm}>
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default LogoutModal;