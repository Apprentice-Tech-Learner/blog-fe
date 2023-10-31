import { useSelector } from "react-redux";

import { RootState } from "store";

type tSeriesList = {
    seriesList: any[],
    selectSeries: (e) => void,
}

const SeriesList = ({ seriesList, selectSeries }: tSeriesList):JSX.Element => {
    const { seriesId } = useSelector((state: RootState) => state.writePost);

    return (
        <div className='series-list-container'>
            <ul className='series-list'>
                {seriesList.map(seriesInfo => {
                    return (
                        <li key={seriesInfo.series_name} className={seriesInfo.series_id === seriesId ? 'active' : ''} id={seriesInfo.series_id} onClick={selectSeries}>
                            {seriesInfo.series_name}
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}

export default SeriesList;
