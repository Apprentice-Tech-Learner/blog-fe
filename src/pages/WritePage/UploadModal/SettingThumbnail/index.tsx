import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { SlPicture } from "react-icons/sl";
import { toast } from "react-toastify";

import { apiClient } from "common/axios";
import { RootState } from "store";
import { setWritePost } from "store/post";

import { Toastify } from "components/atom";
import ContentWrapper from "../ContentWrapper";

const SettingThumbnail = ():JSX.Element => {
    const { thumbnail } = useSelector((state: RootState) => state.writePost);
    const thumbnailInput = useRef<HTMLInputElement>(null);
    const dispatch = useDispatch();

    const handleClick = () => {
        thumbnailInput.current?.click();
    };

    const saveFileImage = async (e: React.ChangeEvent<HTMLInputElement>) => {
        try {
            e.preventDefault();
            const formData = new FormData();
            if (!e.currentTarget.files) {
                toast.error('이미지 업로드 실패');
                return;
            }

            formData.append('image', e.currentTarget.files[0]);

            const config = {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
                    'Content-Type': 'multipart/form-data',
                },
            };
            toast.success('이미지 로딩중...');
            const response = await apiClient.post(`/upload`, formData, config);
            dispatch(setWritePost({ type: 'thumbnail', value: `${response.data}` }));
            toast.success('이미지 업로드 완료');
        } catch (error) {
            toast.error('이미지 업로드 실패');
            console.log(error);
        }
    };

    const removeFileImage = () => {
        dispatch(setWritePost({ type: 'thumbnail', value: '' }));
    };

    return (
        <ContentWrapper contentTitle={'포스트 미리보기'}>
            <div className='setting-thumbnail-container'>
                {thumbnail ? (
                    <div className='have-thumbnail'>
                        <p>
                            <span onClick={handleClick}>
                                재업로드
                                <input type='file' accept='image/jpg, image/jpeg, image/png' multiple ref={thumbnailInput} onChange={saveFileImage} style={{ display: 'none' }} />
                            </span>
                            &#183;
                            <span onClick={removeFileImage}>제거</span>
                        </p>
                        <div className='thumbnail-img-wrapper'>
                            <img src={thumbnail} alt='thumbnail' />
                        </div>
                    </div>
                ) : (
                    <div className='none-thumbnail'>
                        <SlPicture className='thumbnail-icon' />
                        <button onClick={handleClick}>
                            썸네일 업로드
                            <input type='file' accept='image/jpg, image/jpeg, image/png' multiple ref={thumbnailInput} onChange={saveFileImage} style={{ display: 'none' }} />
                        </button>
                    </div>
                )}
            </div>
            <Toastify />
        </ContentWrapper>
    );
}

export default SettingThumbnail;
