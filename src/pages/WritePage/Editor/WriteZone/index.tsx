import { useMemo, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import ReactQuill from "react-quill";

import { Toastify } from "components/atom";
import { RootState } from "store";
import { setWritePost } from "store/post";

import 'react-quill/dist/quill.snow.css';

const WriteZone = () => {
    const { content } = useSelector((state: RootState) => state.writePost);
    const dispatch = useDispatch();
    const quillRef = useRef<ReactQuill>(null);

    const formats = ['header', 'bold', 'italic', 'strike', 'blockquote', 'link', 'image', 'code'];

    const imageHandler = () => {
        const input = document.createElement('input');
    }

    const modules = useMemo(() => {
        return {
            toolbar: {
                container: '#toolbar',
                handlers: {
                    image: imageHandler,
                },
            },
        };
    }, []);

    const handleText = (value: string) => {
        dispatch(setWritePost({ type: 'content', value: value }));
    };

    return (
        <div className='write-zone-container'>
            <ReactQuill ref={quillRef} placeholder='포스트 내용을 입력해주세요.' style={{ height: '100%', width: '100%' }}
                theme='snow' modules={modules} formats={formats} value={content} onChange={handleText} />
            <Toastify />
        </div>
    )
}

export default WriteZone;
