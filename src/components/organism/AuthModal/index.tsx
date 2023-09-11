import React, { useCallback, useState } from "react";
import { MdOutlineClose } from 'react-icons/md';

import SignUpForm from './SignUpForm';
import LoginForm from "./LoginForm";

import welcome from 'asset/images/welcome.png';

type TAuthModal = {
    isLoginModal: boolean,
    setIsLoginModal: React.Dispatch<React.SetStateAction<boolean>>,
}

const AuthModal = ({ isLoginModal, setIsLoginModal }: TAuthModal): JSX.Element => {
    const [isSignUpModal, setIsSignUpModal] = useState(false);

    const onClose = useCallback(() => {
        setIsLoginModal(false);
    }, [isLoginModal]);


    return (
        <>
            <div className='modal-background' />
            <div className='modal-positioner'>
                <div className='modal-login-container'>
                    <div className='left-block'>
                        <img alt='welcome' src={welcome} />
                        <div className='welcome'>환영합니다!</div>
                    </div>
                    <div className='right-block'>
                        <div className='exit'>
                            <MdOutlineClose className='icon' onClick={() => setIsLoginModal(false)} />
                        </div>
                        <div className='wrapper'>
                            <h2>{isSignUpModal ? '회원가입' : '로그인'}</h2>
                            <section>
                                <h4>{isSignUpModal ? '이메일로 회원가입' : '아이디로 로그인'}</h4>
                                {isSignUpModal ? <SignUpForm setIsLoginModal={setIsLoginModal} /> : <LoginForm onClose={onClose} />}
                            </section>
                        </div>
                        <div className='foot'>
                            <span>{isSignUpModal ? '계정이 이미 있으신가요?' : '아직 회원이 아니신가요?'}</span>
                            <div
                                className='link'
                                onClick={() => {
                                    setIsSignUpModal(!isSignUpModal);
                                }}
                                // tabIndex='8'
                            >
                                {isSignUpModal ? '로그인' : '회원가입'}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AuthModal;
