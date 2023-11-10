import { Link } from "react-router-dom";

import GetPostDate from "components/atom/GetPostDate";
import EditButton from "./EditButton";
import React from "react";

type TSaves = {
    id: string,
    title: string,
    content: string,
    created: string,
    setPostId: React.Dispatch<React.SetStateAction<string>>,
    onModal: () => void,
}

const Saves = ({ id, title, content, created, setPostId, onModal }: TSaves):JSX.Element => {
    return (
        <div className='saves-item-container'>
            <Link to={`/write?id=${id}&status=3`}>
                <h3>{title}</h3>
            </Link>
            <Link to={`/write?id=${id}&status=3`}>
                <p>{content}</p>
            </Link>
            <section>
                <GetPostDate postDate={created} />
                <EditButton
                    text='삭제'
                    onClick={() => {
                        onModal();
                        setPostId(id);
                    }} />
            </section>
        </div>
    )
}

export default Saves;
