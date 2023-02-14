import React, { Fragment } from "react";

export interface LayoutProps {
    children: React.ReactNode;
}

export const Layout =
({ children }: LayoutProps): React.ReactElement => {
    return (
        <Fragment>
            <div className="layoutWrapper">
                <div className="layoutContent">
                    {children}
                </div>
            </div>
        </Fragment>
    );
};