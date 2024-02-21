import { VscTriangleDown, VscTriangleUp } from "react-icons/vsc";

const ListToggle = ({ isToggle, setIsToggle }) => {
    return (
        <div className='list-toggle-container' onClick={() => setIsToggle(!isToggle)}>
            { isToggle ? <VscTriangleUp /> : <VscTriangleDown /> }
            { isToggle ? '숨기기' : '목록 보기' }
        </div>
    );
};


export default ListToggle;
