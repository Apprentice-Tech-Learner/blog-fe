import { Button } from "components/atom";

type TConfirmModal = {
    title: string,
    message: string,
    onClose: () => void,
    onMove: () => void,
}

const ConfirmModal = ({ title, message, onClose, onMove }: TConfirmModal):JSX.Element => {
    return (
        <>
            <div className='confirm-modal-background'/>
            <div className='confirm-modal-positioner'>
                <div className='confirm-modal-container'>
                    <h3>{title}</h3>
                    <p className='msg'>{message}</p>
                    <div className='button'>
                        <Button className='cancel' text='취소' onClick={onClose} />
                        <Button className='confirm' text='확인' onClick={onMove} />
                    </div>
                </div>
            </div>
        </>
    );
}

export default ConfirmModal;
