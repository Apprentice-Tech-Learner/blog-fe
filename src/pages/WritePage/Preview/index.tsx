import { useSelector } from "react-redux";

import PostViewer from "components/atom/PostViewer";

import { RootState } from "store";

const Preview = () => {
    const { title, content } = useSelector((state: RootState) => state.writePost);

    return (
        <div className='preview-container'>
            <div className='wrapper'>
                <h1 className='preview-title'>{title}</h1>
                <PostViewer content={content} />
            </div>
        </div>
    );
}

export default Preview;
