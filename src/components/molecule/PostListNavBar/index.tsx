import { useLocation, useNavigate } from "react-router-dom";
import classNames from "classnames";

import { SlGraph } from "react-icons/sl";
import { IoPeople } from "react-icons/io5";
import { AiOutlineClockCircle } from "react-icons/ai";

import PeriodFilter from "./PeriodFilter";
import More from "./More";

const PostListNavBar = () => {
    const isLogin = localStorage.getItem('accessToken');
    const location = useLocation();
    const navigate = useNavigate();
    const navBar = [
        {
            name: '트렌딩',
            icon: <SlGraph className='icon' />,
            path: '/',
            query: 'trend',
            view: true,
        },
        {
            name: '최신',
            icon: <AiOutlineClockCircle className='icon' />,
            path: '/recent',
            query: 'recent',
            view: false,
        },
        {
            name: '팔로우',
            icon: <IoPeople className='icon' />,
            path: '/follow',
            query: 'follow',
            view: false,
        }
    ];

    return (
        <div className='post-list-nav-bar-container'>
            <div className='nav'>
                <div className={classNames('post-list-nav-bar-nav-tab', isLogin ? 'login' : '')}>
                    {
                        navBar.map( navItem => (
                            <button
                                className={classNames('post-list-nav-bar-button', isLogin ? 'login' : '', location.pathname === navItem.path ? 'path' : '')}
                                key={navItem.name}
                                onClick={() => {
                                    navigate(`${navItem.path}`);
                                }}
                                disabled={location.pathname === navItem.path}
                            >
                                {navItem.icon}
                                {navItem.name}
                            </button>
                        ))
                    }
                    <div className={classNames('post-list-nav-bar-slide-border', isLogin ? 'login' : '', location.pathname === '/' ? 'root' : location.pathname === '/recent' ? 'recent' : 'follow')} />
                </div>
                {location.pathname === '/' && <PeriodFilter />}
            </div>
            <More />
        </div>
    );
};

export default PostListNavBar;
