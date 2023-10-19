import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { IoEarth } from "react-icons/io5";
import { IoIosLock } from "react-icons/io";

import { RootState } from "store";
import { setWritePost } from "store/post";
import ContentWrapper from "../ContentWrapper";

const SettingPublic = ():JSX.Element => {
    const { uploadType } = useSelector((state: RootState) => state.writePost);
    const initialValue = uploadType === 2 ? [false, true] : [true, false];
    const [btnActive, setBtnActive] = useState(initialValue);
    const dispatch = useDispatch();

    const btnList = [
        {
            type: 'public-btn',
            icon: <IoEarth className='icon' />,
            text: '전체 공개',
            isActive: btnActive[0],
        },
        {
            type: 'private-btn',
            icon: <IoIosLock className='icon' />,
            text: '비공개',
            isActive: btnActive[1],
        },
    ];

    const changePublic = (e: React.MouseEvent<HTMLButtonElement>) => {
        const btnType = e.currentTarget.className;

        if (btnType.includes(`public-btn`)) {
            const changedActive = [true, false];
            setBtnActive(changedActive);
            dispatch(setWritePost({ type: 'uploadType', value: 1 }));
        } else {
            const changedActive = [false, true];
            setBtnActive(changedActive);
            dispatch(setWritePost({ type: 'uploadType', value: 2 }));
        }
    };

    return (
        <ContentWrapper contentTitle={'공개 설정'}>
            <div className='setting-public-container'>
                <div className='btn-container'>
                    {btnList.map(btn => {
                        return (
                            <button key={btn.type} className={btn.isActive ? `${btn.type} active` : btn.type} onClick={changePublic}>
                                {btn.icon}
                                <div className='text'>{btn.text}</div>
                            </button>
                        )
                    })}
                </div>
            </div>
        </ContentWrapper>
    );
}

export default SettingPublic;
