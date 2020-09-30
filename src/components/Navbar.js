import React, {useState} from 'react';
import {Link} from 'react-scroll';
import {Collapse, Navbar, NavbarToggler, Nav, NavItem} from 'reactstrap';

export default function AppNavbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  function mobileToggle() {
    if (window.outerWidth <= 1199) {
      toggle();
    }
  }

  return (
    <>
      <Navbar scrolling='true' dark expand='xl' className='main-nav'>
        {/* <Link
          to="landing"
          smooth={true}
          duration={800}
          className="white-font navbar-brand"
        >
          <img className="navbar-logo" src="logo/logo_white.png" alt="logo" />
        </Link> */}
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar className='white-font'>
          <Nav className='navbar' navbar>
            <NavItem>
              <Link
                to='landing'
                onClick={mobileToggle}
                smooth={true}
                duration={800}>
                Home
              </Link>
            </NavItem>
            <NavItem>
              <Link
                to='about'
                onClick={mobileToggle}
                smooth={true}
                duration={800}>
                About Me
              </Link>
            </NavItem>
            <NavItem>
              <Link
                to='my-process'
                onClick={mobileToggle}
                smooth={true}
                duration={800}>
                My Process
              </Link>
            </NavItem>
            <NavItem>
              <Link
                to='projects'
                onClick={mobileToggle}
                smooth={true}
                duration={800}>
                Projects
              </Link>
            </NavItem>
            <NavItem>
              <Link
                to='contact'
                onClick={mobileToggle}
                smooth={true}
                duration={800}>
                Contact
              </Link>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </>
  );
}
