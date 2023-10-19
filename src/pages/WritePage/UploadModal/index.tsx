import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { RootState } from "store";
import { setWritePost } from "store/post";

import SettingThumbnail from "./SettingThumbnail";
import SettingDescription from "./SettingDescription";
import SettingPublic from "./SettingPublic";
import SettingSeries from "./SettingSeries";

const UploadModal = ():JSX.Element => {
    const { isUploadModal, isSeriesList } = useSelector((state:RootState) => state.writePost);
    const dispatch = useDispatch();

    useEffect(() => {
        if (isUploadModal) {
            window.history.pushState(null, '', '');
            window.onpopstate = () => {
                dispatch(setWritePost({ type: 'isUploadModal', value: false }));
            };
        } else {
            window.onpopstate = () => {};
        }
    }, [isUploadModal]);

    return (
        <div className='upload-modal-container'>
            <div className='upload-modal-content'>
                <div className='left-section'>
                    <SettingThumbnail />
                    <SettingDescription />
                </div>
                <div className='upload-modal-dividing-line' />
                <div className='right-section'>
                    <div className='right-section-content'>
                        {!isSeriesList && <SettingPublic />}
                        <SettingSeries />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UploadModal;
