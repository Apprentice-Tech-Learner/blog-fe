type TPostViewer = {
    content: string,
}

const PostViewer = ({ content }: TPostViewer) => {
    return (
        <div className='post-viewer-container'>
            <div dangerouslySetInnerHTML={{ __html: content }}></div>
        </div>
    );
}

export default PostViewer;
