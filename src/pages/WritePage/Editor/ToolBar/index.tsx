const ToolBar = () => {
    const ToolBarHTagList = ['H1', 'H2', 'H3', 'H4'];
    const ToolBarBtnListMid = ['ql-bold', 'ql-italic', 'ql-strike'];
    const ToolBarBtnListRight = ['ql-blockquote', 'ql-link', 'ql-image', 'ql-code'];

    return (
        <div className='toolbar-container' id='toolbar'>
            {ToolBarHTagList.map(tag => {
                return <button key={tag} className='ql-header' value={tag}>
                            <div className='jdu-ql-header'>
                                H<span>{tag.substring(1)}</span>
                            </div>
                       </button>;
            })}
            <div className='vertical-line' />
            {ToolBarBtnListMid.map(btnType => {
                return <button key={btnType} className={btnType} />;
            })}
            <div className='vertical-line' />
            {ToolBarBtnListRight.map(btnType => {
                return <button key={btnType} className={btnType} />;
            })}
        </div>
    );
}

export default ToolBar;
