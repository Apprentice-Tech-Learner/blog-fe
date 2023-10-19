import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";

import { apiClient } from "common/axios";
import { RootState } from "store";

import { Toastify } from "components/atom";
import ContentWrapper from "../ContentWrapper";
import {setWritePost} from "../../../../store/post";
import Setting from "./Setting";

type TPostSeries = {
    series_id: number,
    series_name: string,
}

const SettingSeries = ():JSX.Element => {
    const [seriesList, setSeriesList] = useState([]);
    const [seriesName, setSeriesName] = useState('');
    const { isSeriesList, seriesId } = useSelector((state: RootState) => state.writePost);
    const dispatch = useDispatch();

    useEffect(() => {
        const initialSetting = async () => {
            try {
                const config = {
                    headers: { Authorization: `Bearer ${localStorage.getItem('accessToken')}` },
                };
                const { data } = await apiClient.get(`/series/${seriesId}`, config);
                console.log(data);
            } catch (error) {
                toast.error('시리즈 초기화 불러오기 실패');
                console.log('uploadModal series initial setting error =>', error);
            }
        };

        if (seriesId != null) {
            initialSetting();
        }
    }, []);

    const getSeriesList = async () => {
        try {
            const config = {
                headers: { Authorization: `Bearer ${localStorage.getItem('accessToken')}` },
            };
            const { data } = await apiClient.get(`/series`, config);

            if (data !== 'nodata') {
                dispatch(setWritePost({ type: 'isSeriesList', value: true }));
                setSeriesList(data);
            }
        } catch (error) {
            toast.error('시리즈 초기화 불러오기 실패');
            console.log('uploadModal series initial setting error =>', error);
        }
    };

    useEffect(() => {
        return () => {
            dispatch(setWritePost({ type: 'isSeriesList', value: false }));
        };
    }, []);

    return (
        <ContentWrapper contentTitle={'시리즈 설정'}>
            <div className='setting-series-container'>
                {
                    isSeriesList ? (
                        <Setting getSeriesList={getSeriesList}/>
                    ) : (
                        <div></div>
                    )
                }
            </div>
            <Toastify />
        </ContentWrapper>
    );
}

export default SettingSeries;
