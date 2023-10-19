import React from "react";

type TContentWrapper = {
    contentTitle: string,
    children: React.ReactNode,
}

const ContentWrapper = ({ contentTitle, children }: TContentWrapper):JSX.Element => {
    return (
        <section className='content-wrapper-container'>
            <h3>{contentTitle}</h3>
            <div className='content'>{children}</div>
        </section>
    );
}

export default ContentWrapper;
