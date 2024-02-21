import { useState } from "react";
import { useSelector } from "react-redux";

import { ImBookmark } from "react-icons/im";
import { RootState } from "store";
import RouterList from "./RouterList";
import ListToggle from "./ListToggle";
import PreNext from "./PreNext";

const Series = () => {
    const { postData } = useSelector((state: RootState) => state.detailPost);
    const [isToggle, setIsToggle] = useState(false);
    const seriesTitle = postData.series.series_name;

    return (
        postData.series && (
            <div className='series-container'>
                <h2>
                    <a>{seriesTitle}</a>
                </h2>
                <div className='bookmark-icon-positioner'>
                    <ImBookmark />
                </div>
                {isToggle && <RouterList />}
                <div className='series-btns'>
                    <ListToggle isToggle={isToggle} setIsToggle={setIsToggle} />
                    <PreNext />
                </div>
            </div>
        )
    );
};

export default Series;
