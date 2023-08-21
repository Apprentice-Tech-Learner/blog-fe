import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Button, Container, Nav, Navbar } from "react-bootstrap";

import { SearchIcon, SunIcon, MoonIcon } from "asset/svgs";
import { useDispatch, useSelector } from "react-redux";

import { RootState } from "store";
import { darkMode, lightMode } from "store/common";

export const JduHeader = (): JSX.Element => {
    const isDarkMode = useSelector((state: RootState) => state.darkMode.isDarkMode);
    const dispatch = useDispatch();

    useEffect(() => {
        isDarkMode? dispatch(darkMode()) : dispatch(lightMode());
    }, []);

    const changeTheme = (e: any) => {
        isDarkMode? dispatch(lightMode()) : dispatch(darkMode());
    };

    return (
        <Navbar expand="sm" className="bg-body-tertiary">
            <Container fluid>
                <Navbar.Brand className="jdu-nav-brand">JduLog</Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end">
                    <Nav>
                        <div className="jdu-btn theme-mode-change" onClick={changeTheme}>
                            {isDarkMode ? <MoonIcon/> : <SunIcon/>}
                        </div>
                        <div className="jdu-btn"><SearchIcon /></div>
                        <Button variant="dark">로그인</Button>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default JduHeader;
