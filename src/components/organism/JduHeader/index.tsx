import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import classNames from "classnames";

import { useDispatch, useSelector } from "react-redux";

import darkLogo from 'asset/images/darkLogo.png';
import lightLogo from 'asset/images/darkLogo.png';

import { usePathMatch } from "hooks";
import { RootState } from "store";
import RightHeader from "./RightHeader";

type TJduHeader = {
    setIsLoginModal : React.Dispatch<React.SetStateAction<boolean>>,
}

export const JduHeader = ( { setIsLoginModal }: TJduHeader ): JSX.Element => {
    const dispatch = useDispatch();
    const isDarkMode = useSelector((state: RootState) => state.darkMode.isDarkMode);
    const headerRef = useRef<HTMLDivElement>(null);
    const { headerTitle, activeHeaderTitle, userId } = usePathMatch();

    const [scrollActive, setScrollActive] = useState(false);

    const renderCondition = window.location.pathname === '/write' || window.location.pathname === '/registry';

    return (
        <>
            {renderCondition ? null : (
                <>
                    <div className={classNames('jdu-header-container', scrollActive ? 'scroll-active' : '')} ref={headerRef} >
                        <div className={scrollActive ? 'header-fixed' : 'header'}>
                            <div className='header-content'>
                                <span className='logo-box'>
                                    <Link
                                      className='logo'
                                      to='/'
                                      onClick={() => {
                                          // dispatch(resetPageNum());
                                      }}
                                    >
                                        <span>JduLog</span>
                                    </Link>

                                    {activeHeaderTitle && (
                                        <Link className='header-title' to={`/${userId}`}>
                                            {headerTitle}
                                        </Link>
                                    )}
                                </span>
                                <RightHeader setIsLoginModal={setIsLoginModal} />
                            </div>
                        </div>
                    </div>
                </>
            )}
        </>
    );
};

export default JduHeader;
