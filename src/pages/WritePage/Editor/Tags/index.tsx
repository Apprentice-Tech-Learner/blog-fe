import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { RootState } from "store";
import { setWritePost } from "store/post";

const Tags = (): JSX.Element => {
    const [inputValue, setInputValue] = useState('');
    const [isGuide, setIsGuide] = useState(false);
    const { tags } = useSelector((state: RootState) => state.writePost);
    const dispatch = useDispatch();

    const removeTag = (e: React.MouseEvent<HTMLDivElement>) => {
        const updateTags: string[] = [...tags];
        // @ts-ignore
        let delIndex = updateTags.indexOf(e.target.innerText);
        updateTags.splice(delIndex, 1);
        dispatch(setWritePost({ type: 'tags', value: updateTags }));
    }

    const popupGuide = () => {
        setIsGuide(true);
        setTimeout(() => {
            setIsGuide(false);
        }, 3000);
    }

    const pushTag = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            const updateTags: string[] = [...tags];
            setInputValue('');

            if (updateTags.includes(inputValue) || inputValue == '') {
                return;
            } else {
                updateTags.push(inputValue);
                dispatch(setWritePost({ type: 'tags', value: updateTags }));
            }
        }
    }

    return (
        <div className='tags-container'>
            {tags.map(tag => {
                return (
                    <div key={tag} className='tag-wrapper' onClick={removeTag}>
                        <div className='tag'>{tag}</div>
                    </div>
                );
            })}
            <input
                className='tag-input'
                type='text'
                placeholder='태그를 입력하세요'
                onClick={popupGuide}
                value={inputValue}
                onChange={e => setInputValue(e.target.value)}
                onKeyUp={pushTag}
            />
            <div className='guide-box-positioner'>
                <div className={isGuide ? 'tag-input-guide-box guide-active' : 'tag-input-guide-box'}>
                    <p>엔터를 입력하여 태그를 등록할 수 있습니다.</p>
                    <p>등록된 태그를 클릭하면 사라집니다.</p>
                </div>
            </div>
        </div>
    )
}

export default Tags;
