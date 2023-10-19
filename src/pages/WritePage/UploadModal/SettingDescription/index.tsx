import { useDispatch, useSelector } from "react-redux";

import { RootState } from "store";
import { setWritePost } from "store/post";

const SettingDescription = ():JSX.Element => {
    const { title, description } = useSelector((state: RootState) => state.writePost);
    const dispatch = useDispatch();
    const descriptionLength = description.replace(/<br\s*\/?>/gm, '\n').length;

    return (
        <div className='setting-description-container'>
            <h4>{title}</h4>
            <textarea placeholder='당신의 포스트를 짧게 소개해보세요.' value={description} onChange={e => dispatch(setWritePost({ type: 'description', value: e.target.value }))} maxLength={400} />
            <p style={{ color: descriptionLength >= 400 ? 'var(--prism-code-3)' : 'var(--text1)' }}>{descriptionLength}/400</p>
        </div>
    );
}

export default SettingDescription;
