import React from 'react';
import { Container, Nav, Navbar, Stack } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="#home">ToDo</Navbar.Brand>
                <Nav className="ms-auto">
                    <Stack direction="horizontal" gap={4}>
                        <NavLink to="/todo" activeStyle={{
                            fontWeight: "bold",
                            color: "#fff"
                        }} style={{ color: 'gray', textDecoration: 'none', fontSize:'16px' }}>ToDo</NavLink>
                        <NavLink to="/chart" activeStyle={{
                            fontWeight: "bold",
                            color: "#fff"
                        }} style={{ color: 'gray', textDecoration: 'none', fontSize:'16px' }}>Assignment Mark</NavLink>
                    </Stack>
                </Nav>
            </Container>
        </Navbar>
    );
};

export default Navigation;