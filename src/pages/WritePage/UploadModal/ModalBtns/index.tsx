import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import { apiClient } from "common";
import { Button, Toastify } from "components/atom";
import { RootState } from "store";
import { setWritePost } from "store/post";
import querystring from "query-string";

const ModalBtns = ():JSX.Element => {
    const { title, content, thumbnail, tags, seriesId, uploadType, uploadUrl, description, isSeriesList } = useSelector((state: RootState) => state.writePost);
    const dispatch = useDispatch();
    const location = useLocation();
    const navigate = useNavigate();

    const closeSeriesList = () => {
        dispatch(setWritePost({ type: 'isSeriesList', value: false }));
    };

    const closeUploadModal = () => {
        dispatch(setWritePost({ type: 'isUploadModal', value: false }));
    };

    const onUpload = async () => {
        if (title && content) {
            const postInfo = querystring.parse(location.search);

            try {
                const config = {
                    headers: { Authorization: `Bearer ${localStorage.getItem('accessToken')}` },
                };
                const bodyData = {
                    title: title,
                    content: content,
                    thumbnail: thumbnail,
                    tags: tags,
                    series_id: seriesId,
                    status: uploadType,
                    description: description,
                };

                if (postInfo.id) {
                    const response = await apiClient.patch(`/post/${postInfo.id}`, bodyData, config);
                    navigate(`/post/${response.data.post_id}`);
                } else {
                    const response = await apiClient.post(`/post`, bodyData, config);
                    navigate(`/post/${response.data.post_id}`);
                }
            } catch (error) {
                toast.error('게시글 업로드 실패');
                console.log(error);
            }
        } else {
            toast.error('제목 또는 내용이 비어있습니다.');
        }
    };

    useEffect(() => {
        return () => {
            dispatch(setWritePost({ type: 'isUploadModal', value: false }));
        };
    }, []);

    return (
        <div className='modal-btns-container'>
            <Button text='취소' color='transparent' onClick={isSeriesList ? closeSeriesList : closeUploadModal} />
            <Button text={isSeriesList ? '선택하기' : '출간하기'} color='teal' onClick={isSeriesList ? closeSeriesList : onUpload} />
            <Toastify />
        </div>
    );
}

export default ModalBtns;
