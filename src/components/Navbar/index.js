import React from 'react'
import {
  Navbar,
  Nav,
  NavDropdown,
  Form,
  FormControl,
  Button,
} from 'react-bootstrap'

function Navigation() {
  return (
    <Navbar expand='false' sticky='top'>
      <Navbar.Toggle aria-controls='main-navigation' className='' />
      <Navbar.Brand href='#home'>cloth & fashio</Navbar.Brand>
      <Nav.Link href='#login'>login</Nav.Link>
      <Navbar.Collapse>
        <Form inline>
          <FormControl type='text' placeholder='Search' className='mr-sm-2' />
          <Button variant='outline-success'>Search</Button>
        </Form>
        <Nav className='mr-auto'>
          <Nav.Link href='#action/3.1'>
            Action
            <NavDropdown title='' id='basic-nav-dropdown'>
              <NavDropdown.Item href='#action/3.4'>
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav.Link>
          <Nav.Link href='#action/3.2'>Another action</Nav.Link>
          <Nav.Link href='#action/3.3'>Something</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default Navigation
