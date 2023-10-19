import { useEffect } from "react";
import {useDispatch, useSelector} from "react-redux";
import { useLocation } from "react-router-dom";
import { toast } from "react-toastify";
import queryString from "query-string";

import { apiClient } from "common/axios";
import { RootState } from "store";
import { initialize, setWritePost } from "store/post";
import { Toastify } from "components/atom";

import Editor from "./Editor";
import Preview from "./Preview";
import UploadModal from "./UploadModal";

const WritePage = (): JSX.Element => {
    const { isUploadModal } = useSelector((state:RootState) => state.writePost);
    const dispatch = useDispatch();
    const location = useLocation();

    const initialSetting = async (postId: Array<string | null> | string, postStatus: Array<string | null> | null | string) => {
        try {
            const config = {
                headers: { Authorization: `Bearer ${localStorage.getItem('accessToken')}` },
            };
            const { data } = await apiClient.get(`/post/${postId}`, config);
            dispatch(setWritePost({ type: 'title', value: data.title }));
            dispatch(setWritePost({ type: 'content', value: data.content }));
            dispatch(setWritePost({ type: 'thumbnail', value: data.thumbnail }));
            if (data.tags) {
                let tags: any[] = [];
                data.tags.map((tag: any) => {
                    tags.push(tag.tag.name);
                });
                dispatch(setWritePost({ type: 'tags', value: tags }));
            } else {
                dispatch(setWritePost({ type: 'tags', value: [] }));
            }

            if (postStatus === '3') {
                toast.success('임시글 불러오기 성공');
            } else {
                dispatch(setWritePost({ type: 'seriesId', value: data.series ? data.series[0].series_id : null }));
                dispatch(setWritePost({ type: 'uploadType', value: data.status }));
                dispatch(setWritePost({ type: 'description', value: data.description }));
            }
        } catch (error) {
            toast.error('게시글 불러오기 실패');
            console.log(error);
        }
    }

    useEffect(() => {
        const setInitialValue = () => {
            const postInfo = queryString.parse(location.search);
            if (postInfo.id) {
                initialSetting(postInfo.id, postInfo.status);
            }
        };
        setInitialValue();
    }, [location.search]);

    useEffect(() => {
        return () => {
            dispatch(initialize());
        };
    }, []);

    return (
        <div className='write-container'>
            <>
                <Editor />
                <Preview />
            </>
            {isUploadModal && <UploadModal />}
            <Toastify />
        </div>
    )
}

export default WritePage;
