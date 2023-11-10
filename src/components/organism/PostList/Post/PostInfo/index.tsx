import { Link } from "react-router-dom";

import GetPostDate from "components/atom/GetPostDate";

const PostInfo = ({ postData }) => {
    const { updated, post_id, title, description } = postData;

    return (
        <div className='post-info-container'>
            <Link to={`/post/${post_id}`}>
                <h4 className='post-title'>{title}</h4>
                <div className='main-text'>{description}</div>
            </Link>
            <div className='sub-info'>
                <GetPostDate postDate={updated} />
            </div>
        </div>
    );
};

export default PostInfo;
