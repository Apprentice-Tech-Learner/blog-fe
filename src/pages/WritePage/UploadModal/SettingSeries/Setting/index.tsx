import Create from "./Create";

type TSetting = {
    getSeriesList: () => Promise<void>,
}

const Setting = ({ getSeriesList }: TSetting):JSX.Element => {
    return (
        <div className='setting-container'>
            <Create getSeriesList={getSeriesList} />
        </div>
    );
}

export default Setting;
