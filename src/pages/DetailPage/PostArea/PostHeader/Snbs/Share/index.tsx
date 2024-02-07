import { useState } from "react";
import classNames from "classnames";

import { BsFacebook, BsTwitter } from "react-icons/bs";
import { FiPaperclip } from "react-icons/fi";
import {GiShare} from "react-icons/gi";

const Share = () => {
    const [isShare, setIsShare] = useState(false);

    const changeShare = () => {
        setIsShare(!isShare);
    };

    return (
        <div className={classNames('share-container', isShare ? 'shared' : '')}>
            <div className='share-child-positioner'>
                <div className={classNames('icon-circle-wrapper facebook', isShare ? 'shared' : '')} >
                    <BsFacebook />
                </div>
                <div className={classNames('icon-circle-wrapper twitter', isShare ? 'shared' : '')} >
                    <BsTwitter />
                </div>
                <div className={classNames('icon-circle-wrapper clip', isShare ? 'shared' : '')} >
                    <FiPaperclip />
                </div>
            </div>
            <div className='icon-circle-wrapper' onClick={changeShare}>
                <GiShare />
            </div>
        </div>
    );
};

export default Share;
