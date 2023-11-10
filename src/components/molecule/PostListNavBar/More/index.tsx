import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import classNames from "classnames";

import { FiMoreVertical } from "react-icons/fi";

const More = () => {
    const navigate = useNavigate();
    const [isToggle, setIsToggle] = useState(false);
    const toggleBoxRef = useRef<HTMLDivElement>();
    const toggleBtnRef = useRef<HTMLDivElement>();

    const moreContentList = [
        {
            name: '공지사항',
            path: '',
        },
        {
            name: '태그 목록',
            path: '',
        },
        {
            name: '만든이',
            path: '',
        },
    ];

    useEffect(() => {
        const clickOutside = e => {
            if (isToggle && !toggleBoxRef.current.contains(e.target) && toggleBtnRef.current.contains(e.target)) {
                setIsToggle(false);
            }
        };

        document.addEventListener('mousedown', clickOutside);

        return () => {
            document.removeEventListener('mousedown', clickOutside);
        };
    }, [isToggle]);

    return (
        <div className='post-list-nav-bar-more'>
            <div className='more-icon' ref={toggleBtnRef} onClick={() => setIsToggle(!isToggle)}>
                <FiMoreVertical className='icon' />
            </div>
            <div className={classNames('more-box', isToggle ? 'toggle' : '')}>
                <ul>
                    {
                        moreContentList.map(content => (
                            <li
                                key={content.name}
                                className='content'
                                onClick={() => {
                                    navigate(content.path);
                                    setIsToggle(false);
                                }}
                            >
                                {content.name}
                            </li>
                        ))
                    }
                </ul>
            </div>
        </div>
    );
};

export default More;
