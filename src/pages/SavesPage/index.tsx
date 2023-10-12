import SavesList from "./SavesList";

const SavesPage = (): JSX.Element => {
    return (
        <div className='saves-container'>
            <h1 className='title'>임시 글 목록</h1>
            <SavesList />
        </div>
    )
}

export default SavesPage;
