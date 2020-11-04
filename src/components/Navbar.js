import React, {useState} from 'react';
import {Link as ScrollLink} from 'react-scroll';
import {Switch, Link} from 'react-router-dom';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from 'reactstrap';

export default function AppNavbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  function mobileToggle() {
    if (window.outerWidth <= 1199) {
      toggle();
    }
  }

  const toggleDropdown = () => setDropdownOpen((prevState) => !prevState);

  return (
    <>
      <Navbar scrolling='true' dark expand='xl' className='main-nav'>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar className='white-font'>
          <Nav className='navbar' navbar>
            <NavItem>
              <ScrollLink
                to='landing'
                onClick={mobileToggle}
                smooth={true}
                duration={800}>
                <Switch>
                  <Link to='/'>Home</Link>
                </Switch>
              </ScrollLink>
            </NavItem>

            <NavItem>
              <ScrollLink
                to='about'
                onClick={mobileToggle}
                smooth={true}
                duration={800}>
                <Switch>
                  <Link to='/'>About Me</Link>
                </Switch>
              </ScrollLink>
            </NavItem>

            <NavItem>
              <Dropdown isOpen={dropdownOpen} toggle={toggleDropdown}>
                <DropdownToggle caret>My Work</DropdownToggle>
                <DropdownMenu>
                  <DropdownItem>
                    <Switch>
                      <Link to='/app_designs'>App Designs</Link>
                    </Switch>
                  </DropdownItem>
                  <DropdownItem>
                    <Switch>
                      <Link to='/logos'>Logos</Link>
                    </Switch>
                  </DropdownItem>
                </DropdownMenu>
              </Dropdown>
            </NavItem>

            <NavItem>
              <ScrollLink
                to='contact'
                onClick={mobileToggle}
                smooth={true}
                duration={800}>
                <Switch>
                  <Link to='/'>Contact</Link>
                </Switch>
              </ScrollLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </>
  );
}
