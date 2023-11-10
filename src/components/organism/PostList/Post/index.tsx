import { Link } from "react-router-dom";

import Thumbnail from "components/atom/Thumbnail";
import PostInfo from "./PostInfo";
import UserInfo from "./UserInfo";

const Post = ({ postData }) => {
    const { post_id, thumbnail } = postData;

    return (
        <div className='post-container'>
            <Link to={`/post/${post_id}`} className='thumbnail-box'>
                <div className='thumbnail-cover'>
                    <Thumbnail src={thumbnail} />
                </div>
            </Link>
            <PostInfo postData={postData} />
            <UserInfo postData={postData} />
        </div>
    );
};

export default Post;
