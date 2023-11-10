import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";

import { RootState } from "store";
import { resetPageNum, setName, setQuery } from "store/navbar";
import PostList from "../../components/organism/PostList";

const RootPage = (): JSX.Element => {
    const location = useLocation();
    const pathname = location.pathname;
    const dispatch = useDispatch();
    const { name } = useSelector((state: RootState) => state.navBar);

    useEffect(() => {
        if (pathname === '/') {
            dispatch(setName('trend'));
            dispatch(setQuery('week'));
        } else if (pathname === 'recent') {
            dispatch(setName('recent'));
            dispatch(setQuery(''));
        } else if (pathname === 'follow') {
            dispatch(setName('follow'));
            dispatch(setQuery(''));
        }
        dispatch(resetPageNum());
        return;
    }, [pathname]);

    return name && <PostList />
}

export default RootPage
