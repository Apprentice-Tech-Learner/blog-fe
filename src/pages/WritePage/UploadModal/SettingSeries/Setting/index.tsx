import Create from "./Create";
import SeriesList from "./SeriesList";

type TSetting = {
    getSeriesList: () => Promise<void>,
    seriesList: any[],
    selectSeries: (e) => void,
}

const Setting = ({ getSeriesList, seriesList, selectSeries }: TSetting):JSX.Element => {
    return (
        <div className='setting-container'>
            <Create getSeriesList={getSeriesList} />
            <SeriesList seriesList={seriesList} selectSeries={selectSeries} />
        </div>
    );
}

export default Setting;
