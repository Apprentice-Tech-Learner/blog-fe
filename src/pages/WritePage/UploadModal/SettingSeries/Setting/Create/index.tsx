import { useState } from "react";
import { toast } from "react-toastify";

import { apiClient } from "common/axios";
import { Button } from "components/atom";

type TCreate = {
    getSeriesList: () => Promise<void>,
}

const Create = ({ getSeriesList }: TCreate):JSX.Element => {
    const [isInputOpen, setIsInputOpen] = useState(false);
    const [addSeriesValue, setAddSeriesValue] = useState('');

    const addSeries = async () => {
        try {
            const config = {
                headers: { Authorization: `Bearer ${localStorage.getItem('accessToken')}` },
            };
            const bodyData = {
                series_name: addSeriesValue,
            };
            await apiClient.post(`/series`, bodyData, config);
            await getSeriesList();
            setIsInputOpen(false);
        } catch (error) {
            toast.error('시리즈 생성 실패');
            console.log(error);
        }
    }

    const closeAddSeries = () => {
        setIsInputOpen(false);
        setAddSeriesValue('');
    }

    return (
        <div className='create-controller'>
            <input className='url-create-input' type='text' placeholder='새로운 시리즈 이름을 입력하세요.'
                   onClick={() => setIsInputOpen(true)} value={addSeriesValue}
                   onChange={e => setAddSeriesValue(e.target.value.replace(/ /g, '-'))} />
            {isInputOpen && (
                <div className='url-slug-wrapper'>
                    <div className='url-slug-input-wrapper'>
                        <span>${`/@userid/series/`}</span>
                        <input className='url-slug-input' type='text' value={addSeriesValue} onChange={e => setAddSeriesValue(e.target.value)} />
                    </div>
                    <div className='btns'>
                        <Button text='취소' color='transparent' onClick={closeAddSeries} />
                        <Button text='시리즈 추가' color='teal' onClick={addSeries} />
                    </div>
                </div>
            )}
        </div>
    );
}

export default Create;
