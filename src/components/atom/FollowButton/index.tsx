import {Button} from "../Button";
import {FiUserCheck, FiUserPlus} from "react-icons/fi";

const FollowButton = ({ isFollower, checked, onClick }) => {
    return (
        <div className='follow-button-container'>
            <Button
                icon={isFollower || checked ? <FiUserCheck /> : <FiUserPlus />}
                text={isFollower || checked ? '구독 중' : '구독하기'}
                color={isFollower || checked ? 'teal' : 'darkgray'}
                onClick={onClick}
            />
        </div>
    );
};

export default FollowButton;
