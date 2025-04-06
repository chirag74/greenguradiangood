import React from 'react'
import './Header.css';

const Header = ({onMembersClick,onCertificatesClick}) => {
  return (
    <header className="header">
        <img 
        src='/assets/logo.jpg' 
        alt="Logo" 
        className="logo" 
        height={50} 
        width={50} 
      />
    <div className="company-name">
      
      <span><h1>GreenGuardianGoods</h1></span>
    </div>

  </header>
  )
}

export default Header