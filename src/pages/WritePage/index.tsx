import Editor from "./Editor";
import Preview from "./Preview";
import { Toastify } from "components/atom";

const WritePage = (): JSX.Element => {
    return (
        <div className='write-container'>
            <>
                <Editor />
                <Preview />
            </>
            <Toastify />
        </div>
    )
}

export default WritePage;
