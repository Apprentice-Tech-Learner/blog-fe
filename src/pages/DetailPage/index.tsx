import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { toast } from "react-toastify";

import { RootState } from "store";

import { apiClient } from "common";
import { Toastify } from "components/atom";
import { initializeDetail, setDetailPostData } from "store/post";

import PostArea from "./PostArea";

const DetailPage = (): JSX.Element => {
    const dispatch = useDispatch();
    const location = useLocation();
    const { postData } = useSelector((state: RootState) => state.detailPost);

    const getPostData = async () => {
        const isLogin = () => {
            if (localStorage.getItem('accessToken')) {
                return `Bearer ${localStorage.getItem('accessToken')}`;
            }
            return;
        };

        try {
            const config = {
                headers: { Authorization: isLogin() },
            };
            const { data } = await apiClient.get(`${location.pathname}`, config);
            console.log(data);
            dispatch(setDetailPostData(data));
        } catch (error) {
            toast.error('게시글을 불러오지 못했습니다.');
            console.log(error);
        }
    };

    useEffect(() => {
        getPostData();
        return () => {
            dispatch(initializeDetail());
        };
    }, [location.pathname]);

    return (
        <>
            <Toastify />
            {postData && (
                <div className='post-detail-page-container'>
                    <PostArea />
                </div>
            )}
        </>
    );
}

export default DetailPage;
