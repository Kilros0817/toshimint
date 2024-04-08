import React, { useState } from "react";
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../../assests/logo.svg';
import './Header.css';
import arbi from '../../assests/arbi.png';
import era from '../../assests/era.png';
import testnet from '../../assests/testnet.png';
import Linea from '../../assests/linea.png';
import Select from "react-select";
import { Link } from "react-router-dom";
import wallet from '../../assests/Wallet.svg';
import { ConnectButton } from "@rainbow-me/rainbowkit";



const Header = () => {
  const options = [
    { value: "Arbitrum", label: <div><img src={arbi} height="30px" width="30px" alt='Arbitrum' className="me-2" />Arbitrum</div> },
    { value: "zkSync Era", label: <div><img src={era} height="30px" width="30px" alt='zkSync Era' className="me-2" />zkSync Era</div> },
    { value: "Base Testnet", label: <div><img src={testnet} height="30px" width="30px" alt='Base Testnet' className="me-2" />Base Testnet</div> },
    { value: "Linea Testnet", label: <div><img src={Linea} height="30px" width="30px" alt='Linea Testnet' className="me-2" />Linea Testnet</div> },
  ];
  return (
    <header>
      <Navbar bg="transparent" expand="lg" className="pt-2 pt-sm-4">
        <Container>
          <Link to='/'>
            <img src={logo} alt="react-bootstrap" height="30"></img>
          </Link>
          <Navbar.Toggle aria-controls="navbarScroll" >
            <span className="navbar-toggler-icon">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z" /></svg>
            </span>
          </Navbar.Toggle>
          {/* <Navbar.Collapse id="navbarScroll">
            <Nav
              className="ms-auto my-2 my-lg-0"

              navbarScroll>
              <span className="headernum me-0 me-sm-4 mb-3 mb-sm-0">🍭1000</span>

              <div className="custom-select">
                <Select

                  defaultValue={options[0]}
                  options={options}
                  className="react-select-container mb-2 mb-sm-0"
                  classNamePrefix="react-select" />
              </div>
            </Nav>
            <Form className="d-flex ms-0 ms-sm-3">
              <Button className="round-btn"><img src={wallet} alt='wallet' ></img></Button>
            </Form>
          </Navbar.Collapse> */}
          <ConnectButton/>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;