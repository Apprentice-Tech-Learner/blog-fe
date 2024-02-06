import { useSelector } from "react-redux";

import { RootState } from "store";

import GetPostDate from "components/atom/GetPostDate";
import LikeBtn from "components/atom/LikeBtn";

const Information = ():JSX.Element => {
    const { postData } = useSelector((state: RootState) => state.detailPost);

    return (
        <div className='information-container'>
            <div className='information'>
                <span className='user-name'>{ postData.writer }</span>
                <span className='separator'>&#183;</span>
                <GetPostDate postDate={postData.created} />
            </div>
            <LikeBtn activeClassName='maxwidth-1023px-active' direction='row' />
        </div>
    )
}

export default Information;
