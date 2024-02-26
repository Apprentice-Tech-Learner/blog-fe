import { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { apiClient } from "common";
import { RootState } from "store";

import ConfirmModal from "components/organism/ConfirmModal";

const Authority = (): JSX.Element => {
    const navigate = useNavigate();
    const { postData } = useSelector((state: RootState) => state.detailPost);
    const [isDelModal, setIsDelModal] = useState(false);

    const deletePost = async () => {
        try {
            const config = {
                headers: { Authorization: `Bearer ${localStorage.getItem('accessToken')}` },
            };
            await apiClient.delete(`/post/${postData.post_id}`, config);
            navigate(`/${postData.writer}`);
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className='authority-container'>
            <button onClick={() => navigate(`/write?id=${postData.post_id}&status=${postData.status}`)}>수정</button>
            <button onClick={() => setIsDelModal(true)}>삭제</button>
            {
                isDelModal &&
                <ConfirmModal title='포스트 삭제' message='정말로 삭제하시겠습니까?'
                              onClose={() => setIsDelModal(false)}
                              onMove={deletePost} />
            }
        </div>
    );
}

export default Authority;
