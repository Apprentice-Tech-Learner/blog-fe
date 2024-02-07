import { useSelector } from "react-redux";

import { RootState } from "store";

import Authority from "./Authority";
import Information from "./Information";
import Tags from "./Tags";
import Snbs from "./Snbs";
import Series from "./Series";

const PostHeader = ():JSX.Element => {
    const { postData } = useSelector((state: RootState) => state.detailPost);

    const is_writer = (writer): boolean => {
        return writer === localStorage.getItem('userId');
    }

    return (
        <div className='post-header-container'>
            <h1 className='post-header-title'>{postData.title}</h1>
            {is_writer(postData.writer) ? <Authority /> : null}
            <Information />
            <Tags />
            <Snbs />
            {postData.series && <Series />}
        </div>
    );
}

export default PostHeader;
