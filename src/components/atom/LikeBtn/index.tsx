import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import classNames from "classnames";

import { FaHeart } from "react-icons/fa";

import { RootState } from "store";
import { apiClient } from "common";

const LikeBtn = ({ activeClassName, direction }):JSX.Element => {
    const { postData } = useSelector((state: RootState) => state.detailPost);

    const [likeCount, setLikeCount] = useState(0);
    const [isUserLike, setIsUserLike] = useState(false);

    useEffect(() => {
        setLikeCount(postData.likes);
        setIsUserLike(postData.be_liked);
    }, [postData]);

    const like = async () => {
        try {
            const config = {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
                },
            };

            await apiClient.post(`/post/${postData.post_id}/like`, '', config);
            setLikeCount(prev => prev + 1);
            setIsUserLike(true);
        } catch (error) {
            console.log(`like error => `, error);
        }
    };

    const unLike = async () => {
        try {
            const config = {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
                },
            };

            await apiClient.delete(`/post/${postData.post_id}/like`, config);
            setLikeCount(prev => prev - 1);
            setIsUserLike(false);
        } catch (error) {
            console.log(`unlike error => `, error);
        }
    }

    const changeLike = e => {
        const isLike = e.target.className.includes('active');
        isLike ? unLike() : like();
    }

    return (
        <div className={classNames('atom-like-btn-container', direction)}>
            <div className={isUserLike ? `like-icon-container ${activeClassName}` : 'like-icon-container'} onClick={changeLike}>
                <FaHeart />
                {direction === 'row' && <div className='like-count'>{likeCount}</div> }
            </div>
            {direction === 'column' && <div className='like-count'>{likeCount}</div> }
        </div>
    );
};

export default LikeBtn;
