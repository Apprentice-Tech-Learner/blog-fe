import { useSelector } from "react-redux";

import { RootState } from "store";
import PostHeader from "./PostHeader";

const PostArea = ():JSX.Element => {
    const { postData } = useSelector((state: RootState) => state.detailPost);

    return (
        postData && (
            <div className='post-area-container'>
                <PostHeader />
            </div>
        )
    );
};

export default PostArea;
