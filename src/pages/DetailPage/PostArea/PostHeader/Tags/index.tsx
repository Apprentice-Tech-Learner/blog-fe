import { useSelector } from "react-redux";

import { RootState } from "store";

const Tags = () => {
    const { postData } = useSelector((state: RootState) => state.detailPost);

    return (
        <div className='post-tags-container'>
            { postData.tags &&
                postData.tags.map(tag => {
                    return (
                        <a key={tag.tag.name} href={`/`}> {/* TODO : tag 조회페이지 신설 */}
                            {tag.tag.name}
                        </a>
                    );
                })
            }
        </div>
    );
};

export default Tags;
