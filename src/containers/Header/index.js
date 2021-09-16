import React from 'react';

import { Button, Col, DropdownToggle, DropdownMenu, DropdownItem, Input, InputGroup, InputGroupAddon, InputGroupButtonDropdown, Row } from 'reactstrap';
import { NavLink, useLocation } from "react-router-dom";
import { FiSearch } from "react-icons/fi";
import { IoCaretDown } from "react-icons/io5";

import { ReactComponent as Logo } from '../../assets/images/logo.svg';

import './styles.scss';

const Header = () => {
  const { pathname } = useLocation();

  return (
    <div className="headerWrapper">
      <Col md="5" className="searchWrapper">
        <Row>
          <Col md={{ size: 3, offset: 2 }} className="logo">
            <Logo />
          </Col>
          <Col md="6" className="searchInputWrapper">
            <InputGroup>
              <Input placeholder="Search for anything" />
              <InputGroupAddon addonType="append">
                <DropdownToggle split outline>Type</DropdownToggle>
                <Button outline>
                  <FiSearch size={20} className="searchIcon" />
                </Button>
                <DropdownMenu>
                  <DropdownItem header>Header</DropdownItem>
                  <DropdownItem disabled>Action</DropdownItem>
                  <DropdownItem>Another Action</DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>Another Action</DropdownItem>
                </DropdownMenu>
              </InputGroupAddon>
            </InputGroup>
          </Col>
        </Row>
      </Col>
      <Col md="7">
        <div className="menuWrapper">
          <NavLink to="/choose-green-label" exact className={`nav-link ${pathname === '/choose-green-label' ? 'active' : ''}`}>
            Browse
          </NavLink>
          <NavLink to="/choose-green-label" exact className={`nav-link ${pathname === '/choose-green-label' ? 'active' : ''}`}>
            Discover
          </NavLink>
          <NavLink to="/choose-green-label" exact className={`nav-link ${pathname === '/choose-green-label' ? 'active' : ''}`}>
            Mint an item
          </NavLink>
          <NavLink to="/choose-green-label" exact className={`nav-link ${pathname === '/raffle-reveal' ? 'active' : ''}`}>
            Vote/DAO
          </NavLink>
          <NavLink to="/choose-green-label" exact className={`nav-link ${pathname === '/choose-green-label' ? 'active' : ''}`}>
            My Account
          </NavLink>
          <div className="currencyOptionWrapper">
            Ethereum
            <IoCaretDown size={15} />
          </div>
        </div>
      </Col>
    </div>
  )
}

export default Header;