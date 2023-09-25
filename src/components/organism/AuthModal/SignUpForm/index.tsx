import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";

import { RootState } from "store";
import { setMemberId } from "store/common";
import { Button, Toastify } from "components/atom";
import { apiClient } from "api";
import {isAxiosError} from "axios";

type TSignUpForm = {
    onClose: () => void,
}

const SignUpForm = ({ onClose }: TSignUpForm) => {
    const navigate = useNavigate();
    const [isValid, setIsValid] = useState(false);
    const dispatch = useDispatch();
    const { member_id } = useSelector((state: RootState) => state.auth);

    const chkId = (e: React.ChangeEvent<HTMLInputElement>) => {
        const regex = /^[a-zA-Z0-9]*$/;
        const current = e.target.value;
        dispatch(setMemberId(current));

        if (!regex.test(current) || current === '') {
            setIsValid(false);
        } else {
            setIsValid(true);
        }
    }

    const error = () => toast.error('대소문자, 숫자만 허용됩니다!');

    const checkDuplicate = async () => {
        try {
            const request = `/login/find/${member_id}`;
            const response = await apiClient.get(request);

            if (isValid && response.status === 200) {
                // toast.info(response.data);
                onClose();

                navigate(`/registry`);
            }
        } catch (error: unknown) {
            console.log(error);
            if (isAxiosError(error)) {
                if (error.response?.status === 409) {
                    toast.error('이미 사용 중인 아이디입니다.');
                }
            }
        }
    }

    return (
        <div className='signup-form'>
            <div className='input-wrapper'>
                <input type='text' required placeholder='아이디를 입력하세요.' onChange={chkId} value={member_id} />
                <Button color='teal' onClick={ () => {
                    isValid ? checkDuplicate() : error()
                }} text='중복확인' />
            </div>
            <Toastify />
        </div>
    )
}

export default SignUpForm;
