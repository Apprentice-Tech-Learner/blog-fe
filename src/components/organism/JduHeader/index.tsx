import { useState } from "react";
import { Link } from "react-router-dom";
import { Button, Container, Nav, Navbar } from "react-bootstrap";

import { SearchIcon, SunIcon, MoonIcon } from "asset/svgs";

export const JduHeader = (): JSX.Element => {
    const [darkMode, setDarkMode] = useState(true);

    const handleMode = () => {
        setDarkMode((prev) => !prev);
    }

    return (
        <Navbar expand="sm" className="bg-body-tertiary">
            <Container fluid>
                <Navbar.Brand className="jdu-nav-brand">JduLog</Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end">
                    <Nav>
                        <Link to="#" className="jdu-btn" onClick={handleMode}>
                            {darkMode ? <SunIcon className="mode"/> : <MoonIcon className="mode"/>}
                        </Link>
                        <Link to="#" className="jdu-btn"><SearchIcon /></Link>
                        <Button variant="dark">로그인</Button>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default JduHeader;