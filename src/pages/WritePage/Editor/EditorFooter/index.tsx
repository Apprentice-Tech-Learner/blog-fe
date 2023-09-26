import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";

import { BiArrowBack } from "react-icons/bi";
import { Button } from "components/atom";
import { RootState } from "store";
import { setWritePost } from "store/post";

const EditorFooter = () => {
    const { title, content, thumbnail, tags, seriesId, description } = useSelector((state: RootState) => state.writePost);
    const dispatch = useDispatch();

    const onSave = async () => {
        if (title && content) {
            try {

                toast.success('게시글 임시저장 완료');
            } catch (error) {
                toast.error('게시글 임시저장 실패');
                console.log(error);
            }
        } else {
            toast.error('제목 또는 내용이 비어있습니다.');
        }
    }

    const onUploadModal = () => {
        dispatch(setWritePost({ type: 'isUploadModal', value: true }));
    };

    return (
        <div className='editor-footer-positioner'>
            <div className='editor-footer-container'>
                <a className='exit' href='/'>
                    <BiArrowBack className='arrow-icon' />
                    <span>나가기</span>
                </a>
                <div className='export'>
                    <Button text='임시저장' className='temporary-storage' color='transparent' onClick={onSave} />
                    <Button text='출간하기' className='upload' color='teal' onClick={onUploadModal} />
                </div>
            </div>
        </div>
    );
}

export default EditorFooter;
