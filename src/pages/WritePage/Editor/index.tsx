import { useDispatch, useSelector } from "react-redux";

import Tags from "./Tags";
import ToolBar from "./ToolBar";
import WriteZone from "./WriteZone";
import EditorFooter from "./EditorFooter";

import { RootState } from "store";
import { setWritePost } from "store/post";

const Editor = ():JSX.Element => {
    const { title, content } = useSelector((state: RootState) => state.writePost);
    const dispatch = useDispatch();

    return (
        <div className='editor-container'>
            <div className='wrapper'>
                <textarea className='editor-title' placeholder='제목을 입력하세요.' value={title} onChange={event => dispatch(setWritePost({ type: 'title', value: event.target.value }))} />
                <div className='dividing-line' />
                <Tags />
                <ToolBar />
                <WriteZone />
            </div>
            <EditorFooter />
        </div>
    )
}

export default Editor;
