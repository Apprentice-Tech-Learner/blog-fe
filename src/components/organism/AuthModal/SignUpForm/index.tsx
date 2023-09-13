import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";

import { RootState } from "store";
import { setEmail } from "store/common";
import { Button, Toastify } from "components/atom";

const SignUpForm = () => {
    const navigate = useNavigate();
    const [isEmail, setIsEmail] = useState(false);
    const dispatch = useDispatch();
    const { email } = useSelector((state: RootState) => state.auth);

    const getEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
        const emailRegex = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
        const emailCurrent = e.target.value;
        dispatch(setEmail(emailCurrent));

        if (!emailRegex.test(emailCurrent)) {
            setIsEmail(false);
        } else {
            setIsEmail(true);
        }
    }

    const error = () => toast.error('이메일 형식을 확인해주세요!');

    const checkEmail = () => {

    }

    return (
        <div className='signup-form'>
            <div className='input-wrapper'>
                <input type='text' placeholder='이메일을 입력하세요.' onChange={getEmail} value={email} />
                <Button color='teal' onClick={ () => {
                    isEmail ? checkEmail() : error()
                }} text='중복확인' />
            </div>
            <Toastify />
        </div>
    )
}

export default SignUpForm;
