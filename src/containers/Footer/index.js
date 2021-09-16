import React from 'react';

import { Col } from 'reactstrap';

import { ReactComponent as Logo } from '../../assets/images/logo.svg';

import './styles.scss';

const Footer = () => {
  console.log('aaa');

  return (
    <div className="footerWrapper pt-3">
      <Col md={{ size: 2, offset: 1 }}>
        <div className="logoWrapper">
          <Logo />
          <span className="logoName">Mintable</span>
        </div>
        <div className="joinOurCommunityWrapper">
          <span>Join Our Community</span>
        </div>
      </Col>
      <Col md="2">
        <div className="myAccountWrapper">
          My Account
        </div>
        <div className="subMenuList">
          <div className="menuSubItem d-flex align-items-center">Create a store</div>
          <div className="menuSubItem d-flex align-items-center justify-content-center">My Profile</div>
          <div className="menuSubItem">List an Item for sale</div>
          <div className="menuSubItem d-flex justify-content-center">Browse</div>
        </div>
      </Col>
      <Col md="1" className="mx-5">
        <div className="needHelpWrapper">
          Need Help?
        </div>
        <div className="subMenuList">
          <div className="menuSubItem d-flex align-items-center">FAQ</div>
          <div className="menuSubItem">Mintable guide</div>
        </div>
      </Col>
      <Col md="1" className="mx-5">
        <div className="buyAnItemWrapper">
          Buy an Item
        </div>
        <div className="subMenuList">
          <div className="menuSubItem d-flex align-items-center">Digital Items</div>
          <div className="menuSubItem">Stores</div>
        </div>
      </Col>
      <Col md="1" className="mx-5">
        <div className="legalWrapper">
          Legal
        </div>
        <div className="subMenuList">
          <div className="menuSubItem d-flex align-items-center">Privacy Policy</div>
          <div className="menuSubItem">Terms of use</div>
        </div>
      </Col>
    </div>
  )
}

export default Footer;