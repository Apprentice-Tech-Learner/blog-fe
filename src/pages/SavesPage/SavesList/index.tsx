import { useEffect, useState } from "react";

import { apiClient } from "common/axios";

import { Toastify } from "components/atom";
import NoSaves from "./NoSaves";
import Saves from "./Saves";
import ConfirmModal from "../../../components/molecule/ConfirmModal";

type TSave = {
    post_id: string,
    title: string,
    content: string,
    created: string,
}

const SavesList = ():JSX.Element => {
    const [savesList, setSavesList] = useState([]);
    const [postId, setPostId] = useState('');
    const [isNoSaves, setIsNoSaves] = useState(false);
    const [isModal, setIsModal] = useState(false);

    const getSavesList = async () => {
        try {
            const { data } = await apiClient.get('/post/saves');
            setSavesList(data);
            !data && setIsNoSaves(true);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getSavesList();
    }, []);

    const deletePost = async () => {

    }

    const onModal = () => {
        setIsModal(true);
    };

    return (
        <>
            {
                savesList && !isNoSaves && (
                    <div>
                        {
                            savesList.map((save: TSave) => (
                                <Saves
                                    key={save.post_id}
                                    id={save.post_id}
                                    title={save.title}
                                    content={save.content}
                                    created={save.created}
                                    setPostId={setPostId}
                                    onModal={onModal}
                                />
                            ))
                        }
                        {
                            isModal && (
                                <ConfirmModal
                                    title='임시 글 삭제'
                                    message={`임시 저장한 글을 삭제하시겠습니까?\n삭제한 글은 복구할 수 없습니다.`}
                                    onClose={() => {
                                        setIsModal(false);
                                    }}
                                    onMove={deletePost}
                                />
                            )
                        }
                        <Toastify />
                    </div>
                )
            }
            {isNoSaves && <NoSaves />}
        </>
    );
};

export default SavesList;
