import { Link } from "react-router-dom";
import { AiFillHeart } from "react-icons/ai";

const UserInfo = ({ postData }) => {
    const { writer, likes } = postData;

    return (
        <div className='user-info-container'>
            <Link to={`/${writer}`} className='user'>
                <span className='profile-img'>
                    {/* TODO user profile_img set */}
                </span>
                <span className='user-by'>
                    by <span className='user-name'>{writer}</span>
                </span>
            </Link>
            <div className='likes'>
                <AiFillHeart className='heart' />
                <span className='like-count'>{likes}</span>
            </div>
        </div>
    );
};

export default UserInfo;
