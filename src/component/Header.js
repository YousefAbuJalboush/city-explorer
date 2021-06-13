import React, { Component } from 'react'

import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'

export class Header extends Component {
    render() {
        return (
            <>
                <Navbar bg="dark" variant="dark">
                    <Container>
                        <Navbar.Brand href="#">City explorer</Navbar.Brand>
                        <Nav className="me-auto">
                            <Nav.Link href="#">Home</Nav.Link>
                            {/* <Nav.Link href="#features">Features</Nav.Link> */}
                            {/* <Nav.Link href="#pricing">Pricing</Nav.Link> */}
                        </Nav>
                    </Container>
                </Navbar>

            </>
        )
    }
}

export default Header
