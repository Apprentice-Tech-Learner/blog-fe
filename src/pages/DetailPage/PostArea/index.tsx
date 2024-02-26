import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import { RootState } from "store";
import PostHeader from "./PostHeader";
import Content from "./Content";
import UserBox from "../../../components/molecule/UserBox";

const PostArea = ():JSX.Element => {
    const { postData } = useSelector((state: RootState) => state.detailPost);
    const [ userInfo, setUserInfo ] = useState({});

    useEffect(() => {
        if (postData) {
            setUserInfo({
                user_id: postData.user.id,
                name: postData.user.name,
                profile_image: postData.user.profile_image,
                about_me: postData.user.about_me,
                is_writer: postData.is_writer,
                is_follower: postData.is_follower,
            });
        }
    }, [postData]);

    return (
        postData && (
            <div className='post-area-container'>
                <PostHeader />
                <Content />
                <UserBox className='post-area-user-info' userInfo={userInfo} />
            </div>
        )
    );
};

export default PostArea;
