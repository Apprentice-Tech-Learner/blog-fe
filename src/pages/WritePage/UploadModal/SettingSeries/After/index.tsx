import { AiTwotoneSetting } from "react-icons/ai";

type TAfter = {
    seriesName: string,
    getSeriesList: () => Promise<void>,
    removeSeries: () => void,
}

const After = ({ seriesName, getSeriesList, removeSeries }: TAfter):JSX.Element => {
    return (
        <div className='setting-series-after-container'>
            <span>${seriesName}</span>
            <div className='setting-btn' onClick={getSeriesList}>
                <AiTwotoneSetting />
            </div>
            <p className='remove-btn' onClick={removeSeries}>
                시리즈에서 제거
            </p>
        </div>
    );
}

export default After;
