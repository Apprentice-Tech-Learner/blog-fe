import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { RootState } from "store";
import {MdKeyboardArrowLeft, MdKeyboardArrowRight} from "react-icons/md";

const PreNext = () => {
    const { postData } = useSelector((state: RootState) => state.detailPost);
    const navigate = useNavigate();

    const index = postData.series.series_list.findIndex(i => i.post_id === postData.post_id);
    const currentSort = index + 1;
    const sortCount = postData.series.series_list.length;

    const preAbled = currentSort !== 1;
    const nextAbled = currentSort !== sortCount;

    const goToPre = () => {
        preAbled && navigate(`/post/${postData.series.series_list[index - 1].post_id}`);
    };

    const goToNext = () => {
        nextAbled && navigate(`/post/${postData.series.series_list[index + 1].post_id}`);
    };

    return (
        <div className='pre-next-container'>
            <div className='location-number'>{`${currentSort}/${sortCount}`}</div>
            <div className='btn-wrapper'>
                <button className={preAbled ? '' : 'disabled'} onClick={goToPre}>
                    <MdKeyboardArrowLeft />
                </button>
                <button className={nextAbled ? '' : 'disabled'} onClick={goToNext}>
                    <MdKeyboardArrowRight />
                </button>
            </div>
        </div>
    );
};

export default PreNext;
