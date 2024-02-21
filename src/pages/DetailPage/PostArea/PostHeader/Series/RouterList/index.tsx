import { useSelector } from "react-redux";
import { RootState } from "store";

const RouterList = () => {
    const { postData } = useSelector((state: RootState) => state.detailPost);

    return (
        <ol className='router-list-container'>
            {postData.series.series_list.map(seriesInfo => {
                return (
                    <li key={seriesInfo.post_id}>
                        <a className={seriesInfo.post_id === postData.post_id ? 'current-post-link' : ''} href={`/post/${seriesInfo.post_id}`}>
                            {seriesInfo.title}
                        </a>
                    </li>
                );
            })}
        </ol>
    );
};

export default RouterList;
