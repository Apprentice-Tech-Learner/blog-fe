import React, { Fragment } from "react";
import { JduHeader } from "components/organism";

export interface LayoutProps {
    children: React.ReactNode;
}

export const Layout =
({ children }: LayoutProps): React.ReactElement => {
    return (
        <Fragment>
            <div className="layoutWrapper">
                <JduHeader />

                <div className="layoutContent">
                    {children}
                </div>
            </div>
        </Fragment>
    );
};