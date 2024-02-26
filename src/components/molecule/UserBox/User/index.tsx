import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

import UserProfileImage from "components/atom/UserProfileImage";
import FollowButton from "components/atom/FollowButton";

const User = ({ userInfo }) => {
    const { is_writer, is_follower } = userInfo;
    const dispatch = useDispatch();

    const onFollow = async () => {

    };

    const unFollow = async () => {

    };

    return (
        <div className='user-container'>
            <div className='user'>
                <Link to={`/${userInfo.user_id}`}>
                    <UserProfileImage source={userInfo.profile_image} />
                </Link>
                {/*<div className='flex'>*/}
                    <div className='user-info'>
                        <div className='user-name'>
                            <Link to={`/${userInfo.user_id}`}>{userInfo.name}</Link>
                        </div>
                        <div className='description'>{userInfo.about_me}</div>
                    </div>
                {/*</div>*/}
            </div>
            {is_writer === 0 || (localStorage.getItem('authToken') && <FollowButton isFollower={is_follower} onClick={is_follower ? unFollow : onFollow} checked={is_follower === 1}/>)}
        </div>
    );
};

export default User;
