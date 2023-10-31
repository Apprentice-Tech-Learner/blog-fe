import { MdPlaylistAdd } from "react-icons/md";

type TBefore = {
    getSeriesList: () => Promise<void>,
}

const Before = ({ getSeriesList }: TBefore):JSX.Element => {
    return (
        <div className='setting-series-before-container' onClick={getSeriesList}>
            <MdPlaylistAdd />
            시리즈에 추가하기
        </div>
    );
}

export default Before;
