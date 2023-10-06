import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { VscTriangleDown } from 'react-icons/vsc';

import { SearchIcon } from "asset/svgs";
import ThemeMode from "./ThemeMode";
import ToggleMenuList from "./ToggleMenuList";

type TRightHeader = {
    setIsLoginModal: React.Dispatch<React.SetStateAction<boolean>>,
}

const RightHeader = ({ setIsLoginModal }: TRightHeader) => {
    const isLogin = localStorage.getItem('accessToken') !== null;
    const [isToggleOpen, setIsToggleOpen] = useState(false);
    const toggleRef = useRef<HTMLDivElement>(null);
    const toggleMenuRef = useRef<HTMLDivElement>(null);

    return (
        <div className='right-menu-container'>
            <ThemeMode />
            <Link className='setting-hover search' to='/search'>
                <SearchIcon />
            </Link>
            {
                isLogin ? (
                    <>
                        <Link className='hover-link-btn new-post' to='/write'>
                            새 글 작성
                        </Link>
                        <div className='toggle-open-container' ref={toggleRef} onClick={() => setIsToggleOpen(!isToggleOpen)}>
                            {/*<UserProfileImage source={localStorage.getItem('userProfileImg') === 'null' ? false : localStorage.getItem('userProfileImg')} />*/}
                            <VscTriangleDown className='toggle' />
                            {isToggleOpen && <ToggleMenuList toggleMenuRef={toggleMenuRef} setIsToggleOpen={setIsToggleOpen} />}
                        </div>
                    </>
                ) : (
                    <button className='hover-link-btn login' onClick={() => setIsLoginModal(true)}>
                        로그인
                    </button>
                )
            }
        </div>
    )
}

export default RightHeader;
