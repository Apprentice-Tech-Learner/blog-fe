import React from "react";
import {Link} from "react-router-dom";

type TToggleMenuList = {
    toggleMenuRef: React.RefObject<HTMLDivElement>,
    setIsToggleOpen: React.Dispatch<React.SetStateAction<boolean>>,
}

type toggleMenuProp = {
    name: string,
    path: string,
    onClickHandler: () => void,
}

const ToggleMenuList = ({ toggleMenuRef, setIsToggleOpen }: TToggleMenuList) => {
    const toggleMenuList: toggleMenuProp[] = [
        {
            name: '새 글 작성',
            path: '/write',
            onClickHandler: () => { }
        },
        {
            name: '로그아웃',
            path: '/',
            onClickHandler: async () => {
                await window.location.reload();
                localStorage.removeItem('accessToken');
                localStorage.removeItem('refreshToken');
                localStorage.removeItem('userId');
            },
        },
    ];

    return (
        <div className='toggle-menu-list-container' ref={toggleMenuRef} >
            {
                toggleMenuList.map(menu => {
                    return (
                        <Link
                            key={menu.name}
                            className='link-tag'
                            to={menu.path}
                            onClick={() => {
                                setIsToggleOpen(false);
                                menu.onClickHandler();
                            }}
                        >
                            {menu.name}
                        </Link>
                    );
                })
            }
        </div>
    )
}

export default ToggleMenuList;
