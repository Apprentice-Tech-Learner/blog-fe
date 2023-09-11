import React, { Fragment, useState } from "react";
import { JduHeader } from "components/organism";
import AuthModal from "../../organism/AuthModal";

export interface LayoutProps {
    children: React.ReactNode;
}

export const Layout =
({ children }: LayoutProps): React.ReactElement => {
    const [isLoginModal, setIsLoginModal] = useState(false);

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
