import {useCallback, useEffect, useState} from "react";
import {useLocation} from "react-router-dom";
import {apiClient} from "../common";

export const usePost = (query, pageNum, name) => {
    const [postData, setPostData] = useState([]);
    const [noMorePosts, setNoMorePosts] = useState(false);
    const location = useLocation();

    const getPostData = useCallback(async () => {
        try {
            const isLogin = () => {
                if (location.pathname === '/follow' && localStorage.getItem('accessToken')) {
                    return `Bearer ${localStorage.getItem('accessToken')}`;
                }
                return;
            };

            const config = {
                headers: {
                    Authorization: isLogin(),
                },
            };

            const { data } = await apiClient.get(`/post?type=${name}&period=${query}&offset=${pageNum}&limit=30`, config);

            if (data.length) {
                if (pageNum === 1) {
                    setPostData([]);
                    setPostData(data);
                } else {
                    setPostData(prev => [...prev, ...data]);
                }
                setNoMorePosts(true);
            } else {
                if (postData.length && pageNum === 1) {
                    setPostData([]);
                }
                setNoMorePosts(false);
            }
        } catch (error) {
            console.log('메인페이지 게시글 통신 오류 => ', error);
        }
    }, [query, pageNum, name]);

    useEffect(() => {
        getPostData();
    }, [query, pageNum, name]);

    return { postData, noMorePosts };
};
