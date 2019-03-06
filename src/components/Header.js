import React from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';

function Header() {
  return (
    <Navbar color="dark" dark expand="md">
      <NavbarBrand href="/">EC2 Manager</NavbarBrand>
    </Navbar>
  );
}

export default Header;
