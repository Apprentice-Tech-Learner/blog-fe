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
    const { headerTitle, activeHeaderTitle, userId } = usePathMatch();
    const headerLenderCondition = window.location.pathname === '/write' || window.location.pathname === '/registry';
    const postListNavBarCondition = window.location.pathname === '/';

    const [ScrollY, setScrollY] = useState(0);
    const [scrollActive, setScrollActive] = useState(false);
    const headerRef = useRef<HTMLDivElement>(null);

    return (
        <>
            {headerLenderCondition ? null : (
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
                            {scrollActive && postListNavBarCondition} {/* TODO : post list navbar*/}
                        </div>
                    </div>
                </>
            )}
        </>
    );
};

export default JduHeader;
