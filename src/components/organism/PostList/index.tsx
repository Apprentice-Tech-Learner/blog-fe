import { useSelector } from "react-redux";

import { RootState } from "store";
import { usePost } from "hooks/usePost";

import PostListNavBar from "components/molecule/PostListNavBar";
import Post from "./Post";

const PostList = () => {
    const { name, query, pageNum } = useSelector((state: RootState) => state.navBar);
    const { postData, noMorePosts } = usePost(query, pageNum, name);

    return (
        <div className='post-list-controller'>
            <PostListNavBar />
            <div className='post-list-out-box'>
                <div className='post-list-inner-box'>
                    {
                        postData.length > 0 ?
                            postData.map((data, i) => {
                                return <Post key={i} postData={data} />;
                            })
                            :
                            <></>
                    }
                </div>
            </div>
        </div>
    );
};

export default PostList;
