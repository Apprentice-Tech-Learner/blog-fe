import { useSelector } from "react-redux";

import PostViewer from "components/atom/PostViewer";

import { RootState } from "store";

const Content = () => {
    const { postData } = useSelector((state: RootState) => state.detailPost);

    return (
        <div className='content-container'>
            <PostViewer content={postData.content} />
        </div>
    );
};

export default Content;
