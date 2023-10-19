import React, {Fragment, useEffect, useState} from "react";
import { useNavigate } from "react-router-dom";

import { JduHeader } from "components/organism";
import AuthModal from "../../organism/AuthModal";

export interface LayoutProps {
    children: React.ReactNode;
}

export const Layout = ({ children }: LayoutProps): React.ReactElement => {
    const navigate = useNavigate();
    const [isLoginModal, setIsLoginModal] = useState(false);

    let token = localStorage.getItem('accessToken');

    useEffect(() => {
        if (!token && (window.location.pathname === '/saves' || 'write')) {
            navigate('/');
        }
    }, []);

    return (
        <Fragment>
            <div className="layoutWrapper">
                <JduHeader setIsLoginModal={setIsLoginModal}/>

                <div className="layoutContent">
                    {children}
                </div>
            </div>

            {isLoginModal && <AuthModal isLoginModal={isLoginModal} setIsLoginModal={setIsLoginModal} />}
        </Fragment>
    );
};
